import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>Built for curiosity, resilience, and clean telemetry.</p>
        <div className="flex items-center gap-4">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.contact.email}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
