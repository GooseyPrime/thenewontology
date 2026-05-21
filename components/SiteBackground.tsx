"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision mediump float;
uniform float uTime;
uniform vec2 uResolution;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  uv = uv * 2.0 - 1.0;
  uv.x *= uResolution.x / uResolution.y;

  float t = uTime;

  vec2 light0 = vec2(sin(t * 0.23) * 0.6, cos(t * 0.17) * 0.5);
  vec2 light1 = vec2(cos(t * 0.31) * 0.8, sin(t * 0.19) * 0.7);
  vec2 light2 = vec2(sin(t * 0.13 + 1.1) * 0.5, cos(t * 0.29 + 2.3) * 0.6);
  vec2 light3 = vec2(cos(t * 0.41 + 0.7) * 0.9, sin(t * 0.11 + 1.8) * 0.4);

  vec3 baseBg = vec3(0.05098, 0.01961, 0.0);
  vec3 primaryOrb = vec3(0.54510, 0.14510, 0.0);
  vec3 secondaryOrb = vec3(0.76863, 0.25490, 0.10980);
  vec3 tertiaryOrb = vec3(0.36078, 0.10196, 0.0);
  vec3 highlightBloom = vec3(1.0, 0.41569, 0.10196);
  vec3 warmTint = vec3(0.22745, 0.05490, 0.0);

  vec3 color = mix(baseBg, warmTint, 0.35);

  float d0 = length(uv - light0);
  float atten0 = 1.0 / (1.0 + 3.5 * d0 * d0);
  color += primaryOrb * atten0;

  float d1 = length(uv - light1);
  float atten1 = 1.0 / (1.0 + 3.5 * d1 * d1);
  color += secondaryOrb * atten1;

  float d2 = length(uv - light2);
  float atten2 = 1.0 / (1.0 + 3.5 * d2 * d2);
  color += tertiaryOrb * atten2;

  float d3 = length(uv - light3);
  float atten3 = 1.0 / (1.0 + 3.5 * d3 * d3);
  color += mix(primaryOrb, highlightBloom, 0.6) * atten3;

  float fresnel = pow(1.0 - abs(uv.y * 0.6), 3.0) * 0.35;
  color += highlightBloom * fresnel;

  float n = fract(sin(dot(uv + uTime * 0.04, vec2(12.9898, 78.233))) * 43758.5453);
  color = mix(color, color + vec3(n * 0.03), 0.5);

  color = clamp(color, 0.0, 1.0);
  gl_FragColor = vec4(color, 1.0);
}
`;

const STATIC_GRADIENT =
  "radial-gradient(ellipse at 30% 60%, #8B2500 0%, #3A0E00 40%, #0d0500 80%)";

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function SiteBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      canvas.style.background = STATIC_GRADIENT;
      return;
    }

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) {
      canvas.style.background = STATIC_GRADIENT;
      return;
    }

    const vertShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertShader || !fragShader) {
      canvas.style.background = STATIC_GRADIENT;
      return;
    }

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      canvas.style.background = STATIC_GRADIENT;
      return;
    }

    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "position");
    if (posLoc >= 0) {
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    }

    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uResolutionLoc = gl.getUniformLocation(program, "uResolution");

    let animationFrameId = 0;
    let lastTime = performance.now();
    let elapsed = 0;
    let isVisible = document.visibilityState === "visible";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(canvas.clientWidth * dpr);
      const height = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisible) return;

      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += delta;

      gl.uniform1f(uTimeLoc, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(posBuffer);
      const loseContext = gl.getExtension("WEBGL_lose_context");
      loseContext?.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
