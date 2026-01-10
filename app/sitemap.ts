import { profile } from "@/data/profile";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dhyey-portfolio.vercel.app";

  const projectUrls = profile.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/resume`, lastModified: new Date() },
    { url: `${baseUrl}/playground`, lastModified: new Date() },
    ...projectUrls
  ];
}
