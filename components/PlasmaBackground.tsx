"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT_DESKTOP = 240;
const PARTICLE_COUNT_MOBILE = 100;
const NOISE_SCALE = 0.0015;
interface PlasmaBackgroundProps {
  className?: string;
  intensity?: "hero" | "ambient";
}

interface Particle {
  x: number;
  y: number;
  hue: number;
}

// Compact 3D simplex noise (public-domain style implementation)
const grad3 = [
  [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
  [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
];

const perm = new Uint8Array(512);
const permMod12 = new Uint8Array(512);

(function initPerm() {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) {
    perm[i] = p[i & 255];
    permMod12[i] = perm[i] % 12;
  }
})();

function dot(g: number[], x: number, y: number, z: number) {
  return g[0] * x + g[1] * y + g[2] * z;
}

function noise3(x: number, y: number, z: number): number {
  const F3 = 1 / 3;
  const G3 = 1 / 6;
  const s = (x + y + z) * F3;
  const i = Math.floor(x + s);
  const j = Math.floor(y + s);
  const k = Math.floor(z + s);
  const t = (i + j + k) * G3;
  const X0 = i - t;
  const Y0 = j - t;
  const Z0 = k - t;
  const x0 = x - X0;
  const y0 = y - Y0;
  const z0 = z - Z0;
  let i1: number, j1: number, k1: number;
  let i2: number, j2: number, k2: number;
  if (x0 >= y0) {
    if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
    else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
    else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
  } else {
    if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
    else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
    else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
  }
  const x1 = x0 - i1 + G3;
  const y1 = y0 - j1 + G3;
  const z1 = z0 - k1 + G3;
  const x2 = x0 - i2 + 2 * G3;
  const y2 = y0 - j2 + 2 * G3;
  const z2 = z0 - k2 + 2 * G3;
  const x3 = x0 - 1 + 3 * G3;
  const y3 = y0 - 1 + 3 * G3;
  const z3 = z0 - 1 + 3 * G3;
  const ii = i & 255;
  const jj = j & 255;
  const kk = k & 255;
  let n0 = 0, n1 = 0, n2 = 0, n3 = 0;
  let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
  if (t0 >= 0) {
    t0 *= t0;
    n0 = t0 * t0 * dot(grad3[permMod12[ii + perm[jj + perm[kk]]]], x0, y0, z0);
  }
  t0 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
  if (t0 >= 0) {
    t0 *= t0;
    n1 = t0 * t0 * dot(grad3[permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]]], x1, y1, z1);
  }
  t0 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
  if (t0 >= 0) {
    t0 *= t0;
    n2 = t0 * t0 * dot(grad3[permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]]], x2, y2, z2);
  }
  t0 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
  if (t0 >= 0) {
    t0 *= t0;
    n3 = t0 * t0 * dot(grad3[permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]]], x3, y3, z3);
  }
  return 32 * (n0 + n1 + n2 + n3);
}

function curlVelocity(x: number, y: number, t: number, eps = 1): [number, number] {
  const nx = x * NOISE_SCALE;
  const ny = y * NOISE_SCALE;
  const n1 = noise3(nx, ny + eps, t);
  const n2 = noise3(nx + eps, ny, t);
  const n3 = noise3(nx, ny, t);
  const n4 = noise3(nx, ny - eps, t);
  const n5 = noise3(nx - eps, ny, t);
  const dNdy = (n1 - n4) / (2 * eps);
  const dNdx = (n2 - n5) / (2 * eps);
  return [dNdy * 0.75, -dNdx * 0.75];
}

export default function PlasmaBackground({
  className = "",
  intensity = "hero",
}: PlasmaBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: null as number | null, y: null as number | null });
  const attractorsRef = useRef(
    Array.from({ length: 4 }, (_, i) => ({
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      freqX: 0.00003 + i * 0.00001,
      freqY: 0.00004 + i * 0.000012,
      ampX: 0.25 + Math.random() * 0.2,
      ampY: 0.2 + Math.random() * 0.25,
    }))
  );
  const pulseRef = useRef({ active: false, x: 0, y: 0, start: 0 });
  const nextPulseRef = useRef(Date.now() + 30000 + Math.random() * 90000);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const trailAlpha = intensity === "hero" ? 0.05 : 0.07;
    let animationId = 0;
    let isVisible = true;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = window.innerWidth <= 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        hue: 15 + Math.random() * 30,
      }));
    };

    const drawStatic = () => {
      const g = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.4,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.8
      );
      g.addColorStop(0, "rgba(255, 69, 0, 0.15)");
      g.addColorStop(0.4, "rgba(255, 140, 0, 0.08)");
      g.addColorStop(1, "rgba(10, 5, 5, 1)");
      ctx.fillStyle = "#0a0505";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible) return;

      if (reducedMotion) {
        drawStatic();
        return;
      }

      time += 1;
      const t = time * 0.0002;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(10, 5, 5, ${trailAlpha})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      if (now > nextPulseRef.current) {
        pulseRef.current = {
          active: true,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          start: now,
        };
        nextPulseRef.current = now + 30000 + Math.random() * 90000;
      }

      const attractors = attractorsRef.current.map((a, i) => ({
        x: canvas.width * (0.5 + Math.sin(time * a.freqX + a.phaseX) * a.ampX),
        y: canvas.height * (0.5 + Math.cos(time * a.freqY + a.phaseY + i) * a.ampY),
      }));

      const pulse = pulseRef.current;
      let pulseStrength = 0;
      if (pulse.active) {
        const elapsed = (now - pulse.start) / 1000;
        if (elapsed > 6) pulse.active = false;
        else pulseStrength = Math.max(0, 1 - elapsed / 6);
      }

      ctx.globalCompositeOperation = "lighter";

      for (const p of particlesRef.current) {
        const [vx, vy] = curlVelocity(p.x, p.y, t);
        let ax = vx;
        let ay = vy;

        for (const att of attractors) {
          const dx = att.x - p.x;
          const dy = att.y - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 180 * 180 && distSq > 1) {
            const force = (0.3 * 180 * 180) / distSq;
            ax += (dx / Math.sqrt(distSq)) * force * 0.02;
            ay += (dy / Math.sqrt(distSq)) * force * 0.02;
          }
        }

        if (mouseRef.current.x != null && mouseRef.current.y != null) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && dist > 0) {
            const force = ((200 - dist) / 200) * 0.4;
            ax += (dx / dist) * force;
            ay += (dy / dist) * force;
          }
        }

        if (pulseStrength > 0) {
          const dx = p.x - pulse.x;
          const dy = p.y - pulse.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const ringRadius = ((now - pulse.start) / 1000) * 80;
          if (Math.abs(dist - ringRadius) < 40) {
            ax += (dx / dist) * pulseStrength * 0.5;
            ay += (dy / dist) * pulseStrength * 0.5;
          }
        }

        p.x += ax;
        p.y += ay;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        p.hue += (noise3(p.x * 0.002, p.y * 0.002, t * 2) - 0.5) * 0.15;
        p.hue = Math.max(15, Math.min(45, p.hue));

        const radius = 7 + Math.random() * 3;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        g.addColorStop(0, `hsla(${p.hue}, 95%, 58%, 0.9)`);
        g.addColorStop(1, `hsla(${p.hue}, 90%, 50%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onOut = () => {
      mouseRef.current = { x: null, y: null };
    };
    const onVisibility = () => {
      isVisible = document.visibilityState === "visible";
    };

    resize();
    if (reducedMotion) drawStatic();
    else animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onOut);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onOut);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
