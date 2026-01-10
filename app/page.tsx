import { Hero } from "@/components/Hero";
import { StatsRow } from "@/components/StatsRow";
import { TimelineMissionLog } from "@/components/TimelineMissionLog";
import { SkillsSection } from "@/components/SkillsSection";
import { FeaturedRepos } from "@/components/FeaturedRepos";
import { EducationSection } from "@/components/EducationSection";
import { TerminalPanel } from "@/components/TerminalPanel";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <StatsRow />
      <TimelineMissionLog />
      <SkillsSection />
      <FeaturedRepos />
      <TerminalPanel />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
