import { getWhatsAppHref } from "@/lib/site";

export function WhatsAppButton({
  label = "Falar com a LEMS Logic",
  className = "btn-primary",
  message,
}: {
  label?: string;
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={getWhatsAppHref(message)}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {label} <span aria-hidden>↗</span>
    </a>
  );
}
