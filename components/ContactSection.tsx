import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="mx-auto max-w-6xl px-4 py-20"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Ready to collaborate"
        subtitle="Open to internships, research, and security engineering opportunities."
      />
      <div className="glass flex flex-col gap-6 rounded-2xl border border-border p-6 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-muted">
          <p>Email: {profile.contact.email}</p>
          <p className="mt-2">Phone: {profile.contact.phone}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.contact.email}`}
            className="rounded-full bg-accent px-5 py-3 text-base font-medium text-base shadow-glow transition hover:-translate-y-0.5"
          >
            Email me
          </a>
          <a
            href={profile.contact.linkedin}
            className="rounded-full border border-border px-5 py-3 text-base text-muted transition hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.contact.github}
            className="rounded-full border border-border px-5 py-3 text-base text-muted transition hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
