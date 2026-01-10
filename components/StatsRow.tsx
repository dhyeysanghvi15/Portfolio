"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeSlide, staggerContainer } from "@/lib/motion";

export function StatsRow() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-4 md:grid-cols-4"
      >
        {profile.stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeSlide(18)}
            className="glass group relative overflow-hidden rounded-2xl border border-border px-5 py-6"
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(20,240,255,0.2), rgba(255,80,215,0.08))" }} />
            <p className="text-xs uppercase tracking-[0.25em] text-muted">
              {stat.label}
            </p>
            <p className="mt-3 text-2xl font-semibold text-text">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
