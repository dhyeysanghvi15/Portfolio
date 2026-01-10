"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function ThreatMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      radius: 1.2 + Math.random() * 1.4
    }));

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const scale = window.devicePixelRatio || 1;
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const cursor = { x: 0.5, y: 0.5 };

    const handleMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursor.x = (event.clientX - rect.left) / rect.width;
      cursor.y = (event.clientY - rect.top) / rect.height;
    };

    window.addEventListener("mousemove", handleMove);

    const draw = () => {
      const motionScale = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--motion-scale"
        )
      ) || 1;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(17, 236, 255, 0.7)";
      ctx.strokeStyle = "rgba(112, 86, 255, 0.2)";
      ctx.lineWidth = 1;

      particles.forEach((p) => {
        p.x += p.vx * motionScale;
        p.y += p.vy * motionScale;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const dx = p.x - cursor.x;
        const dy = p.y - cursor.y;
        const pull = Math.exp(-(dx * dx + dy * dy) * 12) * 0.0015 * motionScale;
        p.x += -dx * pull;
        p.y += -dy * pull;

        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 0.15) {
            ctx.globalAlpha = 1 - dist / 0.15;
            ctx.beginPath();
            ctx.moveTo(a.x * width, a.y * height);
            ctx.lineTo(b.x * width, b.y * height);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(draw);
    };

    if (!prefersReducedMotion) {
      animationId = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
