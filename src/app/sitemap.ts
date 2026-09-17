import type { MetadataRoute } from "next";

import { categories, company } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/applications",
    "/catalogue",
    "/about",
    "/quote",
    "/brand",
    ...categories.map((category) => `/products/${category.slug}`),
  ];

  return routes.map((path) => ({
    url: `${company.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
