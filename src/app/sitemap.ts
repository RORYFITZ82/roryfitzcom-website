import type { MetadataRoute } from "next";
import { getPortfolioItems } from "@/lib/portfolio";

const SITE_URL = "https://www.roryfitz.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const items = await getPortfolioItems();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...items.map((item) => ({
      url: `${SITE_URL}/work/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
