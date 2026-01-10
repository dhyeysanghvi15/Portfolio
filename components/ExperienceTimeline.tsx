"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      data-section="experience"
      className="mx-auto max-w-6xl px-4 py-20"
    >
      <SectionHeading
        eyebrow="Field logs"
        title="Experience timeline"
        subtitle="Security roles focused on cloud telemetry, compliance, and measurable outcomes."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative space-y-6 border-l border-border pl-6"
      >
        {profile.experience.map((item, index) => (
          <motion.div
            key={item.company}
            variants={fadeUp}
            className="glass relative rounded-2xl border border-border p-6"
          >
            <span className="absolute -left-[35px] top-8 h-3 w-3 rounded-full bg-accent shadow-glow" />
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 text-left"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              aria-expanded={openIndex === index}
            >
              <div>
                <p className="text-sm text-muted">{item.dates}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.company} | {item.location}
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                {openIndex === index ? "Collapse" : "Expand"}
              </span>
            </button>
            <div
              className={`mt-4 space-y-4 overflow-hidden text-sm text-muted transition-all ${
                openIndex === index
                  ? "max-h-[400px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="list-disc space-y-2 pl-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-border px-3 py-1 text-xs text-text"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
