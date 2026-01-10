"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { BrandIcon } from "@/components/icons/BrandIcon";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

type ExperienceItem = (typeof profile.experience)[number];

export function TimelineMissionLog({ items = profile.experience }: { items?: ExperienceItem[] }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(lineRef, { once: true, margin: "-20% 0px" });
  const reducedMotion = useReducedMotion();

  const pathTransition = useMemo(
    () => ({
      duration: reducedMotion ? 0 : 1.2,
      ease: "easeOut"
    }),
    [reducedMotion]
  );

  return (
    <section
      id="experience"
      data-section="experience"
      className="mx-auto max-w-6xl px-4 py-20"
    >
      <SectionHeading
        eyebrow="Mission log"
        title="Experience timeline"
        subtitle="Security roles focused on cloud telemetry, compliance, and measurable outcomes."
      />
      <div ref={lineRef} className="relative">
        <motion.svg
          className="absolute left-2 top-0 h-full w-6 text-accent/40"
          viewBox="0 0 24 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M12 10V590"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: inView || reducedMotion ? 1 : 0 }}
            transition={pathTransition}
          />
        </motion.svg>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 pl-10"
        >
          {items.map((item, index) => {
            const isOpen = hoverIndex === index;
            const strength = Math.min(5, Math.ceil(item.highlights.length / 1.5));

            return (
              <motion.article
                key={item.company}
                variants={fadeUp}
                className="glass relative rounded-2xl border border-border p-6"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <span className="absolute left-[-34px] top-8 h-3 w-3 rounded-full bg-accent shadow-glow" />
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left"
                  onFocus={() => setHoverIndex(index)}
                  onBlur={() => setHoverIndex(null)}
                  aria-expanded={isOpen}
                  data-cursor="button"
                >
                  <div>
                    <p className="text-sm text-muted">{item.dates}</p>
                    <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {item.company} | {item.location}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-accent">
                    {isOpen ? "Collapse" : "Expand"}
                  </span>
                </button>
                <div
                  className={cn(
                    "mt-4 overflow-hidden transition-all duration-1000 ease-out",
                    isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  {isOpen ? (
                    <div className="space-y-4 text-sm text-muted">
                      <ul className="list-disc space-y-2 pl-5">
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      {item.tools?.length ? (
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-muted">
                            Tooling used
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.tools.map((tool) => (
                              <span
                                key={tool.name}
                                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-text"
                              >
                                <BrandIcon name={tool.icon} title={tool.name} className="h-4 w-4" />
                                {tool.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted">
                          Signal strength
                        </p>
                        <div className="mt-3 flex gap-2">
                          {Array.from({ length: 5 }).map((_, bar) => (
                            <span
                              key={`${item.company}-bar-${bar}`}
                              className={cn(
                                "h-2 w-8 rounded-full",
                                bar < strength ? "bg-accent" : "bg-base"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="grid gap-2 md:grid-cols-2">
                        {item.metrics.map((metric) => (
                          <div
                            key={metric}
                            className="rounded-xl border border-border bg-base/60 px-3 py-2"
                          >
                            <CountUp value={metric} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
