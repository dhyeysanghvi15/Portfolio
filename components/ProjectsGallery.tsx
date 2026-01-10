"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { stagger } from "@/lib/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsGallery() {
  return (
    <section
      id="projects"
      data-section="projects"
      className="mx-auto max-w-6xl px-4 py-20"
    >
      <SectionHeading
        eyebrow="Case studies"
        title="Security-first projects"
        subtitle="Detailed breakdowns of how I scope risks, build guardrails, and measure results."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-3"
      >
        {profile.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
