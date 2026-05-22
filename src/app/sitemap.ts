import type { MetadataRoute } from "next";
import { SITE, SHOW_MENU_PAGE_PUBLIC } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...(SHOW_MENU_PAGE_PUBLIC ? ["/menu"] : []),
    "/chi-siamo",
    "/contatti",
  ];
  const now = new Date();
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
