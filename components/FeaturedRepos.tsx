"use client";

import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { useEffect, useMemo, useState } from "react";

type RepoCard = {
  name: string;
  description: string;
  url: string;
};

const FALLBACK_REPOS: RepoCard[] = profile.featuredRepos.map((repo) => ({
  name: repo.name,
  description: repo.description,
  url: repo.url
}));

function getGitHubUsername(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  if (fromEnv) return fromEnv;

  const githubUrl = profile?.contact?.github;
  if (!githubUrl) return null;

  try {
    const url = new URL(githubUrl);
    const username = url.pathname.split("/").filter(Boolean)[0];
    return username || null;
  } catch {
    return null;
  }
}

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  private: boolean;
  pushed_at: string | null;
  updated_at: string;
};

async function fetchAllPublicReposFromGitHub(
  username: string,
  signal: AbortSignal
): Promise<RepoCard[]> {
  const all: GitHubRepo[] = [];

  for (let page = 1; page <= 10; page++) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated&direction=desc`,
      {
        headers: { Accept: "application/vnd.github+json" },
        cache: "no-store",
        signal
      }
    );

    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

    const chunk = (await response.json()) as GitHubRepo[];
    all.push(...chunk);

    if (chunk.length < 100) break;
  }

  return all
    .filter((repo) => !repo.private)
    .sort((a, b) => {
      const aTime = Date.parse(a.pushed_at ?? a.updated_at);
      const bTime = Date.parse(b.pushed_at ?? b.updated_at);
      return bTime - aTime;
    })
    .map((repo) => ({
      name: repo.name,
      description: repo.description ?? "No description provided.",
      url: repo.html_url
    }));
}

async function fetchPublicRepos(
  username: string,
  signal: AbortSignal
): Promise<RepoCard[]> {
  try {
    const response = await fetch(
      `/api/github/repos?username=${encodeURIComponent(username)}&includeOrgs=1`,
      {
        cache: "no-store",
        signal
      }
    );
    if (response.ok) return (await response.json()) as RepoCard[];
  } catch {
    // Ignore and fall back to direct GitHub fetch.
  }

  return fetchAllPublicReposFromGitHub(username, signal);
}

export function FeaturedRepos() {
  const [repos, setRepos] = useState<RepoCard[]>(FALLBACK_REPOS);
  const username = useMemo(() => getGitHubUsername(), []);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "failed">(
    username ? "loading" : "idle"
  );

  useEffect(() => {
    if (!username) return;

    const controller = new AbortController();
    fetchPublicRepos(username, controller.signal)
      .then((live) => {
        if (live.length) setRepos(live);
        setStatus(live.length ? "loaded" : "failed");
      })
      .catch(() => {
        // Keep fallback list on failure (rate limits/offline/etc).
        setStatus("failed");
      });

    return () => controller.abort();
  }, [username]);

  return (
    <section id="github" data-section="github" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="GitHub"
        title="Repositories"
        subtitle="Auto-synced from GitHub (public repos)."
      />
      {username && status === "failed" ? (
        <p className="-mt-4 mb-6 text-sm text-muted">
          Couldn’t load live repos from GitHub right now, so this is the fallback list.
          Set `GITHUB_TOKEN` in your deploy env to avoid rate limits.
        </p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="group glass rounded-2xl border border-border p-5 transition hover:border-accent"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text">{repo.name}</h3>
              <span className="text-xs text-muted transition group-hover:text-accent">
                View repo
              </span>
            </div>
            <div className="mt-2 overflow-hidden rounded-xl border border-border bg-base/60 text-sm text-muted transition-all duration-300 ease-out max-h-0 opacity-0 px-4 py-0 group-hover:max-h-24 group-hover:py-4 group-hover:opacity-100">
              {repo.description}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
