import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const nav = [
  ["Soluções", "/solucoes"],
  ["Projetos", "/projetos"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071117]/88 backdrop-blur-xl">
      <div className="shell flex h-20 items-center justify-between gap-3 sm:h-24 lg:gap-5">
        <Link href="/" aria-label="LEMS Logic - início" className="flex min-w-0 shrink-0 items-center">
          <Image
            src="/brand/lems-logic-logo.png"
            alt="LEMS Logic"
            width={330}
            height={112}
            className="h-[3.4rem] w-auto object-contain object-left sm:h-[4rem] lg:h-[4.75rem]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">
              <span className="nav-dot" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton label="Solicitar orçamento" className="btn-secondary shrink-0 text-sm" />
        </div>

        <details className="mobile-nav relative lg:hidden">
          <summary className="mobile-nav-trigger" aria-label="Abrir menu de navegação">
            <span className="sr-only">Menu</span>
            <span className="mobile-nav-line" />
            <span className="mobile-nav-line" />
            <span className="mobile-nav-line" />
          </summary>

          <div className="mobile-nav-panel">
            <div className="mb-3 text-xs uppercase tracking-[.18em] text-white/35">Navegação</div>
            <nav className="grid gap-2">
              {nav.map(([label, href]) => (
                <Link key={href} href={href} className="mobile-nav-link">
                  <span className="nav-dot" />
                  <span>{label}</span>
                  <span className="ml-auto text-[#20d7df]">↗</span>
                </Link>
              ))}
            </nav>
            <WhatsAppButton label="Solicitar orçamento" className="btn-primary mt-3 w-full" />
          </div>
        </details>
      </div>
    </header>
  );
}
