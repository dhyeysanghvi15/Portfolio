import Link from "next/link";
import { profile } from "@/data/profile";
import { ProjectCard } from "@/components/ProjectCard";
export default function HomePage() {
 return <main id="content">
  <section className="home-hero page-shell">
   <div><p className="eyebrow"><span className="status-dot" /> Cloud security · Detection engineering · AI security</p>
    <h1>Building secure systems.<br/><span>Turning insight into impact.</span></h1>
    <p className="hero-description">I’m Dhyey, a Computer Science graduate from Arizona State University. I work at the intersection of cloud security, automation, and AI to help make complex systems safer and easier to trust.</p>
    <div className="button-row"><Link className="button-primary" href="/projects">Explore my work <span aria-hidden="true">↗</span></Link><Link className="button-secondary" href="/contact">Get in touch</Link></div>
    <div className="hero-footnote">B.S. Computer Science, Cybersecurity · Arizona State University, 2026</div>
   </div>
   <aside className="current-card"><div className="card-topline"><span className="eyebrow">Currently</span><span className="current-label">Jul 2026 — Present</span></div><div className="current-symbol" aria-hidden="true">⌘</div><h2>Cybersecurity &<br/>AI Engineer Intern</h2><p className="current-company">CloudFountain Inc.</p><p className="text-muted">Secure Salesforce integrations, identity and access reviews, and research into AI security and RAG architectures.</p><div className="tag-row"><span>OAuth 2.0</span><span>IAM</span><span>AI security</span></div><Link className="text-link" href="/experience">View experience <span aria-hidden="true">→</span></Link></aside>
  </section>
  <section className="proof-strip page-shell" aria-label="Selected experience outcomes"><div><strong>1 TB+</strong><span>Security telemetry processed</span></div><div><strong>12</strong><span>Cloud regions monitored</span></div><div><strong>40%</strong><span>Faster threat detection</span></div><p>Selected outcomes from my cybersecurity internship at Projacs International.</p></section>
  <section className="page-shell content-section"><div className="section-title-row"><div><p className="eyebrow">Selected work</p><h2>Security with a practical purpose.</h2></div><Link className="text-link" href="/projects">All projects →</Link></div><div className="project-grid">{profile.projects.map(project => <ProjectCard key={project.slug} project={project}/>)}</div></section>
  <section className="page-shell content-section"><div className="section-title-row"><div><p className="eyebrow">How I contribute</p><h2>From visibility to action.</h2></div></div><div className="focus-grid">{[["01","Cloud & identity","AWS hardening, least-privilege access, and auditable data workflows."],["02","Detection & automation","Security telemetry pipelines, anomaly detection, and faster alert triage."],["03","Secure integrations & AI","OAuth-based API integrations, AI guardrails, and RAG security research."]].map(([n,t,d])=><article className="focus-card" key={n}><span className="eyebrow">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div><Link className="text-link inline-block mt-6" href="/skills">Explore my toolkit →</Link></section>
  <section className="page-shell"><div className="contact-banner"><div><p className="eyebrow">Let’s connect</p><h2>Have a security challenge in mind?</h2><p>Let’s talk about how I can contribute to your team.</p></div><Link className="button-primary" href="/contact">Start a conversation ↗</Link></div></section>
 </main>;
}
