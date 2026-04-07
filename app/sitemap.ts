import type { MetadataRoute } from "next";

const SITE_URL = "https://thenewontology.life";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/the-next-human-ontology`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/the-sovereign-mind`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/the-bigger-world`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/the-next-human-ontology/bibliography`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/the-sovereign-mind/bibliography`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Volume I chapters
  const volumeIChapters: MetadataRoute.Sitemap = Array.from({ length: 10 }, (_, i) => ({
    url: `${SITE_URL}/the-next-human-ontology/chapter-${i + 1}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Volume II chapters
  const volumeIIChapters: MetadataRoute.Sitemap = Array.from({ length: 12 }, (_, i) => ({
    url: `${SITE_URL}/the-sovereign-mind/chapter-${i + 1}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...volumeIChapters, ...volumeIIChapters];
}
