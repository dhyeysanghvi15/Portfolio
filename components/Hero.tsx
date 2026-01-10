"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeSlide, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { HeroIconField } from "@/components/HeroIconField";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="hero"
      data-section="hero"
      className="relative overflow-hidden pb-20 pt-24 md:pt-32"
    >
      <HeroIconField />
      <div className="noise absolute inset-0 -z-10" />
      <div className="scanlines absolute inset-0 -z-10" />
      <motion.div
        variants={staggerContainer(0.12, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="glass rounded-3xl border border-border bg-base/70 p-6 shadow-glass md:p-8">
          <motion.p
            variants={fadeSlide(18)}
            className="text-xs uppercase tracking-[0.4em] text-text/90"
          >
            {profile.role}
          </motion.p>
          <motion.h1
            variants={fadeSlide(20)}
            className="mt-4 w-full text-[7.2vw] font-black uppercase leading-none tracking-tight text-text sm:text-5xl md:text-[60px] lg:text-[68px] xl:text-[74px]"
          >
            <InteractiveName activeIndex={activeIndex} onHover={setActiveIndex} />
          </motion.h1>
          {profile.positioning.subhead ? (
            <motion.p
              variants={fadeSlide(20)}
              className="mt-4 max-w-xl text-lg text-text md:text-xl"
            >
              {profile.positioning.subhead}
            </motion.p>
          ) : null}
          <motion.p
            variants={fadeSlide(20)}
            className="mt-3 max-w-xl text-base text-text/90 md:text-lg"
          >
            {profile.positioning.headline}
          </motion.p>
          <motion.div
            variants={fadeSlide(20)}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MagneticButton
              href={`mailto:${profile.contact.email}`}
              className="rounded-full bg-accent px-6 py-3 text-base font-medium text-base shadow-glow"
              cursor="button"
            >
              Book a chat
            </MagneticButton>
            <MagneticButton
              href="/resume"
              className="rounded-full border border-border px-6 py-3 text-base text-muted hover:border-accent hover:text-accent"
              cursor="button"
            >
              Resume
            </MagneticButton>
            <MagneticButton
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-base text-muted hover:border-accent hover:text-accent"
              cursor="link"
            >
              GitHub
            </MagneticButton>
            <MagneticButton
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-base text-muted hover:border-accent hover:text-accent"
              cursor="link"
            >
              LinkedIn
            </MagneticButton>
          </motion.div>
        </div>
        <motion.div
          variants={fadeSlide(22)}
          className="relative md:ml-auto md:w-[420px] md:justify-self-end"
        >
          <TiltCard>
            <div className="flex h-[520px] items-center justify-center">
              <div className="h-64 w-64 overflow-hidden rounded-full border border-border shadow-glass">
                <Image
                  src="/images/headshot.jpg"
                  alt="Dhyey Sanghvi headshot"
                  width={5504}
                  height={8256}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 12%" }}
                  priority
                />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </section>
  );
}

const nameGlyphs = [
  { letter: "D", note: "Driven by measurable security outcomes." },
  { letter: "H", note: "Hands-on with cloud telemetry pipelines." },
  { letter: "Y", note: "Yielding signal from noisy data." },
  { letter: "E", note: "Evidence-led, metrics first." },
  { letter: "Y", note: "Yearning to learn, always curious." },
  { letter: " ", note: "" },
  { letter: "S", note: "Security-minded by default." },
  { letter: "A", note: "AWS-first cloud experience." },
  { letter: "N", note: "Network-aware detection thinking." },
  { letter: "G", note: "Grounded in real-world impact." },
  { letter: "H", note: "High-integrity engineering." },
  { letter: "V", note: "Vigilant about access and logging." },
  { letter: "I", note: "Impact-driven delivery." }
] as const;

function InteractiveName({
  activeIndex,
  onHover
}: {
  activeIndex: number | null;
  onHover: (index: number | null) => void;
}) {
  return (
    <span className="relative inline-flex flex-nowrap items-center gap-[0.08em] whitespace-nowrap">
      <span className="sr-only">{profile.name}</span>
      {nameGlyphs.map((glyph, index) =>
        glyph.letter === " " ? (
          <span key={`space-${index}`} className="w-3" aria-hidden="true" />
        ) : (
          <span
            key={`${glyph.letter}-${index}`}
            className="group relative inline-flex items-center"
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
          >
            <span
              className="relative z-10 inline-block text-text transition duration-200 group-hover:-translate-y-2 group-hover:scale-105 group-hover:-translate-x-1"
              style={{
                textShadow:
                  "5px 5px 0px hsl(var(--accent-2)), -2px -2px 0px hsl(var(--base-elevated))"
              }}
            >
              {glyph.letter}
            </span>
            <span
              className={cn(
                "absolute left-1/2 top-[115%] -translate-x-1/2 whitespace-nowrap rounded-xl border border-border bg-base/95 text-xl font-black uppercase tracking-tight text-text opacity-0 shadow-glass transition-all duration-300",
                activeIndex === index
                  ? "px-5 py-2 opacity-100"
                  : "px-0 py-0 opacity-0"
              )}
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(20,220,255,0.25), rgba(122,92,255,0.2))"
              }}
            >
              {glyph.note}
            </span>
          </span>
        )
      )}
    </span>
  );
}
