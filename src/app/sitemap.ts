import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ciltriq.com";

  const routes = [
    "",
    "/portfolio",
    "/services",
    "/automation",
    "/partners",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "weekly"
        : route === "/portfolio"
          ? "weekly"
          : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/portfolio"
          ? 0.9
          : 0.8,
  }));
}