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

    // BLOGS
    "/blog/how-to-choose-a-software-development-company-in-kerala",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "weekly"
        : route === "/portfolio"
          ? "weekly"
          : route.startsWith("/blog")
            ? "monthly"
            : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/portfolio"
          ? 0.9
          : route.startsWith("/blog")
            ? 0.85
            : 0.8,
  }));
}