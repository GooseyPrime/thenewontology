import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PlasmaBackgroundProps {
  className?: string;
}

export function PlasmaBackground({ className = '' }: PlasmaBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0505);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create plasma field using shader material
    const planeGeo = new THREE.PlaneGeometry(8, 6, 128, 128);

    const plasmaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPhase: { value: 0 },
        uOrganization: { value: 0.5 },
        uColor1: { value: new THREE.Color(0xff4500) }, // Orange-red
        uColor2: { value: new THREE.Color(0xff8c00) }, // Dark orange
        uColor3: { value: new THREE.Color(0xdc143c) }, // Crimson
        uColor4: { value: new THREE.Color(0xffa500) } // Orange
      },
      vertexShader: `
				varying vec2 vUv;
				varying vec3 vPosition;
				uniform float uTime;
				uniform float uOrganization;
				
				// Simplex noise functions
				vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
				vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
				vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
				vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
				
				float snoise(vec3 v) {
					const vec2 C = vec2(1.0/6.0, 1.0/3.0);
					const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
					vec3 i = floor(v + dot(v, C.yyy));
					vec3 x0 = v - i + dot(i, C.xxx);
					vec3 g = step(x0.yzx, x0.xyz);
					vec3 l = 1.0 - g;
					vec3 i1 = min(g.xyz, l.zxy);
					vec3 i2 = max(g.xyz, l.zxy);
					vec3 x1 = x0 - i1 + C.xxx;
					vec3 x2 = x0 - i2 + C.yyy;
					vec3 x3 = x0 - D.yyy;
					i = mod289(i);
					vec4 p = permute(permute(permute(
						i.z + vec4(0.0, i1.z, i2.z, 1.0))
						+ i.y + vec4(0.0, i1.y, i2.y, 1.0))
						+ i.x + vec4(0.0, i1.x, i2.x, 1.0));
					float n_ = 0.142857142857;
					vec3 ns = n_ * D.wyz - D.xzx;
					vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
					vec4 x_ = floor(j * ns.z);
					vec4 y_ = floor(j - 7.0 * x_);
					vec4 x = x_ *ns.x + ns.yyyy;
					vec4 y = y_ *ns.x + ns.yyyy;
					vec4 h = 1.0 - abs(x) - abs(y);
					vec4 b0 = vec4(x.xy, y.xy);
					vec4 b1 = vec4(x.zw, y.zw);
					vec4 s0 = floor(b0)*2.0 + 1.0;
					vec4 s1 = floor(b1)*2.0 + 1.0;
					vec4 sh = -step(h, vec4(0.0));
					vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
					vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
					vec3 p0 = vec3(a0.xy, h.x);
					vec3 p1 = vec3(a0.zw, h.y);
					vec3 p2 = vec3(a1.xy, h.z);
					vec3 p3 = vec3(a1.zw, h.w);
					vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
					p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
					vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
					m = m * m;
					return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
				}
				
				void main() {
					vUv = uv;
					vec3 pos = position;
					
					// Multi-layered noise for organic movement
					float noise1 = snoise(vec3(pos.xy * 1.5, uTime * 0.3));
					float noise2 = snoise(vec3(pos.xy * 3.0 + 100.0, uTime * 0.5)) * 0.5;
					float noise3 = snoise(vec3(pos.xy * 6.0 + 200.0, uTime * 0.8)) * 0.25;
					
					// Intelligent organization/disorganization pattern
					float orgPattern = sin(uTime * 0.15) * 0.5 + 0.5;
					float chaos = snoise(vec3(pos.xy * 0.5, uTime * 0.1)) * (1.0 - orgPattern);
					
					// Pulse effect
					float pulse = sin(uTime * 2.0 + length(pos.xy) * 2.0) * 0.1;
					
					pos.z += (noise1 + noise2 + noise3) * 0.4 * (0.5 + orgPattern * 0.5);
					pos.z += pulse;
					pos.z += chaos * 0.3;
					
					vPosition = pos;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
				}
			`,
      fragmentShader: `
				uniform float uTime;
				uniform float uPhase;
				uniform vec3 uColor1;
				uniform vec3 uColor2;
				uniform vec3 uColor3;
				uniform vec3 uColor4;
				varying vec2 vUv;
				varying vec3 vPosition;
				
				vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
				vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
				vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
				vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
				
				float snoise(vec3 v) {
					const vec2 C = vec2(1.0/6.0, 1.0/3.0);
					const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
					vec3 i = floor(v + dot(v, C.yyy));
					vec3 x0 = v - i + dot(i, C.xxx);
					vec3 g = step(x0.yzx, x0.xyz);
					vec3 l = 1.0 - g;
					vec3 i1 = min(g.xyz, l.zxy);
					vec3 i2 = max(g.xyz, l.zxy);
					vec3 x1 = x0 - i1 + C.xxx;
					vec3 x2 = x0 - i2 + C.yyy;
					vec3 x3 = x0 - D.yyy;
					i = mod289(i);
					vec4 p = permute(permute(permute(
						i.z + vec4(0.0, i1.z, i2.z, 1.0))
						+ i.y + vec4(0.0, i1.y, i2.y, 1.0))
						+ i.x + vec4(0.0, i1.x, i2.x, 1.0));
					float n_ = 0.142857142857;
					vec3 ns = n_ * D.wyz - D.xzx;
					vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
					vec4 x_ = floor(j * ns.z);
					vec4 y_ = floor(j - 7.0 * x_);
					vec4 x = x_ *ns.x + ns.yyyy;
					vec4 y = y_ *ns.x + ns.yyyy;
					vec4 h = 1.0 - abs(x) - abs(y);
					vec4 b0 = vec4(x.xy, y.xy);
					vec4 b1 = vec4(x.zw, y.zw);
					vec4 s0 = floor(b0)*2.0 + 1.0;
					vec4 s1 = floor(b1)*2.0 + 1.0;
					vec4 sh = -step(h, vec4(0.0));
					vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
					vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
					vec3 p0 = vec3(a0.xy, h.x);
					vec3 p1 = vec3(a0.zw, h.y);
					vec3 p2 = vec3(a1.xy, h.z);
					vec3 p3 = vec3(a1.zw, h.w);
					vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
					p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
					vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
					m = m * m;
					return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
				}
				
				void main() {
					// Multiple noise layers for plasma effect
					float n1 = snoise(vec3(vUv * 3.0, uTime * 0.2)) * 0.5 + 0.5;
					float n2 = snoise(vec3(vUv * 5.0 + 50.0, uTime * 0.35)) * 0.5 + 0.5;
					float n3 = snoise(vec3(vUv * 8.0 + 100.0, uTime * 0.5)) * 0.5 + 0.5;
					float n4 = snoise(vec3(vUv * 2.0 + 150.0, uTime * 0.15)) * 0.5 + 0.5;
					
					// Combine noise for color mixing
					float colorMix1 = smoothstep(0.3, 0.7, n1);
					float colorMix2 = smoothstep(0.4, 0.6, n2);
					float colorMix3 = smoothstep(0.2, 0.8, n3);
					
					// Blend colors
					vec3 color = mix(uColor1, uColor2, colorMix1);
					color = mix(color, uColor3, colorMix2 * 0.6);
					color = mix(color, uColor4, colorMix3 * 0.4);
					
					// Pulsing brightness
					float pulse = sin(uTime * 1.5 + n4 * 6.28) * 0.15 + 1.0;
					
					// Energy concentrations
					float energy = pow(n1 * n2, 0.5) * 1.5;
					
					// Height-based intensity from vertex displacement
					float heightIntensity = smoothstep(-0.2, 0.5, vPosition.z) * 0.5 + 0.5;
					
					color *= pulse * heightIntensity;
					color += energy * uColor4 * 0.3;
					
					// Edge glow
					float edgeDist = 1.0 - length(vUv - 0.5) * 1.5;
					color *= smoothstep(0.0, 0.3, edgeDist);
					
					gl_FragColor = vec4(color, 1.0);
				}
			`,
      side: THREE.DoubleSide
    });

    const plane = new THREE.Mesh(planeGeo, plasmaMaterial);
    plane.position.z = -1;
    scene.add(plane);

    // Add floating plasma orbs
    const orbCount = 15;
    const orbs: THREE.Mesh[] = [];
    const orbData: {speed: number;offset: number;radius: number;}[] = [];

    for (let i = 0; i < orbCount; i++) {
      const orbGeo = new THREE.SphereGeometry(0.05 + Math.random() * 0.1, 16, 16);
      const orbMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.05 + Math.random() * 0.08, 1, 0.6),
        transparent: true,
        opacity: 0.8
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      orb.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2
      );
      scene.add(orb);
      orbs.push(orb);
      orbData.push({
        speed: 0.3 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        radius: 0.5 + Math.random() * 1.5
      });
    }

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      plasmaMaterial.uniforms.uTime.value = elapsed;

      // Animate orbs with intelligent-looking paths
      orbs.forEach((orb, i) => {
        const data = orbData[i];
        const t = elapsed * data.speed + data.offset;

        // Complex orbit pattern
        orb.position.x += Math.sin(t * 1.3) * 0.008 * Math.sin(elapsed * 0.1 + i);
        orb.position.y += Math.cos(t * 0.9) * 0.006 * Math.cos(elapsed * 0.15 + i);
        orb.position.z = Math.sin(t * 0.7) * 0.5;

        // Keep in bounds
        if (Math.abs(orb.position.x) > 3) orb.position.x *= 0.99;
        if (Math.abs(orb.position.y) > 2) orb.position.y *= 0.99;

        // Pulsing size
        const scale = 1 + Math.sin(t * 2) * 0.2;
        orb.scale.setScalar(scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      planeGeo.dispose();
      plasmaMaterial.dispose();
      orbs.forEach((orb) => {
        orb.geometry.dispose();
        (orb.material as THREE.MeshBasicMaterial).dispose();
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div data-ev-id="ev_82a8e858a3"
    ref={containerRef}
    className={`absolute inset-0 ${className}`}
    style={{ pointerEvents: 'none' }} />);
