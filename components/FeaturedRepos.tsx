import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

type RepoCard = {
  name: string;
  description: string;
  url: string;
};

async function getFeaturedRepos(): Promise<RepoCard[]> {
  const featured = profile.featuredRepos;
  const username = "dhyeysanghvi15";

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json"
        },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      return featured.map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.url
      }));
    }

    const repos = (await response.json()) as Array<{
      name: string;
      description: string | null;
      html_url: string;
      private: boolean;
    }>;

    const publicRepos = new Map(
      repos
        .filter((repo) => !repo.private)
        .map((repo) => [repo.name.toLowerCase(), repo])
    );

    return featured
      .filter((repo) => publicRepos.has(repo.name.toLowerCase()))
      .map((repo) => {
        const live = publicRepos.get(repo.name.toLowerCase());
        return {
          name: repo.name,
          description: live?.description || repo.description,
          url: live?.html_url || repo.url
        };
      });
  } catch {
    return featured.map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.url
    }));
  }
}

export async function FeaturedRepos() {
  const repos = await getFeaturedRepos();
  return (
    <section id="github" data-section="github" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="GitHub"
        title="Featured repositories"
        subtitle="Selected work and experiments worth exploring."
      />
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
