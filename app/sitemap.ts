import type { MetadataRoute } from "next";

const SITE_URL = "https://thenewontology.life";

function route(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly"
): MetadataRoute.Sitemap[0] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    route("/", 1.0, "weekly"),
    route("/the-next-human-ontology", 0.9, "weekly"),
    route("/the-sovereign-mind", 0.9, "weekly"),
    route("/the-bigger-world", 0.9, "weekly"),
    route("/the-great-convergence", 0.75, "monthly"),
    route("/timeline", 0.7, "weekly"),
    route("/whos-who", 0.7, "weekly"),
    route("/network", 0.65, "weekly"),
    route("/glossary", 0.65, "monthly"),
    route("/reading-guide", 0.6, "monthly"),
    route("/about", 0.6, "monthly"),
    route("/the-next-human-ontology/bibliography", 0.6, "monthly"),
    route("/the-sovereign-mind/bibliography", 0.6, "monthly"),
    route("/the-bigger-world/bibliography", 0.55, "monthly"),
  ];

  const volumeIChapters = Array.from({ length: 10 }, (_, i) =>
    route(`/the-next-human-ontology/chapter-${i + 1}`, 0.8)
  );

  const volumeIIChapters = Array.from({ length: 12 }, (_, i) =>
    route(`/the-sovereign-mind/chapter-${i + 1}`, 0.8)
  );

  const volumeIIIChapters = Array.from({ length: 10 }, (_, i) =>
    route(`/the-bigger-world/chapter-${i + 1}`, 0.7)
  );

  return [
    ...staticRoutes,
    ...volumeIChapters,
    ...volumeIIChapters,
    ...volumeIIIChapters,
  ];
}
