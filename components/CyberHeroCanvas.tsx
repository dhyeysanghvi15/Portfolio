"use client";

import { useEffect, useRef } from "react";
import { useMotionSettings } from "@/components/MotionSettingsProvider";

type CyberHeroCanvasProps = {
  showNoise?: boolean;
  showScanlines?: boolean;
};

export function CyberHeroCanvas({ showNoise = true, showScanlines = true }: CyberHeroCanvasProps) {
  const networkRef = useRef<HTMLCanvasElement | null>(null);
  const trailsRef = useRef<HTMLCanvasElement | null>(null);
  const { reducedMotion, density } = useMotionSettings();

  useEffect(() => {
    if (reducedMotion) return;

    const networkCanvas = networkRef.current;
    const trailsCanvas = trailsRef.current;
    if (!networkCanvas || !trailsCanvas) return;

    const networkCtx = networkCanvas.getContext("2d");
    const trailsCtx = trailsCanvas.getContext("2d");
    if (!networkCtx || !trailsCtx) return;

    let width = 0;
    let height = 0;
    let rafId = 0;

    const cursor = { x: 0.5, y: 0.5 };

    const particles = Array.from({ length: Math.floor(70 * density) }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0005,
      vy: (Math.random() - 0.5) * 0.0005
    }));

    const trails = Array.from({ length: Math.floor(10 * density) }, () => ({
      t: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
      controlA: { x: Math.random(), y: Math.random() },
      controlB: { x: Math.random(), y: Math.random() }
    }));

    const handleResize = () => {
      width = networkCanvas.clientWidth;
      height = networkCanvas.clientHeight;
      const scale = window.devicePixelRatio || 1;
      [networkCanvas, trailsCanvas].forEach((canvas) => {
        canvas.width = width * scale;
        canvas.height = height * scale;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.setTransform(scale, 0, 0, scale, 0, 0);
        }
      });
    };

    const handleMove = (event: MouseEvent) => {
      const rect = networkCanvas.getBoundingClientRect();
      cursor.x = (event.clientX - rect.left) / rect.width;
      cursor.y = (event.clientY - rect.top) / rect.height;
    };

    const drawNetwork = () => {
      networkCtx.clearRect(0, 0, width, height);
      networkCtx.fillStyle = "rgba(20, 240, 255, 0.7)";
      networkCtx.strokeStyle = "rgba(110, 90, 255, 0.18)";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const dx = p.x - cursor.x;
        const dy = p.y - cursor.y;
        const pull = Math.exp(-(dx * dx + dy * dy) * 10) * 0.0014;
        p.x += -dx * pull;
        p.y += -dy * pull;

        networkCtx.beginPath();
        networkCtx.arc(p.x * width, p.y * height, 1.6, 0, Math.PI * 2);
        networkCtx.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 0.14) {
            networkCtx.globalAlpha = 1 - dist / 0.14;
            networkCtx.beginPath();
            networkCtx.moveTo(a.x * width, a.y * height);
            networkCtx.lineTo(b.x * width, b.y * height);
            networkCtx.stroke();
          }
        }
      }
      networkCtx.globalAlpha = 1;
    };

    const drawTrails = () => {
      trailsCtx.clearRect(0, 0, width, height);
      trailsCtx.strokeStyle = "rgba(255, 80, 215, 0.5)";
      trailsCtx.lineWidth = 1.5;
      trailsCtx.lineCap = "round";

      trails.forEach((trail) => {
        trail.t += trail.speed;
        if (trail.t > 1) {
          trail.t = 0;
          trail.controlA = { x: Math.random(), y: Math.random() };
          trail.controlB = { x: Math.random(), y: Math.random() };
        }
        const startX = width * (0.1 + trail.controlA.x * 0.6);
        const startY = height * (0.1 + trail.controlA.y * 0.6);
        const endX = width * (0.6 + trail.controlB.x * 0.4);
        const endY = height * (0.2 + trail.controlB.y * 0.7);

        const ctrlX = width * (cursor.x * 0.6 + 0.2);
        const ctrlY = height * (cursor.y * 0.6 + 0.2);

        trailsCtx.globalAlpha = 0.3 + trail.t * 0.6;
        trailsCtx.beginPath();
        trailsCtx.moveTo(startX, startY);
        trailsCtx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
        trailsCtx.stroke();
      });
      trailsCtx.globalAlpha = 1;
    };

    const tick = () => {
      drawNetwork();
      drawTrails();
      rafId = requestAnimationFrame(tick);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [density, reducedMotion]);

  return (
    <div className={`absolute inset-0 -z-10 ${showScanlines ? "scanlines" : ""}`}>
      {showNoise ? <div className="noise absolute inset-0" /> : null}
      <canvas
        ref={networkRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <canvas
        ref={trailsRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
