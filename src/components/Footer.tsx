import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/55">
      <div className="shell flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div><strong className="block text-white sm:inline">LEMS Logic</strong><span className="mt-1 block sm:ml-2 sm:mt-0 sm:inline">Tecnologia que simplifica negócios.</span></div>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <Link href="/solucoes">Soluções</Link><Link href="/projetos">Projetos</Link><Link href="/sobre">Sobre</Link><Link href="/contato">Contato</Link>
        </div>
        <div>© {new Date().getFullYear()} LEMS Logic.</div>
      </div>
    </footer>
  );
}
