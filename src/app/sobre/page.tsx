import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Sobre",
  description:
    "Conheça a LEMS Logic, uma empresa de tecnologia focada em sistemas personalizados, automação, suporte e infraestrutura para negócios.",
  path: "/sobre",
});

const pillars = [
  {
    n: "01",
    title: "Entender antes de construir",
    text: "Tecnologia só faz sentido quando resolve um problema real. Por isso, cada trabalho começa pelo processo, pelas pessoas envolvidas e pelo resultado esperado.",
  },
  {
    n: "02",
    title: "Simplificar sem limitar",
    text: "Buscamos soluções objetivas, organizadas e fáceis de manter — sem adicionar complexidade apenas para parecer mais tecnológico.",
  },
  {
    n: "03",
    title: "Pensar em continuidade",
    text: "Sistemas, automações e ambientes de TI são estruturados para poder evoluir conforme a operação muda e o negócio cresce.",
  },
  {
    n: "04",
    title: "Falar a linguagem do negócio",
    text: "A conversa não precisa começar em frameworks, servidores ou siglas. O ponto de partida é entender o que precisa funcionar melhor dentro da empresa.",
  },
];

const capabilities = [
  ["Sistemas", "Aplicações e ferramentas internas pensadas para processos específicos."],
  ["Automação", "Menos tarefas repetitivas e mais fluxo entre dados, arquivos e rotinas."],
  ["Suporte", "Diagnóstico, manutenção e apoio para manter a operação funcionando."],
  ["Infraestrutura", "Computadores, redes, backups e organização do ambiente tecnológico."],
];

function LogicMark() {
  return (
    <svg viewBox="0 0 320 250" fill="none" aria-hidden="true" className="h-full w-full">
      <defs>
        <linearGradient id="aboutLine" x1="72" y1="42" x2="249" y2="211" gradientUnits="userSpaceOnUse">
          <stop stopColor="#20D7DF" />
          <stop offset="1" stopColor="#55E694" />
        </linearGradient>
        <radialGradient id="aboutGlow" cx="0" cy="0" r="1" gradientTransform="translate(166 126) rotate(90) scale(116 147)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#20D7DF" stopOpacity=".14" />
          <stop offset="1" stopColor="#20D7DF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="163" cy="127" rx="142" ry="112" fill="url(#aboutGlow)" />
      <rect x="51" y="42" width="218" height="166" rx="26" stroke="white" strokeOpacity=".10" />
      <path d="M93 76v88h91" stroke="white" strokeOpacity=".88" strokeWidth="12" strokeLinecap="square" />
      <path d="M119 98v40h58" stroke="url(#aboutLine)" strokeWidth="12" strokeLinecap="square" />

      <circle cx="221" cy="87" r="7" fill="#20D7DF" />
      <circle cx="244" cy="106" r="5" fill="#55E694" />
      <circle cx="217" cy="126" r="4" fill="#20D7DF" fillOpacity=".7" />
      <circle cx="244" cy="145" r="7" fill="#20D7DF" fillOpacity=".55" />
      <circle cx="218" cy="164" r="5" fill="#55E694" fillOpacity=".72" />

      <path d="M189 92h24M184 116h30M185 142h37M184 167h25" stroke="white" strokeOpacity=".16" strokeWidth="2" strokeDasharray="4 7" />
      <path d="M219 94v13M239 111l-16 13M224 130l16 11M239 151l-17 11" stroke="url(#aboutLine)" strokeOpacity=".55" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 py-20 md:py-28">
        <div className="grid-bg absolute inset-0 -z-20" />
        <div className="pixel left-[7%] top-32" />
        <div className="pixel right-[13%] top-44" />

        <div className="shell grid items-center gap-12 lg:grid-cols-[1.06fr_.94fr]">
          <div>
            <span className="tag">Sobre a LEMS Logic</span>
            <h1 className="section-title mt-6 max-w-4xl text-[clamp(2.55rem,11vw,5.35rem)] font-black">
              Tecnologia próxima da operação. <span className="gradient-text">Soluções pensadas para o negócio.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
              A LEMS Logic nasce com uma proposta simples: entender como uma empresa trabalha, identificar onde a tecnologia pode gerar valor e transformar isso em uma solução clara, utilizável e sustentável.
            </p>
            <div className="mobile-actions mt-9">
              <Link href="/solucoes" className="btn-primary">Conhecer soluções <span aria-hidden>↗</span></Link>
              <WhatsAppButton label="Falar com a LEMS Logic" className="btn-secondary" />
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-[30px] p-6 md:p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#20d7df]/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#55e694]/8 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[.22em] text-white/42">LEMS Logic / princípio</span>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[.16em] text-[#55e694]"><i className="h-1.5 w-1.5 rounded-full bg-[#55e694] shadow-[0_0_12px_rgba(85,230,148,.8)]" /> Business Technology</span>
              </div>
              <div className="mt-5 h-64 rounded-[24px] border border-white/10 bg-black/10 p-2 md:h-72">
                <LogicMark />
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-5">
                <div className="text-xs uppercase tracking-[.18em] text-[#20d7df]">Do processo à solução</div>
                <p className="mt-3 leading-7 text-white/58">Antes de pensar em tecnologia, buscamos entender o fluxo. A ferramenta vem depois — como consequência de uma necessidade bem definida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <span className="tag">Nossa forma de pensar</span>
            <h2 className="section-title mt-5">Menos tecnologia por aparência. <span className="gradient-text">Mais tecnologia com propósito.</span></h2>
            <p className="section-copy mt-5">A LEMS Logic foi estruturada para atuar entre a necessidade operacional e a solução técnica, mantendo o foco no que realmente precisa melhorar.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.n} className="card md:min-h-[285px]">
                <div className="flex items-center justify-between">
                  <span className="text-sm tracking-[.16em] text-[#20d7df]">{pillar.n}</span>
                  <span className="h-2 w-2 rounded-full bg-[#55e694]/75 shadow-[0_0_16px_rgba(85,230,148,.55)]" />
                </div>
                <h3 className="mt-10 text-2xl font-black tracking-[-.03em]">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-white/52">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-white/[.018]">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="tag">Atuação</span>
            <h2 className="section-title mt-5">Uma única marca para <span className="gradient-text">diferentes necessidades de tecnologia.</span></h2>
            <p className="section-copy mt-5">A atuação combina desenvolvimento, automação e suporte técnico para permitir que a solução acompanhe o contexto real de cada empresa.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(([title, text], index) => (
              <article key={title} className="group relative md:min-h-[270px] overflow-hidden rounded-[22px] border border-white/10 bg-white/[.03] p-6 transition hover:-translate-y-1 hover:border-[#20d7df]/30 hover:bg-white/[.045]">
                <div className="absolute right-0 top-0 h-36 w-36 bg-[radial-gradient(circle,rgba(32,215,223,.08),transparent_68%)]" />
                <div className="relative flex h-full flex-col">
                  <span className="text-sm text-[#20d7df]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-10 text-2xl font-black tracking-[-.025em]">{title}</h3>
                  <p className="mt-4 leading-7 text-white/50">{text}</p>
                  <Link href="/solucoes" className="mt-auto pt-8 text-sm font-semibold text-white/58 transition group-hover:text-[#84f5d0]">Ver soluções <span aria-hidden>↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
          <article className="glass relative overflow-hidden rounded-[28px] p-8 md:p-11">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#20d7df]/10 blur-3xl" />
            <div className="relative">
              <span className="text-xs uppercase tracking-[.22em] text-[#55e694]">Posicionamento</span>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.06] tracking-[-.04em] md:text-5xl">Não queremos ser apenas quem “conserta o computador” ou quem “faz um sistema”.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/58">A proposta é entender a necessidade de forma mais ampla. Às vezes a resposta é uma configuração simples. Em outras, uma automação. E quando o processo exige algo próprio, o desenvolvimento de software entra como ferramenta.</p>
            </div>
          </article>

          <article className="h-fit self-center rounded-[28px] border border-white/10 bg-white/[.03] p-8 md:p-10">
            <div className="text-xs uppercase tracking-[.22em] text-white/35">Em cada projeto</div>
            <div className="mt-8 space-y-5">
              {[
                ["01", "Entender o cenário atual"],
                ["02", "Mapear o principal gargalo"],
                ["03", "Propor a solução adequada"],
                ["04", "Implantar e acompanhar"],
              ].map(([n, label]) => (
                <div key={n} className="flex items-center gap-5 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#20d7df]/20 bg-[#20d7df]/[.05] text-sm text-[#20d7df]">{n}</span>
                  <span className="text-lg font-semibold text-white/75">{label}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell">
          <div className="glass relative overflow-hidden rounded-[30px] p-8 md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#20d7df]/10 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-[#55e694]/10 blur-3xl" />
            <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="tag">Vamos conversar</span>
                <h2 className="mt-6 max-w-4xl text-3xl font-black leading-[1.07] tracking-[-.04em] sm:text-4xl md:text-6xl">Tecnologia começa com uma boa pergunta: <span className="gradient-text">o que pode funcionar melhor?</span></h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">Se existe um processo manual, uma rotina que consome tempo ou uma necessidade de TI que ainda não está bem resolvida, esse pode ser o ponto de partida.</p>
              </div>
              <WhatsAppButton label="Falar com a LEMS Logic" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
