import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Projetos",
  description:
    "Conheça os projetos demonstrativos e cases em desenvolvimento pela LEMS Logic nas áreas de sistemas, automação, dados e tecnologia empresarial.",
  path: "/projetos",
});

const roadmap = [
  {
    n: "01",
    status: "Em desenvolvimento",
    title: "LEMS Gestão",
    description:
      "Sistema demonstrativo de gestão empresarial criado para apresentar como processos financeiros e administrativos podem ser centralizados em uma aplicação própria.",
    tags: ["Financeiro", "Cadastros", "Dashboards", "Relatórios"],
    stage: "Projeto principal",
  },
  {
    n: "02",
    status: "Planejado",
    title: "Automação administrativa",
    description:
      "Case voltado à eliminação de rotinas repetitivas envolvendo planilhas, consolidação de informações, arquivos e geração de relatórios.",
    tags: ["Automação", "Excel", "Dados", "Processos"],
    stage: "Próximo case",
  },
  {
    n: "03",
    status: "Planejado",
    title: "Estoque & pedidos",
    description:
      "Demonstração de controle operacional com produtos, movimentações de estoque, clientes, pedidos e acompanhamento de indicadores.",
    tags: ["Estoque", "Pedidos", "Clientes", "Indicadores"],
    stage: "Próximo case",
  },
  {
    n: "04",
    status: "Planejado",
    title: "Dashboards internos",
    description:
      "Projeto focado em transformar dados operacionais em indicadores visuais claros para acompanhamento e tomada de decisão.",
    tags: ["BI", "Dashboards", "KPIs", "Relatórios"],
    stage: "Próximo case",
  },
];

const principles = [
  ["Problema antes da tecnologia", "Cada projeto começa entendendo o processo e o impacto do gargalo, não escolhendo uma ferramenta."],
  ["Código com contexto", "O portfólio mostra não apenas telas, mas o motivo da solução, o fluxo e as decisões de construção."],
  ["Evolução contínua", "Os projetos são pensados para crescer por módulos e receber melhorias sem precisar recomeçar do zero."],
  ["Demonstração honesta", "Projetos demonstrativos são identificados como tal. Cases reais só serão apresentados quando existirem e puderem ser divulgados."],
];

function ProjectMark() {
  return (
    <svg viewBox="0 0 240 160" fill="none" aria-hidden="true" className="h-full w-full">
      <defs>
        <linearGradient id="projectLine" x1="36" y1="24" x2="206" y2="136" gradientUnits="userSpaceOnUse">
          <stop stopColor="#20D7DF" />
          <stop offset="1" stopColor="#55E694" />
        </linearGradient>
        <linearGradient id="projectFill" x1="40" y1="30" x2="190" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#20D7DF" stopOpacity=".18" />
          <stop offset="1" stopColor="#55E694" stopOpacity=".03" />
        </linearGradient>
      </defs>
      <rect x="18" y="16" width="204" height="128" rx="18" stroke="white" strokeOpacity=".12" fill="url(#projectFill)" />
      <rect x="36" y="34" width="168" height="18" rx="5" stroke="white" strokeOpacity=".12" />
      <circle cx="49" cy="43" r="3" fill="#55E694" />
      <path d="M61 43h55" stroke="white" strokeOpacity=".22" strokeWidth="4" strokeLinecap="round" />
      <rect x="36" y="66" width="48" height="52" rx="9" stroke="white" strokeOpacity=".12" />
      <rect x="94" y="66" width="110" height="52" rx="9" stroke="white" strokeOpacity=".12" />
      <path d="M106 104V91M121 104V83M136 104V95M151 104V77M166 104V87M181 104V73" stroke="url(#projectLine)" strokeWidth="6" strokeLinecap="round" />
      <path d="M47 83h24M47 95h17M47 107h21" stroke="white" strokeOpacity=".3" strokeWidth="4" strokeLinecap="round" />
      <rect x="166" y="26" width="46" height="46" rx="12" fill="#08171C" stroke="#20D7DF" strokeOpacity=".35" />
      <path d="M180 36v25h22" stroke="white" strokeWidth="5" strokeLinecap="square" />
      <path d="M187 42v13h13" stroke="url(#projectLine)" strokeWidth="5" strokeLinecap="square" />
      <rect x="198" y="34" width="5" height="5" fill="#20D7DF" />
      <rect x="205" y="41" width="4" height="4" fill="#55E694" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 py-20 md:py-28">
        <div className="grid-bg absolute inset-0 -z-20" />
        <div className="pixel left-[8%] top-28" />
        <div className="pixel right-[11%] top-52" />
        <div className="shell grid items-end gap-12 lg:grid-cols-[1.06fr_.94fr]">
          <div>
            <span className="tag">Projetos</span>
            <h1 className="section-title mt-6 max-w-4xl text-[clamp(2.55rem,11vw,5.4rem)] font-black">
              Soluções que saem da ideia e viram <span className="gradient-text">produto demonstrável.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
              O portfólio da LEMS Logic será construído com projetos que mostram problemas reais, decisões de produto e como tecnologia pode organizar uma operação.
            </p>
            <div className="mobile-actions mt-9">
              <Link href="#lems-gestao" className="btn-primary">Conhecer o LEMS Gestão <span aria-hidden>↓</span></Link>
              <WhatsAppButton label="Conversar sobre um projeto" className="btn-secondary" />
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-[28px] p-7 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(32,215,223,.16),transparent_34%),radial-gradient(circle_at_14%_86%,rgba(85,230,148,.09),transparent_34%)]" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[.22em] text-white/45">Portfólio / visão</span>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[.18em] text-[#55e694]"><i className="h-1.5 w-1.5 rounded-full bg-[#55e694] shadow-[0_0_12px_rgba(85,230,148,.8)]" /> Em construção</span>
              </div>
              <div className="mt-7 h-56 rounded-2xl border border-white/10 bg-black/10 p-2 md:h-64">
                <ProjectMark />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[["01", "Principal"], ["03", "Próximos"], ["100%", "Autorais"]].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                    <strong className="block text-xl text-white">{value}</strong>
                    <span className="mt-1 block text-xs uppercase tracking-[.12em] text-white/35">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="lems-gestao">
        <div className="shell">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="tag">Projeto em destaque</span>
              <h2 className="section-title mt-5">LEMS Gestão. <span className="gradient-text">Nosso primeiro case demonstrativo.</span></h2>
              <p className="section-copy mt-5">Um sistema empresarial criado para demonstrar de forma prática como informações financeiras e administrativas podem sair de controles dispersos e ganhar uma operação centralizada.</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#55e694]/20 bg-[#55e694]/[.055] px-4 py-2 text-sm text-[#83f2b3]"><span className="h-2 w-2 rounded-full bg-[#55e694] shadow-[0_0_12px_rgba(85,230,148,.7)]" /> Em desenvolvimento</span>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <article className="project-feature relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[.035] p-7 md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#20d7df]/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <div className="text-xs uppercase tracking-[.22em] text-[#55e694]">Gestão empresarial</div>
                    <h3 className="mt-3 text-3xl font-black tracking-[-.035em] md:text-4xl">Do financeiro ao indicador.</h3>
                  </div>
                  <span className="hidden text-5xl font-black tracking-[-.06em] text-white/[.05] sm:block">01</span>
                </div>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Financeiro", "Contas a pagar, receber e visão de fluxo"],
                    ["Cadastros", "Clientes, fornecedores e informações base"],
                    ["Dashboard", "Indicadores para leitura rápida da operação"],
                    ["Relatórios", "Dados organizados para conferência e análise"],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-black/10 p-5">
                      <span className="text-sm font-bold text-white">{title}</span>
                      <p className="mt-2 text-sm leading-6 text-white/45">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-7">
                  <div className="text-xs uppercase tracking-[.18em] text-white/35">Objetivo do projeto</div>
                  <p className="mt-3 max-w-3xl leading-7 text-white/60">Mostrar como uma aplicação interna pode ser desenhada em torno da rotina da empresa, com módulos que conversam entre si e uma estrutura preparada para evoluir.</p>
                </div>
              </div>
            </article>

            <div className="grid gap-5">
              <article className="card">
                <div className="text-xs uppercase tracking-[.18em] text-white/35">Stack planejada</div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "Banco de dados", "Docker"].map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-sm text-white/65">{tech}</span>)}
                </div>
                <p className="mt-5 text-sm leading-6 text-white/40">A stack pode evoluir conforme os requisitos reais do sistema forem definidos.</p>
              </article>

              <article className="card">
                <div className="text-xs uppercase tracking-[.18em] text-white/35">O que o case vai mostrar</div>
                <div className="mt-5 space-y-4">
                  {["Contexto e problema", "Arquitetura e decisões", "Interface e funcionalidades", "Código e documentação"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/65"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#20d7df]/20 bg-[#20d7df]/[.05] text-xs text-[#20d7df]">✓</span>{item}</div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-white/[.018]">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="tag">Roadmap</span>
            <h2 className="section-title mt-5">Portfólio construído <span className="gradient-text">projeto por projeto.</span></h2>
            <p className="section-copy mt-5">Em vez de preencher a página com projetos fictícios, a LEMS Logic vai publicar cada case conforme ele ganhar uma demonstração realmente utilizável.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {roadmap.map((project) => (
              <article key={project.n} className="project-card group relative md:min-h-[330px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[.03] p-7 transition hover:-translate-y-1 hover:border-[#20d7df]/30 hover:bg-white/[.042]">
                <div className="absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle,rgba(32,215,223,.08),transparent_68%)]" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm tracking-[.16em] text-[#20d7df]">{project.n}</span>
                    <span className={`rounded-full border px-3 py-1 text-xs ${project.status === "Em desenvolvimento" ? "border-[#55e694]/20 bg-[#55e694]/[.05] text-[#83f2b3]" : "border-white/10 bg-white/[.025] text-white/38"}`}>{project.status}</span>
                  </div>
                  <div className="mt-9 text-xs uppercase tracking-[.18em] text-white/32">{project.stage}</div>
                  <h3 className="mt-3 text-2xl font-black tracking-[-.025em]">{project.title}</h3>
                  <p className="mt-4 leading-7 text-white/52">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45">{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <span className="tag">Como apresentamos</span>
            <h2 className="section-title mt-5">Portfólio técnico, mas com <span className="gradient-text">visão de negócio.</span></h2>
            <p className="section-copy mt-5">A proposta é permitir que tanto uma empresa quanto outro profissional de tecnologia entendam o que foi resolvido e como a solução foi construída.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map(([title, text], index) => (
              <article key={title} className="card md:min-h-60">
                <span className="text-sm text-[#20d7df]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-9 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-white/50">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell">
          <div className="glass relative overflow-hidden rounded-[30px] p-8 md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#20d7df]/10 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-[#55e694]/10 blur-3xl" />
            <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="tag">Seu processo pode ser o próximo</span>
                <h2 className="mt-6 max-w-4xl text-3xl font-black leading-[1.07] tracking-[-.04em] sm:text-4xl md:text-6xl">Tem uma rotina que poderia funcionar melhor? <span className="gradient-text">Vamos transformar em solução.</span></h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">Conte como sua empresa trabalha hoje. A partir daí, avaliamos se faz sentido automatizar, organizar, integrar ou desenvolver uma ferramenta própria.</p>
              </div>
              <WhatsAppButton label="Falar sobre um projeto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
