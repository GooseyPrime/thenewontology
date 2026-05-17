import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Drone3DProps {
  className?: string;
  size?: number;
}

export function Drone3D({ className = '', size = 200 }: Drone3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const w = size;
    const h = size;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 5;
    camera.position.y = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x7dd3fc, 1, 20);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xc4b5fd, 0.5, 20);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    // Create friendly drone
    const droneGroup = new THREE.Group();

    // Body - rounded sphere
    const bodyGeo = new THREE.SphereGeometry(0.6, 32, 32);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x7dd3fc,
      metalness: 0.3,
      roughness: 0.4
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    droneGroup.add(body);

    // Eyes - two small spheres
    const eyeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.5
    });

    const eyeLeft = new THREE.Mesh(eyeGeo, eyeMat);
    eyeLeft.position.set(-0.2, 0.1, 0.5);
    droneGroup.add(eyeLeft);

    const eyeRight = new THREE.Mesh(eyeGeo, eyeMat);
    eyeRight.position.set(0.2, 0.1, 0.5);
    droneGroup.add(eyeRight);

    // Pupils
    const pupilGeo = new THREE.SphereGeometry(0.05, 12, 12);
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x0b1b3d });

    const pupilLeft = new THREE.Mesh(pupilGeo, pupilMat);
    pupilLeft.position.set(-0.2, 0.1, 0.6);
    droneGroup.add(pupilLeft);

    const pupilRight = new THREE.Mesh(pupilGeo, pupilMat);
    pupilRight.position.set(0.2, 0.1, 0.6);
    droneGroup.add(pupilRight);

    // Propeller arms
    const armGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 8);
    const armMat = new THREE.MeshStandardMaterial({
      color: 0xc4b5fd,
      metalness: 0.5,
      roughness: 0.3
    });

    const positions = [
    [0.7, 0.2, 0.5],
    [-0.7, 0.2, 0.5],
    [0.7, 0.2, -0.5],
    [-0.7, 0.2, -0.5]];


    const propellers: THREE.Mesh[] = [];

    positions.forEach((pos, i) => {
      const arm = new THREE.Mesh(armGeo, armMat);
      arm.rotation.z = Math.PI / 2;
      arm.position.set(pos[0] * 0.6, pos[1], pos[2]);
      droneGroup.add(arm);

      // Propeller ring
      const propGeo = new THREE.TorusGeometry(0.25, 0.03, 8, 24);
      const propMat = new THREE.MeshStandardMaterial({
        color: 0x7dd3fc,
        metalness: 0.6,
        roughness: 0.2,
        transparent: true,
        opacity: 0.7
      });
      const prop = new THREE.Mesh(propGeo, propMat);
      prop.position.set(pos[0], pos[1] + 0.15, pos[2]);
      prop.rotation.x = Math.PI / 2;
      droneGroup.add(prop);
      propellers.push(prop);
    });

    // Antenna
    const antennaGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
    const antenna = new THREE.Mesh(antennaGeo, armMat);
    antenna.position.set(0, 0.7, 0);
    droneGroup.add(antenna);

    const antennaTip = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xc4b5fd, emissive: 0xc4b5fd, emissiveIntensity: 0.5 })
    );
    antennaTip.position.set(0, 0.9, 0);
    droneGroup.add(antennaTip);

    scene.add(droneGroup);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Floating motion
      droneGroup.position.y = Math.sin(elapsed * 2) * 0.15;
      droneGroup.rotation.y = Math.sin(elapsed * 0.5) * 0.3;
      droneGroup.rotation.z = Math.sin(elapsed * 1.5) * 0.05;

      // Spin propellers
      propellers.forEach((prop, i) => {
        prop.rotation.z = elapsed * (15 + i);
      });

      // Blink animation
      const blinkPhase = elapsed % 4;
      const eyeScale = blinkPhase > 3.8 && blinkPhase < 4 ? 0.1 : 1;
      eyeLeft.scale.y = eyeScale;
      eyeRight.scale.y = eyeScale;
      pupilLeft.scale.y = eyeScale;
      pupilRight.scale.y = eyeScale;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div data-ev-id="ev_03d0168625"
    ref={containerRef}
    className={className}
    style={{ width: size, height: size }} />);