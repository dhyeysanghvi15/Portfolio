import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ProjectCard } from "@/components/ProjectCard";
import { PageIntro } from "@/components/PageIntro";
export const metadata: Metadata = { title: "Projects | Dhyey Sanghvi" };
export default function ProjectsPage(){return <main id="content" className="page-shell"><PageIntro eyebrow="Project portfolio" title="Ideas, engineered into systems." description="A closer look at the problems, technical decisions, and security considerations behind my work."/><div className="project-grid">{profile.projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div><div className="project-note"><p>More code, experiments, and ongoing work.</p><a className="text-link" href={profile.contact.github}>Explore GitHub ↗</a></div></main>;}
