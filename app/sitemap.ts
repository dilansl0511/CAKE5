import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/seoPages";

const baseUrl = "https://caketoppercostarica.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-16");
  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    ...seoPages.map(({ slug }) => ({
      url: `${baseUrl}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: slug === "topper-para-queques" || slug === "cake-topper-personalizado" ? 0.9 : 0.8
    }))
  ];
}
