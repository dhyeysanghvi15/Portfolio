"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMotionSettings } from "@/components/MotionSettingsProvider";

const cursorLabels: Record<string, string> = {
  link: "Open",
  button: "Click",
  drag: "Drag"
};

export function CustomCursor() {
  const { reducedMotion } = useMotionSettings();
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 240, damping: 24 });
  const ringY = useSpring(y, { stiffness: 240, damping: 24 });

  useEffect(() => {
    if (reducedMotion) return;
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 4);
      y.set(event.clientY - 4);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const cursor = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      setVariant(cursor || "default");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [reducedMotion, x, y]);

  if (!enabled) return null;

  const label = cursorLabels[variant];

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y }}
        animate={{ scale: variant === "default" ? 1 : 0.6 }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: variant === "default" ? 1 : 1.4,
          opacity: variant === "default" ? 0.6 : 0.9
        }}
      />
      {label ? (
        <motion.div
          className="cursor-label"
          style={{ x: ringX, y: ringY }}
          animate={{ opacity: 1, y: 24 }}
        >
          {label}
        </motion.div>
      ) : null}
    </>
  );
}
