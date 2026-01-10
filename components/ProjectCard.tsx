"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";
import type { Profile } from "@/data/profile";

export function ProjectCard({ project }: { project: Profile["projects"][number] }) {
  return (
    <motion.div
      variants={scaleIn}
      className="glass flex h-full flex-col justify-between rounded-2xl border border-border p-6"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Case study</p>
        <h3 className="mt-3 text-2xl font-semibold text-text">{project.title}</h3>
        <p className="mt-3 text-sm text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-border px-3 py-1 text-xs text-text"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm text-accent"
        >
          View case study
          <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </motion.div>
  );
}
