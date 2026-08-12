import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LEMS Logic",
    short_name: "LEMS Logic",
    description: "Tecnologia que simplifica negócios.",
    start_url: "/",
    display: "standalone",
    background_color: "#071117",
    theme_color: "#071117",
    lang: "pt-BR",
    icons: [
      {
        src: "/brand/lems-logic-mark.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
