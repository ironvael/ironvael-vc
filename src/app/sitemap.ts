import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { portfolioProjects } from "@/data/portfolio";
import { insights } from "@/data/insights";
import { pressReleases } from "@/data/press";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/portfolio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/approach`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/insights`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/press`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const portfolioPages: MetadataRoute.Sitemap = portfolioProjects.map(
    (p) => ({
      url: `${baseUrl}/portfolio/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const insightPages: MetadataRoute.Sitemap = insights.map((p) => ({
    url: `${baseUrl}/insights/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const pressPages: MetadataRoute.Sitemap = pressReleases.map((r) => ({
    url: `${baseUrl}/press-release/${r.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...portfolioPages,
    ...insightPages,
    ...pressPages,
  ];
}
