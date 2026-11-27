import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: [
        "*",
        "Googlebot",
        "Bingbot",
        "OAI-SearchBot",
        "ChatGPT-User",
        "GPTBot",
        "ClaudeBot",
        "PerplexityBot",
        "Google-Extended",
        "Applebot-Extended",
      ],
      allow: "/",
    },
    sitemap: "https://www.soystories.cafe/sitemap.xml",
  };
}
