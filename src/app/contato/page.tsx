import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getWhatsAppHref, siteConfig } from "@/lib/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contato",
  description:
    "Fale com a LEMS Logic sobre sistemas personalizados, automação, suporte e infraestrutura de TI para sua empresa.",
  path: "/contato",
});

const firstContact = [
  ["01", "O que precisa funcionar melhor?", "Conte o problema, gargalo ou tarefa que hoje consome tempo da operação."],
  ["02", "Como funciona atualmente?", "Planilha, sistema, processo manual, equipamentos ou qualquer ferramenta já utilizada."],
  ["03", "Qual resultado você procura?", "Mais controle, menos retrabalho, integração, agilidade, suporte ou uma solução própria."],
  ["04", "Existe alguma prioridade?", "Se houver prazo, urgência ou uma etapa crítica da operação, vale incluir no primeiro contato."],
];

const flow = [
  ["01", "Conversa inicial", "Entendemos o cenário e identificamos o ponto principal da necessidade."],
  ["02", "Diagnóstico", "Avaliamos o processo, o ambiente atual e qual caminho técnico faz mais sentido."],
  ["03", "Proposta", "Definimos escopo, formato de atendimento, prazo e investimento quando aplicável."],
  ["04", "Execução", "Partimos para desenvolvimento, automação, implantação ou atendimento técnico."],
];

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <path d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.1-4.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.5 1 1.3 1.8 2.3 2.3.2.1.4.2.6 0l.8-.9c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.2-.7 1.7-.5.5-1.2.8-2.1.6-1.3-.2-3.1-1-4.7-2.5-1.3-1.2-2.4-2.8-2.7-4.1-.2-.8.1-1.6.5-2.2Z" fill="currentColor" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 py-20 md:py-28">
        <div className="grid-bg absolute inset-0 -z-20" />
        <div className="pixel left-[8%] top-32" />
        <div className="pixel right-[10%] top-48" />

        <div className="shell grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
          <div>
            <span className="tag">Contato</span>
            <h1 className="section-title mt-6 max-w-4xl text-[clamp(2.55rem,11vw,5.35rem)] font-black">
              Vamos entender o que pode <span className="gradient-text">funcionar melhor.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
              Pode ser um sistema interno, uma automação, uma dificuldade de infraestrutura ou uma necessidade de suporte. O primeiro contato serve para entender o cenário antes de propor qualquer solução.
            </p>
            <div className="mobile-actions mt-9">
              <WhatsAppButton label="Conversar pelo WhatsApp" />
              <a href="#como-funciona" className="btn-secondary">Como funciona ↓</a>
            </div>
          </div>

          <aside className="glass relative overflow-hidden rounded-[30px] p-7 md:p-9">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#20d7df]/10 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[.22em] text-white/42">Canal principal</span>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[.16em] text-[#55e694]"><i className="h-1.5 w-1.5 rounded-full bg-[#55e694] shadow-[0_0_12px_rgba(85,230,148,.8)]" /> Disponível</span>
              </div>

              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                className="group mt-7 block rounded-[24px] border border-[#20d7df]/20 bg-[#20d7df]/[.045] p-6 transition hover:-translate-y-1 hover:border-[#20d7df]/40 hover:bg-[#20d7df]/[.07]"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#55e694]/25 bg-[#55e694]/[.08] text-[#55e694]"><WhatsAppMark /></span>
                  <div>
                    <div className="text-sm text-white/42">WhatsApp</div>
                    <div className="mt-1 text-xl font-black tracking-[-.03em] text-white sm:text-2xl">{siteConfig.whatsappDisplay}</div>
                  </div>
                  <span className="ml-auto text-2xl text-[#20d7df] transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </div>
                <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-white/48">Atendimento inicial diretamente pelo WhatsApp. O número Business poderá ser atualizado depois sem alterar os botões do site.</p>
              </a>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-black/10 p-5 transition hover:border-[#20d7df]/30 hover:bg-white/[.035]">
                  <div className="text-xs uppercase tracking-[.18em] text-white/35">Instagram</div>
                  <div className="mt-2 font-semibold text-white/78">@lemslogic ↗</div>
                </a>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                  <div className="text-xs uppercase tracking-[.18em] text-white/35">Site</div>
                  <div className="mt-2 font-semibold text-white/78">lemslogic.com.br</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <span className="tag">Primeiro contato</span>
            <h2 className="section-title mt-5">Não precisa chegar com a <span className="gradient-text">solução pronta.</span></h2>
            <p className="section-copy mt-5">Basta explicar o que acontece hoje. Quanto mais contexto sobre a rotina, mais fácil identificar se o melhor caminho é suporte, configuração, automação ou desenvolvimento.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {firstContact.map(([n, title, text]) => (
              <article key={n} className="card md:min-h-[260px]">
                <div className="flex items-center justify-between">
                  <span className="text-sm tracking-[.16em] text-[#20d7df]">{n}</span>
                  <span className="h-2 w-2 rounded-full bg-[#55e694]/75 shadow-[0_0_16px_rgba(85,230,148,.55)]" />
                </div>
                <h3 className="mt-9 text-2xl font-black tracking-[-.03em]">{title}</h3>
                <p className="mt-4 leading-7 text-white/52">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section border-y border-white/10 bg-white/[.018]">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="tag">Depois da mensagem</span>
            <h2 className="section-title mt-5">Um caminho claro do contato à <span className="gradient-text">execução.</span></h2>
            <p className="section-copy mt-5">Cada demanda pode ter um tamanho diferente, mas o raciocínio permanece simples: entender, diagnosticar, propor e executar.</p>
          </div>

          <div className="mt-12 grid gap-3">
            {flow.map(([n, title, text]) => (
              <article key={n} className="card grid gap-4 md:grid-cols-[74px_220px_1fr] md:items-center">
                <span className="text-[#20d7df]">{n}</span>
                <strong className="text-lg">{title}</strong>
                <span className="leading-7 text-white/52">{text}</span>
              </article>
            ))}
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
                <span className="tag">LEMS Logic</span>
                <h2 className="mt-6 max-w-4xl text-3xl font-black leading-[1.07] tracking-[-.04em] sm:text-4xl md:text-6xl">Tem uma ideia, um problema ou um processo que pode ser <span className="gradient-text">melhorado?</span></h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">Mande uma mensagem e conte o cenário. A partir daí avaliamos juntos qual é o próximo passo mais adequado.</p>
              </div>
              <WhatsAppButton label="Iniciar conversa" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
