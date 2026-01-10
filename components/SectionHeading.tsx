"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeSlide } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <motion.div
      className="mb-8"
      variants={fadeSlide(16)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
        <span className="relative inline-block overflow-hidden">
          <span className="relative z-10">{title}</span>
          <span className="absolute inset-0 -z-10 bg-accent/10 blur-2xl" />
        </span>
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
