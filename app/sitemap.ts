import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      priority: 1,
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
