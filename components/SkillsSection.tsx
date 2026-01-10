"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { BrandIcon } from "@/components/icons/BrandIcon";
import type { BrandIconName } from "@/lib/brandIcons";

type SkillItem = { name: string; icon?: BrandIconName };

export function SkillsSection() {
  const groups = useMemo(
    () => Object.entries(profile.skills) as [string, SkillItem[]][],
    []
  );
  const [activeGroup, setActiveGroup] = useState(groups[0]?.[0] ?? "");

  return (
    <section
      id="skills"
      data-section="skills"
      className="mx-auto max-w-6xl px-4 py-20"
    >
      <SectionHeading
        eyebrow="Signal"
        title="Skills & tooling"
        subtitle="Select a domain to focus the signal, or scan the full stack below."
      />
      <div className="mb-6 flex flex-wrap gap-2">
        {groups.map(([group]) => (
          <button
            key={group}
            type="button"
            onClick={() => setActiveGroup(group)}
            className={cn(
              "rounded-full border border-border px-4 py-2 text-sm transition",
              activeGroup === group
                ? "bg-accent text-base shadow-glow"
                : "text-muted hover:border-accent hover:text-accent"
            )}
          >
            {group}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-2xl border border-border p-6">
          <div className="space-y-6">
            {groups
              .filter(([group]) => group === activeGroup)
              .map(([group, items]) => (
                <div key={group}>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">
                    {group}
                  </p>
                  <motion.ul
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-3 grid grid-cols-2 gap-3 text-sm text-muted md:grid-cols-3"
                  >
                    {items.map((item) => (
                      <motion.li
                        key={`${group}-${item.name}`}
                        variants={fadeUp}
                        className="flex items-center gap-2 rounded-full border border-border px-3 py-2"
                      >
                        {item.icon ? (
                          <motion.span
                            className="inline-flex h-4 w-4 items-center justify-center"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2.4, repeat: Infinity }}
                          >
                            <BrandIcon
                              name={item.icon}
                              title={item.name}
                              className="h-4 w-4 text-accent"
                            />
                          </motion.span>
                        ) : null}
                        <span>{item.name}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}
          </div>
        </div>
        <div className="glass rounded-2xl border border-border p-6">
          <p className="text-sm text-muted">Stack radar</p>
          <div className="mt-6 flex items-end gap-3">
            {Array.from({ length: 5 }).map((_, index) => {
              const activeBar = index < 4;
              return (
                <motion.div
                  key={`bar-${index}`}
                  className={cn(
                    "w-8 rounded-full",
                    activeBar ? "bg-accent" : "bg-base"
                  )}
                  initial={{ height: 12 }}
                  animate={{ height: 20 + index * 12 + (activeBar ? 12 : 0) }}
                  transition={{ duration: 0.4 }}
                />
              );
            })}
          </div>
          <p className="mt-6 text-xs text-muted">
            Signal strength increases as the toolkit expands. Precision over noise.
          </p>
        </div>
      </div>
      <div className="mt-8 glass rounded-2xl border border-border p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">
          Full stack view
        </p>
        <div className="mt-4 max-h-56 overflow-y-auto pr-2">
          <div className="space-y-6">
            {groups.map(([group, items]) => (
              <div key={`all-${group}`}>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  {group}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
                  {items.map((item) => (
                    <span
                      key={`all-${group}-${item.name}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2"
                    >
                      {item.icon ? (
                        <motion.span
                          className="inline-flex h-3 w-3 items-center justify-center"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2.6, repeat: Infinity }}
                        >
                          <BrandIcon
                            name={item.icon}
                            title={item.name}
                            className="h-3 w-3 text-accent"
                          />
                        </motion.span>
                      ) : null}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
