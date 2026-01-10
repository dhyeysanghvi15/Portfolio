import { profile } from "@/data/profile";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="All projects"
        title="Case studies"
        subtitle="Deep dives into security-minded systems with measurable outcomes."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {profile.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
