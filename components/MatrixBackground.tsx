"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let columns: number[] = [];
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%";

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const scale = window.devicePixelRatio || 1;
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      const columnCount = Math.floor(width / 18);
      columns = Array.from({ length: columnCount }, () => Math.random() * height);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(7, 12, 24, 0.18)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = "14px 'JetBrains Mono', ui-monospace";
      ctx.fillStyle = "rgba(16, 255, 210, 0.55)";

      columns = columns.map((y, index) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = index * 18;
        ctx.fillText(text, x, y);
        const nextY = y > height + 100 ? 0 : y + 14 + Math.random() * 10;
        return nextY;
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-30 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
}
