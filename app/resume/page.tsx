import Link from "next/link";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export default function ResumePage() {
  return (
    <main id="content" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading
        eyebrow="Resume"
        title="Resume PDF"
        subtitle="Open the full resume in a readable PDF viewer."
      />
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <Link
          href="/resume.pdf"
          className="rounded-full button-primary"
        >
          Download resume
        </Link>
        <a
          href={`mailto:${profile.contact.email}`}
          className="rounded-full border border-border px-6 py-3 text-base text-muted"
        >
          Email me
        </a>
      </div>
      <div className="glass overflow-hidden rounded-2xl border border-border shadow-glass">
        <iframe
          src="/resume.pdf"
          className="h-[80vh] w-full"
          title="Resume PDF"
        />
      </div>
    </main>
  );
}
