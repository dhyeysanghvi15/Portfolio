import Link from "next/link";
import { notFound } from "next/navigation";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return profile.projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const project = profile.projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="content" className="mx-auto max-w-4xl px-4 py-20">
      <Link href="/projects" className="text-link inline-block mb-8">← All projects</Link>
      <p className="text-xs uppercase tracking-[0.35em] text-muted">Case study</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{project.summary}</p>

      <div className="mt-8 tag-row">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
      <div className="mt-10 grid gap-8">
        <section className="glass rounded-2xl border border-border p-6">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-3 text-sm text-muted">{project.problem}</p>
        </section>
        <section className="glass rounded-2xl border border-border p-6">
          <h2 className="text-xl font-semibold">Approach</h2>
          <p className="mt-3 text-sm text-muted">{project.approach}</p>
        </section>
        <section className="glass rounded-2xl border border-border p-6">
          <h2 className="text-xl font-semibold">Security considerations</h2>
          <p className="mt-3 text-sm text-muted">{project.security}</p>
        </section>
        <section className="glass rounded-2xl border border-border p-6">
          <h2 className="text-xl font-semibold">Results</h2>
          <p className="mt-3 text-sm text-muted">{project.results}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-border px-3 py-1 text-xs"
              >
                {metric}
              </span>
            ))}
          </div>
        </section>
        <section className="glass rounded-2xl border border-border p-6">
          <h2 className="text-xl font-semibold">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
        <section className="glass rounded-2xl border border-border p-6">
          <h2 className="text-xl font-semibold">What I'd improve next</h2>
          <p className="mt-3 text-sm text-muted">{project.next}</p>
        </section>
      </div>
    </main>
  );
}
