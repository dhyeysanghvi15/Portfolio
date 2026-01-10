"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "github", label: "GitHub" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-section]"));
    let raf = 0;

    const updateActive = () => {
      const center = window.innerHeight * 0.4;
      let closestId = "hero";
      let closestDistance = Number.POSITIVE_INFINITY;

      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const distance = Math.abs(rect.top - center);
        if (rect.top <= center && rect.bottom >= center && distance < closestDistance) {
          closestDistance = distance;
          closestId = node.getAttribute("data-section") || "hero";
        }
      });

      setActive(closestId);
      raf = requestAnimationFrame(updateActive);
    };

    raf = requestAnimationFrame(updateActive);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em]">
          DS
        </Link>
        <nav className="relative hidden items-center gap-6 text-sm md:flex" aria-label="Primary">
          {sections.map((section) => {
            const isActive = active === section.id;
            const href = section.id === "hero" ? "/" : `#${section.id}`;
            return (
              <a
                key={section.id}
                href={href}
                className={cn(
                  "relative px-3 py-1 transition hover:text-accent",
                  isActive ? "text-accent" : "text-muted"
                )}
                data-cursor="link"
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/15"
                    transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  />
                ) : null}
                {section.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 text-xs">
          <Link
            href="/resume"
            className="rounded-full bg-accent px-3 py-1 text-base shadow-glow transition hover:-translate-y-0.5"
          >
            Resume
          </Link>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </header>
  );
}
