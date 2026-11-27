import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.soystories.cafe/",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.soystories.cafe/wholesale",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.soystories.cafe/dessert",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.soystories.cafe/hotel",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.soystories.cafe/cafe",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.soystories.cafe/oem",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: "https://www.soystories.cafe/oem/guide",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.soystories.cafe/flavors",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://www.soystories.cafe/company",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
