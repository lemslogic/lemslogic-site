import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://lemslogic.com.br"),
  applicationName: "LEMS Logic",
  title: {
    default: "LEMS Logic | Tecnologia que simplifica negócios",
    template: "%s | LEMS Logic",
  },
  description:
    "Sistemas personalizados, automação empresarial, suporte e infraestrutura de TI para empresas.",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  creator: "LEMS Logic",
  publisher: "LEMS Logic",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "LEMS Logic | Tecnologia que simplifica negócios",
    description:
      "Sistemas personalizados, automação empresarial, suporte e infraestrutura de TI para empresas.",
    url: "https://lemslogic.com.br",
    siteName: "LEMS Logic",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEMS Logic | Tecnologia que simplifica negócios",
    description:
      "Sistemas personalizados, automação empresarial, suporte e infraestrutura de TI para empresas.",
  },
};

export const viewport: Viewport = {
  themeColor: "#071117",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <div id="conteudo-principal" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}
