import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const solutions = [
  { n: "01", title: "Sistemas personalizados", text: "Software desenvolvido em torno dos processos reais da sua empresa — sem obrigar sua operação a caber em uma solução engessada." },
  { n: "02", title: "Automação empresarial", text: "Reduza retrabalho, consolide informações e transforme tarefas repetitivas em fluxos mais rápidos, previsíveis e seguros." },
  { n: "03", title: "Suporte de TI", text: "Manutenção, configuração e suporte para manter computadores, usuários e ferramentas funcionando quando sua empresa precisa." },
  { n: "04", title: "Infraestrutura", text: "Redes, backups, ambientes e tecnologia organizados para dar uma base mais confiável à operação." },
];

const steps = [
  ["01", "Diagnóstico", "Entendemos a rotina, o gargalo e o resultado que sua empresa precisa atingir."],
  ["02", "Planejamento", "Definimos uma solução objetiva, escopo, prioridades e forma de implantação."],
  ["03", "Execução", "Desenvolvemos, configuramos ou implantamos a tecnologia com acompanhamento próximo."],
  ["04", "Evolução", "Suporte contínuo, manutenção e melhorias para a solução acompanhar seu negócio."],
];

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 py-20 md:py-36">
        <div className="grid-bg absolute inset-0 -z-20" />
        <div className="pixel left-[8%] top-24" /><div className="pixel right-[12%] top-44" /><div className="pixel bottom-24 left-[22%]" />
        <div className="shell grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <span className="tag">Sistemas • Automação • Tecnologia</span>
            <h1 className="gradient-text hero-title mt-7 max-w-4xl text-[clamp(2.75rem,13vw,4rem)] font-black tracking-[-.052em] md:text-7xl">Tecnologia que simplifica negócios.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:mt-7 sm:text-lg sm:leading-8">Sistemas personalizados, automação e soluções de TI para empresas que querem ganhar eficiência, organizar processos e reduzir trabalho manual.</p>
            <div className="mobile-actions mt-8 sm:mt-9"><WhatsAppButton /><Link href="#solucoes" className="btn-secondary">Conhecer soluções ↓</Link></div>
          </div>
          <div className="glass relative min-h-[360px] overflow-hidden rounded-[24px] p-5 sm:p-7 md:min-h-[420px] md:rounded-[28px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(32,215,223,.18),transparent_35%),radial-gradient(circle_at_30%_80%,rgba(85,230,148,.12),transparent_32%)]" />
            <div className="relative flex h-full min-h-[320px] flex-col justify-between md:min-h-[364px]">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[.18em] text-white/45"><span>LEMS Logic / Business Technology</span><span>● Online</span></div>
              <div>
                <div className="mb-4 text-xs uppercase tracking-[.25em] text-[#55e694]">Do processo à solução</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {['Planilhas espalhadas','Tarefas repetitivas','Controles manuais','Sistemas desconectados'].map((x) => <div key={x} className="rounded-2xl border border-white/10 bg-black/15 p-4 text-sm text-white/70">{x}</div>)}
                </div>
              </div>
              <div className="flex items-end justify-between border-t border-white/10 pt-5"><span className="max-w-xs text-sm leading-6 text-white/55">Transformamos gargalos operacionais em processos mais simples, organizados e automatizados.</span><span className="text-3xl text-[#20d7df]">↗</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="solucoes"><div className="shell"><span className="tag">O que fazemos</span><h2 className="section-title mt-5">Tecnologia aplicada ao <span className="gradient-text">problema certo.</span></h2><p className="section-copy mt-5">Não começamos pela ferramenta. Primeiro entendemos onde sua operação perde tempo, informação ou previsibilidade — e então definimos a solução.</p><div className="mt-12 grid gap-4 md:grid-cols-2">{solutions.map((s) => <article key={s.n} className="card"><div className="mb-12 flex items-center justify-between"><span className="text-sm text-[#20d7df]">{s.n}</span><span className="text-white/25">↗</span></div><h3 className="text-2xl font-bold">{s.title}</h3><p className="mt-4 leading-7 text-white/55">{s.text}</p></article>)}</div></div></section>

      <section className="section border-y border-white/10 bg-white/[.018]"><div className="shell grid gap-12 lg:grid-cols-[.78fr_1.22fr]"><div><span className="tag">Como trabalhamos</span><h2 className="section-title mt-5">Menos complicação.<br/><span className="gradient-text">Mais resultado.</span></h2></div><div className="grid gap-3">{steps.map(([n,title,text]) => <div key={n} className="card grid gap-4 md:grid-cols-[70px_190px_1fr] md:items-center"><span className="text-[#20d7df]">{n}</span><strong className="text-lg">{title}</strong><span className="leading-7 text-white/55">{text}</span></div>)}</div></div></section>

      <section className="section"><div className="shell"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="tag">Projetos</span><h2 className="section-title mt-5">Construindo soluções que <span className="gradient-text">podem ser demonstradas.</span></h2></div><Link href="/projetos" className="btn-secondary project-link"><span>Ver projetos</span><span aria-hidden="true">↗</span></Link></div><div className="mt-12 grid gap-4 lg:grid-cols-3"><article className="card lg:col-span-2"><div className="text-sm text-[#55e694]">EM DESENVOLVIMENTO</div><h3 className="mt-16 text-3xl font-bold">LEMS Gestão</h3><p className="mt-4 max-w-xl leading-7 text-white/55">Uma demonstração de sistema empresarial com financeiro, clientes, fornecedores, dashboards e relatórios — criada para mostrar como processos podem virar software.</p></article><article className="card"><div className="text-sm text-white/35">PRÓXIMOS CASES</div><div className="mt-16 space-y-4 text-lg"><p>Automação administrativa</p><p className="border-t border-white/10 pt-4">Estoque & pedidos</p><p className="border-t border-white/10 pt-4">Dashboards internos</p></div></article></div></div></section>

      <section className="section"><div className="shell"><div className="glass overflow-hidden rounded-[30px] p-8 md:p-14"><div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]"><div><span className="tag">Vamos conversar</span><h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-[-.04em] md:text-6xl">Tem um processo que ainda depende de <span className="gradient-text">planilha, controle manual ou retrabalho?</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Conte como sua empresa trabalha hoje. A primeira conversa serve para entender o problema e avaliar onde a tecnologia realmente pode ajudar.</p></div><WhatsAppButton label="Iniciar conversa" /></div></div></div></section>
    </main>
  );
}
