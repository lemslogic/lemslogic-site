import type { MetadataRoute } from "next";

const baseUrl = "https://lemslogic.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/solucoes", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/projetos", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/sobre", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contato", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
