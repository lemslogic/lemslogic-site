import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lemslogic.com.br/sitemap.xml",
    host: "https://lemslogic.com.br",
  };
}
