"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMotionSettings } from "@/components/MotionSettingsProvider";

export function TiltCard({ children }: { children: React.ReactNode }) {
  const { reducedMotion } = useMotionSettings();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 18 });
  const glareOpacity = useTransform(springX, [-12, 12], [0.1, 0.35]);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const x = (offsetY / rect.height - 0.5) * -14;
    const y = (offsetX / rect.width - 0.5) * 14;
    rotateX.set(x);
    rotateY.set(y);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ opacity: glareOpacity, background: "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 60%)" }}
      />
      {children}
    </motion.div>
  );
}
