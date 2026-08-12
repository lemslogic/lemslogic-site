import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Soluções",
  description:
    "Sistemas personalizados, automação empresarial, suporte e infraestrutura de TI para tornar operações mais simples, organizadas e eficientes.",
  path: "/solucoes",
});

const solutions = [
  {
    n: "01",
    title: "Sistemas personalizados",
    eyebrow: "Software sob medida",
    text: "Criamos aplicações web e ferramentas internas em torno da forma como sua empresa realmente trabalha — sem forçar sua operação a caber em um sistema engessado.",
    bullets: [
      "Sistemas administrativos e operacionais",
      "Dashboards, cadastros e relatórios",
      "Portais e ferramentas internas",
      "Integrações e evolução contínua",
    ],
    fit: "Quando planilhas e ferramentas genéricas já não acompanham a rotina da empresa.",
    icon: "code",
  },
  {
    n: "02",
    title: "Automação empresarial",
    eyebrow: "Menos tarefas repetitivas",
    text: "Mapeamos etapas manuais, consolidações e retrabalhos para transformar processos demorados em fluxos mais rápidos, previsíveis e fáceis de acompanhar.",
    bullets: [
      "Automação de planilhas e relatórios",
      "Tratamento e consolidação de dados",
      "Integração entre rotinas e sistemas",
      "Geração automática de documentos",
    ],
    fit: "Quando alguém precisa repetir todos os dias aquilo que a tecnologia poderia executar.",
    icon: "flow",
  },
  {
    n: "03",
    title: "Suporte de TI",
    eyebrow: "Tecnologia funcionando",
    text: "Apoiamos a operação com diagnóstico, configuração, manutenção e suporte para reduzir interrupções e manter usuários e equipamentos produtivos.",
    bullets: [
      "Diagnóstico e manutenção de computadores",
      "Instalação e configuração de sistemas",
      "Suporte remoto e presencial",
      "Padronização e manutenção preventiva",
    ],
    fit: "Quando problemas de TI começam a consumir tempo que deveria estar sendo usado no negócio.",
    icon: "support",
  },
  {
    n: "04",
    title: "Infraestrutura",
    eyebrow: "Uma base mais confiável",
    text: "Organizamos os elementos que sustentam o ambiente tecnológico da empresa para melhorar disponibilidade, segurança operacional e continuidade da rotina.",
    bullets: [
      "Redes e conectividade",
      "Backups e organização de dados",
      "Equipamentos e estações de trabalho",
      "Estrutura e boas práticas de TI",
    ],
    fit: "Quando a empresa cresceu, mas sua estrutura de tecnologia ainda funciona de forma improvisada.",
    icon: "infra",
  },
];

const painPoints = [
  ["Planilhas espalhadas", "Informações importantes divididas entre arquivos, versões e pessoas diferentes."],
  ["Retrabalho diário", "A mesma informação sendo digitada, conferida ou copiada diversas vezes."],
  ["Falta de visibilidade", "Gestores sem uma visão simples e atualizada do que está acontecendo na operação."],
  ["Ferramentas desconectadas", "Processos que dependem de transferências manuais entre sistemas e controles."],
  ["TI reativa", "Problemas recorrentes sendo resolvidos apenas depois que interrompem o trabalho."],
  ["Processos que não escalam", "Rotinas que funcionam com poucas pessoas, mas se tornam gargalos conforme a empresa cresce."],
];

function SolutionIcon({ type }: { type: string }) {
  const common = "h-7 w-7";

  if (type === "code") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "flow") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8.2 6h3.1a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3h-1.5M18 6h-3.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="m16.2 4.3 1.8 1.7-1.8 1.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 13v-2a7 7 0 0 1 14 0v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M5 12H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-6ZM19 12h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-6ZM18 18a4 4 0 0 1-4 4h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="7" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.7" />
      <rect x="14" y="4" width="7" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.7" />
      <rect x="8.5" y="15" width="7" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6.5 10v2.2h11V10M12 12.2V15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function SolutionsPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 py-20 md:py-28">
        <div className="grid-bg absolute inset-0 -z-20" />
        <div className="pixel left-[10%] top-24" />
        <div className="pixel right-[15%] top-48" />
        <div className="shell grid items-end gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <span className="tag">Soluções</span>
            <h1 className="section-title mt-6 max-w-4xl text-[clamp(2.55rem,11vw,5.4rem)] font-black">
              Tecnologia para transformar <span className="gradient-text">gargalos em evolução.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
              Da infraestrutura ao software, a LEMS Logic procura entender onde sua operação perde tempo, informação ou previsibilidade e aplicar tecnologia no ponto certo.
            </p>
            <div className="mobile-actions mt-9">
              <WhatsAppButton label="Conversar sobre uma necessidade" />
              <Link href="#solucoes-detalhadas" className="btn-secondary">Explorar soluções ↓</Link>
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-[28px] p-7 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(32,215,223,.17),transparent_34%),radial-gradient(circle_at_20%_90%,rgba(85,230,148,.1),transparent_35%)]" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[.22em] text-[#55e694]">Uma solução começa pelo problema</div>
              <div className="mt-8 space-y-3">
                {[
                  ["01", "Entender", "como a operação funciona hoje"],
                  ["02", "Identificar", "onde existe atrito ou desperdício"],
                  ["03", "Simplificar", "antes de adicionar tecnologia"],
                  ["04", "Implementar", "uma solução que possa evoluir"],
                ].map(([n, title, text]) => (
                  <div key={n} className="flex gap-4 rounded-2xl border border-white/10 bg-black/15 p-4">
                    <span className="mt-0.5 text-sm text-[#20d7df]">{n}</span>
                    <div><strong className="block">{title}</strong><span className="mt-1 block text-sm leading-6 text-white/50">{text}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="solucoes-detalhadas">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="tag">Onde atuamos</span>
            <h2 className="section-title mt-5">Quatro frentes. <span className="gradient-text">Um mesmo objetivo.</span></h2>
            <p className="section-copy mt-5">Usamos software, automação, suporte e infraestrutura como meios para tornar a operação mais organizada, eficiente e preparada para crescer.</p>
          </div>

          <div className="mt-14 space-y-5">
            {solutions.map((solution) => (
              <article key={solution.n} className="solution-panel relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[.03] p-6 md:p-9">
                <div className="absolute right-0 top-0 h-52 w-52 bg-[radial-gradient(circle,rgba(32,215,223,.085),transparent_66%)]" />
                <div className="relative grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
                  <div className="flex flex-col justify-between gap-10">
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#20d7df]/20 bg-[#20d7df]/[.07] text-[#20d7df] shadow-[inset_0_0_24px_rgba(32,215,223,.03)]">
                          <SolutionIcon type={solution.icon} />
                        </span>
                        <span className="text-sm tracking-[.18em] text-white/32">{solution.n}</span>
                      </div>
                      <div className="mt-9 text-xs uppercase tracking-[.2em] text-[#55e694]">{solution.eyebrow}</div>
                      <h3 className="mt-3 text-3xl font-black tracking-[-.03em] md:text-4xl">{solution.title}</h3>
                      <p className="mt-5 max-w-xl text-base leading-8 text-white/55">{solution.text}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                      <span className="text-xs uppercase tracking-[.18em] text-white/35">Faz sentido quando</span>
                      <p className="mt-3 leading-7 text-white/70">{solution.fit}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="mb-5 text-xs uppercase tracking-[.2em] text-white/35">Possibilidades</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {solution.bullets.map((bullet) => (
                        <div key={bullet} className="group flex min-h-24 items-start gap-4 rounded-2xl border border-white/10 bg-black/10 p-5 transition hover:border-[#20d7df]/30 hover:bg-[#20d7df]/[.035]">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#55e694]/25 bg-[#55e694]/[.06] text-xs text-[#55e694]">✓</span>
                          <span className="leading-7 text-white/68">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-white/[.018]">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <span className="tag">Sinais de oportunidade</span>
              <h2 className="section-title mt-5">Problemas comuns que <span className="gradient-text">não precisam continuar manuais.</span></h2>
              <p className="section-copy mt-5">Nem toda dificuldade precisa de um sistema novo. O diagnóstico serve justamente para separar o que deve ser automatizado, organizado, integrado ou simplesmente corrigido.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {painPoints.map(([title, text], index) => (
                <article key={title} className="card md:min-h-52">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#20d7df]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-xl text-white/20">↗</span>
                  </div>
                  <h3 className="mt-10 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/52">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="glass relative overflow-hidden rounded-[30px] p-8 md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#20d7df]/10 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-[#55e694]/10 blur-3xl" />
            <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="tag">Próximo passo</span>
                <h2 className="mt-6 max-w-4xl text-3xl font-black leading-[1.07] tracking-[-.04em] sm:text-4xl md:text-6xl">
                  Você não precisa saber qual tecnologia usar. <span className="gradient-text">Comece contando o problema.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">A primeira conversa serve para entender a rotina, o impacto do gargalo e qual caminho faz sentido — inclusive quando a melhor solução for mais simples do que desenvolver um sistema.</p>
              </div>
              <WhatsAppButton label="Falar com a LEMS Logic" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
