import type { MetadataRoute } from "next";

const BASE_URL = "https://decorrevestimientos.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contacto",
    "/colaboraciones",
    "/superficies",
    "/galeria",
    "/estancias/banos",
    "/estancias/cocina",
    "/estancias/piscinas",
    "/estancias/terrazas",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
