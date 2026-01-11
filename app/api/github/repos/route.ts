import { NextResponse } from "next/server";
import { profile } from "@/data/profile";

type RepoCard = {
  name: string;
  description: string;
  url: string;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  private: boolean;
  pushed_at: string | null;
  updated_at: string;
};

function inferUsername(): string | null {
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

type GitHubOrg = { login: string };

async function fetchAllPages<T>(
  urlForPage: (page: number) => string,
  headers: HeadersInit,
  maxPages = 20
) {
  const all: T[] = [];
  for (let page = 1; page <= maxPages; page++) {
    const response = await fetch(urlForPage(page), { headers, next: { revalidate: 300 } });
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const chunk = (await response.json()) as T[];
    all.push(...chunk);
    if (chunk.length < 100) break;
  }
  return all;
}

function toRepoCards(repos: GitHubRepo[]): RepoCard[] {
  const deduped = new Map<string, GitHubRepo>();
  for (const repo of repos) deduped.set(repo.html_url, repo);

  return [...deduped.values()]
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

async function fetchPublicReposWithToken(headers: HeadersInit): Promise<RepoCard[]> {
  const repos = await fetchAllPages<GitHubRepo>(
    (page) =>
      `https://api.github.com/user/repos?per_page=100&page=${page}&visibility=public&affiliation=owner,organization_member&sort=updated&direction=desc`,
    headers
  );
  return toRepoCards(repos);
}

async function fetchPublicReposForUsername(
  username: string,
  includeOrgs: boolean,
  headers: HeadersInit
): Promise<RepoCard[]> {
  const allRepos: GitHubRepo[] = [];

  const userRepos = await fetchAllPages<GitHubRepo>(
    (page) =>
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated&direction=desc`,
    headers
  );
  allRepos.push(...userRepos);

  if (includeOrgs) {
    const orgs = await fetchAllPages<GitHubOrg>(
      (page) => `https://api.github.com/users/${username}/orgs?per_page=100&page=${page}`,
      headers
    );

    for (const org of orgs) {
      const orgRepos = await fetchAllPages<GitHubRepo>(
        (page) =>
          `https://api.github.com/orgs/${org.login}/repos?per_page=100&page=${page}&type=public&sort=updated&direction=desc`,
        headers
      );
      allRepos.push(...orgRepos);
    }
  }

  return toRepoCards(allRepos);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const username = url.searchParams.get("username") || process.env.GITHUB_USERNAME || inferUsername();
  const includeOrgs = url.searchParams.get("includeOrgs") !== "0";

  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const repos = token
      ? await fetchPublicReposWithToken(headers)
      : username
        ? await fetchPublicReposForUsername(username, includeOrgs, headers)
        : null;

    if (!repos) {
      return NextResponse.json(
        { error: "Missing GitHub username (or set GITHUB_TOKEN)." },
        { status: 400 }
      );
    }

    return NextResponse.json(repos, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" }
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to load repositories from GitHub." },
      { status: 502 }
    );
  }
}
