import { profile } from "@/data/profile";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dhyeysanghvi.com";

  const projectUrls = profile.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/resume`, lastModified: new Date() },
    ...["experience", "skills", "education", "contact"].map(path => ({ url: `${baseUrl}/${path}`, lastModified: new Date() })),
    ...projectUrls
  ];
}
