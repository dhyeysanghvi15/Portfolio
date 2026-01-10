"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/([0-9]+\.?[0-9]*)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const number = Number(match[1]);
    const suffix = value.replace(match[1], "");
    const controls = animate(0, number, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        const rounded = number >= 100 ? Math.round(latest) : Number(latest.toFixed(1));
        setDisplay(`${rounded}${suffix}`);
      }
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.span ref={ref} className="text-sm text-text">
      {display}
    </motion.span>
  );
}
