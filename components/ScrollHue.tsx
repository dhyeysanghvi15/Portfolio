"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollHue() {
  const { scrollYProgress } = useScroll();
  const hue = useTransform(
    scrollYProgress,
    [0, 1],
    ["hue-rotate(0deg)", "hue-rotate(80deg)"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.1, 0.5, 0.3]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ filter: hue, opacity }}
    />
  );
}
