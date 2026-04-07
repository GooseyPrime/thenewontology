"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT_DESKTOP = 180;
const PARTICLE_COUNT_MOBILE = 90;
const CONNECTION_RADIUS = 190;
const MOUSE_RADIUS = 200;
const BASE_VELOCITY = 0.35;
const ACCENT_RGB = { r: 155, g: 188, b: 255 };

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  energy: number;
}

export default function KinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let isVisible = true;
    const mouse = { x: null as number | null, y: null as number | null };

    const init = () => {
      particles = [];
      const count =
        typeof window !== "undefined" && window.innerWidth <= 768
          ? PARTICLE_COUNT_MOBILE
          : PARTICLE_COUNT_DESKTOP;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * BASE_VELOCITY,
          vy: (Math.random() - 0.5) * BASE_VELOCITY,
          size: Math.random() * 1.8 + 0.8,
          energy: 0.3 + Math.random() * 0.6,
        });
      }
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const connectParticles = () => {
      const { r, g, b } = ACCENT_RGB;
      for (let a = 0; a < particles.length; a++) {
        for (let bIdx = a + 1; bIdx < particles.length; bIdx++) {
          const dx = particles[a].x - particles[bIdx].x;
          const dy = particles[a].y - particles[bIdx].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_RADIUS) {
            const opacity = (1 - dist / CONNECTION_RADIUS) * 0.18;
            ctx.strokeStyle = `rgba(${r},${g},${b},${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[bIdx].x, particles[bIdx].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = "#0f1115";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { r, g, b } = ACCENT_RGB;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            p.x -= (dx / dist) * force * p.size * 2;
            p.y -= (dy / dist) * force * p.size * 2;
          }
        }

        ctx.save();
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.energy * 0.45})`;
        ctx.fill();
        ctx.restore();
      }

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleVisibility = () => { isVisible = document.visibilityState === "visible"; };
    const handleMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseOut = () => { mouse.x = null; mouse.y = null; };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
