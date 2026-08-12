export const siteConfig = {
  name: "LEMS Logic",
  domain: "lemslogic.com.br",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5512978985123",
  whatsappDisplay: "(12) 97898-5123",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/lemslogic",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/lemslogic",
};

export const defaultWhatsAppMessage =
  "Olá! Vim pelo site da LEMS Logic e gostaria de conversar sobre uma solução para minha empresa.";

export function getWhatsAppHref(message = defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
