"use client";

import { motion } from "framer-motion";
import { blurIn, staggerContainer } from "@/lib/motion";

export function SplitText({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      variants={staggerContainer(0.1, 0.06)}
      initial="hidden"
      animate="show"
      className="inline-flex flex-wrap gap-x-2"
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={blurIn}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
