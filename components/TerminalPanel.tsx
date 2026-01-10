"use client";

import { useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

const baseCommands = ["help", "about", "skills", "projects", "contact"] as const;

type Command = (typeof baseCommands)[number];

const responses: Record<Command, string[]> = {
  help: [
    "Commands:",
    "- about",
    "- skills",
    "- projects",
    "- contact",
    "Tip: try \"skills\" for the radar signal."
  ],
  about: [
    `${profile.name} - ${profile.role}`,
    profile.positioning.subhead,
    "AWS-first security experience; Azure exposure through coursework."
  ],
  skills: [
    ...Object.keys(profile.skills),
    "Precision telemetry, not just noise."
  ],
  projects: profile.projects.map((project) => project.title),
  contact: [
    `Email: ${profile.contact.email}`,
    `Phone: ${profile.contact.phone}`,
    `LinkedIn: ${profile.contact.linkedin}`
  ]
};

export function TerminalPanel() {
  const [history, setHistory] = useState<string[]>([
    "Welcome to terminal mode. Type \"help\" to begin."
  ]);
  const [input, setInput] = useState("");

  const prompt = useMemo(() => `visitor@dhyey:~$`, []);

  const handleSubmit = (value: string) => {
    const command = value.trim().toLowerCase() as Command;
    if (!command) return;
    const output = responses[command];
    if (!output) {
      setHistory((prev) => [
        ...prev,
        `${prompt} ${value}`,
        `Command not found: ${value}`
      ]);
      return;
    }
    setHistory((prev) => [...prev, `${prompt} ${value}`, ...output]);
  };

  return (
    <section
      id="terminal"
      className="mx-auto max-w-6xl px-4 py-20"
      aria-label="Terminal mode"
    >
      <SectionHeading
        eyebrow="Playground"
        title="Terminal mode"
        subtitle="A fast command interface for the essentials."
      />
      <div className="glass rounded-2xl border border-border p-6 font-mono text-sm">
        <div className="space-y-2 text-muted">
          {history.map((line, index) => (
            <p key={`${line}-${index}`}>{line}</p>
          ))}
        </div>
        <form
          className="mt-4 flex items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(input);
            setInput("");
          }}
        >
          <span className="text-accent">{prompt}</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="flex-1 bg-transparent text-text outline-none"
            placeholder="Type a command"
            aria-label="Terminal command"
            list="terminal-commands"
          />
          <datalist id="terminal-commands">
            {baseCommands.map((command) => (
              <option key={command} value={command} />
            ))}
          </datalist>
        </form>
      </div>
    </section>
  );
}
