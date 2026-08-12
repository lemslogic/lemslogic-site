import { siteConfig } from "@/lib/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lemslogic.com.br/#organization",
        name: siteConfig.name,
        url: "https://lemslogic.com.br",
        logo: "https://lemslogic.com.br/brand/lems-logic-logo.png",
        description:
          "Sistemas personalizados, automação empresarial, suporte e infraestrutura de TI para empresas.",
        telephone: "+55 12 97898-5123",
        sameAs: [siteConfig.instagramUrl],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55 12 97898-5123",
          contactType: "customer service",
          availableLanguage: "Portuguese",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://lemslogic.com.br/#website",
        url: "https://lemslogic.com.br",
        name: siteConfig.name,
        inLanguage: "pt-BR",
        publisher: { "@id": "https://lemslogic.com.br/#organization" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
