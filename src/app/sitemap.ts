import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://soystories.cafe",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://soystories.cafe/dessert",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: "https://soystories.cafe/oem",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: "https://soystories.cafe/oem/plan",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://soystories.cafe/wholesale",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
