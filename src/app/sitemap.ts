import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getAllSolutions } from "@/data/solutions";

/**
 * Sitemap covering every indexable route: static pages + dynamically-generated
 * solution detail pages (derived from the same data source as the pages).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/solutions`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/skills`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const solutionRoutes: MetadataRoute.Sitemap = getAllSolutions().map((s) => ({
    url: `${base}/solutions/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...solutionRoutes].map((entry) => ({
    lastModified: now,
    ...entry,
  }));
}
