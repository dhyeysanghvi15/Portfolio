import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function EducationSection() {
  return (
    <section
      id="education"
      data-section="education"
      className="mx-auto max-w-6xl px-4 py-20"
    >
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation"
        subtitle="Security, mathematics, and analytics with a focus on applied problem solving."
      />
      <div className="glass rounded-2xl border border-border p-6 text-sm text-muted">
        <h3 className="text-2xl font-semibold text-text">
          {profile.education.school}
        </h3>
        <p className="mt-2">{profile.education.degree}</p>
        <p className="mt-1 text-sm text-text/90">
          Minor in {profile.education.minor} & Certificate in {profile.education.certificate}
        </p>
        <p className="mt-1">{profile.education.dates}</p>
        <p className="mt-3">{profile.education.activities}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {profile.education.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-border px-3 py-1">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 glass rounded-2xl border border-border p-6 text-sm text-muted">
        <h3 className="text-lg font-semibold text-text">
          {profile.education.secondary.school}
        </h3>
        <p className="mt-2">
          {profile.education.secondary.degree} | GPA {profile.education.secondary.gpa}
        </p>
        <p className="mt-1">{profile.education.secondary.dates}</p>
      </div>
    </section>
  );
}
