import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Tesseract3DProps {
  className?: string;
  size?: number;
  glowColor?: string;
}

export function Tesseract3D({
  className = '',
  size = 300,
  glowColor = '#ff00ff'
}: Tesseract3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const w = size;
    const h = size;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create tesseract (hypercube projection)
    const group = new THREE.Group();

    // Inner cube
    const innerGeo = new THREE.BoxGeometry(1, 1, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x111118,
      transparent: true,
      opacity: 0.3
    });
    const innerCube = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerCube);

    // Inner wireframe
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerLine = new THREE.LineSegments(
      innerEdges,
      new THREE.LineBasicMaterial({ color: glowColor, transparent: true, opacity: 0.8 })
    );
    group.add(innerLine);

    // Outer cube
    const outerGeo = new THREE.BoxGeometry(2, 2, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.1
    });
    const outerCube = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerCube);

    // Outer wireframe
    const outerEdges = new THREE.EdgesGeometry(outerGeo);
    const outerLine = new THREE.LineSegments(
      outerEdges,
      new THREE.LineBasicMaterial({ color: new THREE.Color(glowColor).multiplyScalar(0.5), transparent: true, opacity: 0.4 })
    );
    group.add(outerLine);

    // Connecting lines (tesseract edges)
    const connectingMat = new THREE.LineBasicMaterial({
      color: glowColor,
      transparent: true,
      opacity: 0.3
    });

    const corners = [
    [-0.5, -0.5, -0.5],
    [0.5, -0.5, -0.5],
    [0.5, 0.5, -0.5],
    [-0.5, 0.5, -0.5],
    [-0.5, -0.5, 0.5],
    [0.5, -0.5, 0.5],
    [0.5, 0.5, 0.5],
    [-0.5, 0.5, 0.5]];


    corners.forEach((inner) => {
      const outer = inner.map((v) => v * 2);
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(...inner),
      new THREE.Vector3(...(outer as [number, number, number]))]
      );
      const line = new THREE.Line(lineGeo, connectingMat);
      group.add(line);
    });

    // Glow sphere at center
    const glowMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(glowColor) }
      },
      vertexShader: `
				varying vec3 vNormal;
				void main() {
					vNormal = normalize(normalMatrix * normal);
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,
      fragmentShader: `
				uniform float uTime;
				uniform vec3 uColor;
				varying vec3 vNormal;
				void main() {
					float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
					float pulse = 0.7 + 0.3 * sin(uTime * 1.5);
					gl_FragColor = vec4(uColor * intensity * pulse, intensity * 0.6);
				}
			`,
      transparent: true,
      side: THREE.FrontSide
    });

    const glowSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 32, 32),
      glowMat
    );
    group.add(glowSphere);

    scene.add(group);

    // Manual rotation control
    let isDragging = false;
    let previousMouse = { x: 0, y: 0 };
    let targetRotation = { x: 0.3, y: 0 };
    let currentRotation = { x: 0.3, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMouse = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - previousMouse.x;
      const dy = e.clientY - previousMouse.y;
      targetRotation.y += dx * 0.008;
      targetRotation.x += dy * 0.008;
      targetRotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotation.x));
      previousMouse = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Auto rotate when not dragging
      if (!isDragging) {
        targetRotation.y += 0.003;
      }

      // Smooth interpolation
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

      group.rotation.x = currentRotation.x;
      group.rotation.y = currentRotation.y;

      // Update glow
      glowMat.uniforms.uTime.value = elapsed;

      // Subtle inner cube animation
      innerCube.rotation.x = elapsed * 0.2;
      innerCube.rotation.z = elapsed * 0.15;
      innerLine.rotation.x = elapsed * 0.2;
      innerLine.rotation.z = elapsed * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [size, glowColor]);

  return (
    <div data-ev-id="ev_6103aa9012"
    ref={containerRef}
    className={`cursor-grab active:cursor-grabbing ${className}`}
    style={{ width: size, height: size }} />);