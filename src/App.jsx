import React from "react";
import { motion } from "framer-motion";
import headerLogo from "./transparente_logo_clean.png";
import profilePhoto from "./renata-profile.jpeg";

const whatsappUrl = "https://wa.me/5527988481857";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Button({ children, className = "", variant = "primary", size = "md", href, ...props }) {
  const base = "inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#4DE2FF] focus:ring-offset-2 focus:ring-offset-white disabled:pointer-events-none disabled:opacity-50";
  const sizes = {
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };
  const variants = {
    primary: "bg-[#07111F] text-white shadow-[0_18px_48px_rgba(7,17,31,0.22)] hover:bg-[#0D1A2D]",
    accent: "bg-[#4DE2FF] text-[#07111F] shadow-[0_18px_48px_rgba(77,226,255,0.28)] hover:bg-[#7CEBFF]",
    outline: "border border-[#07111F]/12 bg-white/70 text-[#07111F] hover:bg-white",
  };
  const classes = cx(base, sizes[size] || sizes.md, variants[variant] || variants.primary, className);

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

function Icon({ name, className = "" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    className,
  };

  const icons = {
    arrow: <svg {...common}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>,
    strategy: <svg {...common}><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 4-4 3 3 5-7" /></svg>,
    brand: <svg {...common}><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" /><path d="M12 8v8" /><path d="M8 10l4-2 4 2" /></svg>,
    traffic: <svg {...common}><path d="M3 12h5l2-7 4 14 2-7h5" /><path d="M18 5l3 3-3 3" /></svg>,
    tech: <svg {...common}><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 4-4 16" /></svg>,
    ai: <svg {...common}><rect x="5" y="7" width="14" height="12" rx="3" /><path d="M12 7V4" /><path d="M8.5 13h.01" /><path d="M15.5 13h.01" /><path d="M9 17h6" /></svg>,
    integration: <svg {...common}><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="12" cy="18" r="3" /><path d="M8.5 7.5 11 15" /><path d="M15.5 7.5 13 15" /><path d="M9 6h6" /></svg>,
    check: <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-5" /></svg>,
    message: <svg {...common}><path d="M21 12a8 8 0 0 1-8 8H7l-4 3 1.3-5.2A8 8 0 1 1 21 12Z" /></svg>,
    user: <svg {...common}><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>,
    spark: <svg {...common}><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" /></svg>,
  };

  return icons[name] || icons.strategy;
}

function LogoMark({ className = "" }) {
  return (
    <div className={cx("flex items-center pt-1 sm:pt-2 md:pt-8", className)}>
      <img
        src={headerLogo}
        alt="RR Tecnologia e Qualidade"
        className="w-[148px] min-w-[148px] object-contain sm:w-[188px] sm:min-w-[188px] md:w-[220px] md:min-w-[220px] lg:w-[240px] lg:min-w-[240px]"
      />
    </div>
  );
}

const services = [
  { icon: "strategy", title: "Análise de negócio", text: "Leitura do cenário atual, gargalos, oportunidades e um plano claro para destravar crescimento." },
  { icon: "brand", title: "Branding e posicionamento", text: "Marca, mensagem e percepção alinhadas para transmitir autoridade e valor desde o primeiro contato." },
  { icon: "traffic", title: "Gestão de tráfego", text: "Campanhas com direção estratégica, acompanhamento de performance e foco em oportunidade comercial." },
  { icon: "tech", title: "Sites e landing pages", text: "Experiências digitais refinadas, rápidas e responsivas, desenhadas para confiança e conversão." },
  { icon: "ai", title: "IA em parceria com a Baseon", text: "Automações e agentes inteligentes aplicados à operação, atendimento e vendas com critério de negócio." },
  { icon: "integration", title: "CRM, sistemas e integrações", text: "Funis, APIs, WhatsApp, ERP e ferramentas conectadas para operar com mais eficiência e previsibilidade." },
];

const steps = [
  { title: "Diagnóstico do negócio", note: "Leitura do cenário atual, objetivos e gargalos reais." },
  { title: "Definição da estratégia", note: "Prioridades, posicionamento e direção para a execução." },
  { title: "Planejamento da solução", note: "Estrutura visual, técnica e comercial conectadas." },
  { title: "Execução visual e técnica", note: "Implementação com acabamento, clareza e consistência." },
  { title: "Acompanhamento e evolução", note: "Ajustes finos para sustentar crescimento e percepção." },
];

const differentials = [
  "Visão técnica com leitura real de negócio",
  "Execução com clareza, processo e acabamento",
  "Marca, tecnologia e crescimento no mesmo plano",
  "Projetos pensados para vender melhor e operar melhor",
];

const highlights = [
  { value: "360°", label: "visão integrada entre marca, tecnologia e operação" },
  { value: "IA", label: "aplicada com estratégia, não como promessa vazia" },
  { value: "Premium", label: "percepção visual mais forte, clara e profissional" },
];

const focusAreas = [
  "Presença digital com leitura estratégica",
  "Estrutura visual e técnica mais profissional",
  "Processos conectados para crescer com clareza",
];

function runSmokeTests() {
  console.assert(services.length === 6, "A página deve exibir 6 serviços principais.");
  console.assert(steps.length === 5, "A página deve exibir 5 etapas do processo.");
  console.assert(services.some((service) => service.title.includes("Baseon")), "A parceria com a Baseon precisa estar clara nos serviços.");
  console.assert(differentials.length >= 4, "A página deve exibir diferenciais comerciais.");
}

if (typeof window !== "undefined") {
  runSmokeTests();
}

export default function RRLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F7FB] font-sans text-[#07111F] selection:bg-[#4DE2FF] selection:text-[#07111F]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,226,255,0.16),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(44,117,255,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(244,247,251,0.96))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,17,31,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(7,17,31,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <header className="relative z-10 mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="flex items-center rounded-[1.5rem] border border-white/60 bg-white/34 px-4 py-3 shadow-[0_18px_48px_rgba(7,17,31,0.045)] backdrop-blur-xl sm:rounded-[1.75rem] sm:px-5 md:px-6">
          <a href="#topo" aria-label="RR Tecnologia e Qualidade" className="shrink-0 self-center">
            <LogoMark />
          </a>
          <nav className="hidden flex-1 items-center justify-start gap-6 self-center pl-4 text-[17px] font-semibold text-[#07111F]/60 lg:flex xl:gap-7 xl:pl-5" aria-label="Menu principal">
            <a href="#solucoes" className="transition hover:text-[#1488FF]">Soluções</a>
            <a href="#sobre" className="transition hover:text-[#1488FF]">Sobre</a>
            <a href="#processo" className="transition hover:text-[#1488FF]">Processo</a>
            <a href="#contato" className="transition hover:text-[#1488FF]">Contato</a>
          </nav>
          <Button href={whatsappUrl} className="ml-auto hidden self-center md:inline-flex md:h-14 md:px-8 md:text-base">Falar agora</Button>
        </div>
      </header>

      <section id="topo" className="relative z-10 mx-auto grid max-w-7xl items-start gap-10 px-4 pb-20 pt-6 sm:gap-14 sm:px-6 sm:pb-24 sm:pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-32 lg:pt-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="pt-1 sm:pt-2">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#07111F]/58 sm:mb-8 sm:gap-4 sm:text-sm sm:tracking-[0.22em]">
            <span className="h-px w-8 bg-gradient-to-r from-[#1488FF] to-[#4DE2FF] sm:w-12" />
            <span>Estratégia, tecnologia e posicionamento</span>
          </div>
          <h1 className="max-w-5xl text-[2.95rem] font-black leading-[0.92] tracking-[-0.05em] sm:text-[3.35rem] md:text-[4.6rem] lg:max-w-[10ch] lg:text-[5.6rem]">
            Presença digital com <span className="inline-block pr-2 bg-gradient-to-r from-[#0B1630] via-[#655CF6] to-[#8D80FF] bg-clip-text text-transparent">autoridade</span>, clareza e resultado.
          </h1>
          <p className="mt-6 max-w-[58ch] text-base leading-8 text-[#07111F]/64 sm:mt-8 sm:text-[1.08rem] sm:leading-9">
            A RR Tecnologia e Qualidade une análise de negócio, branding, tráfego, sites, sistemas e soluções com IA para transformar presença digital em uma estrutura sólida de crescimento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:gap-4 sm:flex-row">
            <Button href={whatsappUrl} size="lg" variant="primary" className="w-full sm:w-auto">
              Solicitar diagnóstico <Icon name="arrow" className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#solucoes" size="lg" variant="outline" className="w-full border-[#07111F]/10 bg-white/82 sm:w-auto">
              Ver soluções
            </Button>
          </div>
          <div className="mt-10 grid max-w-4xl gap-4 auto-rows-fr sm:mt-14 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.value} className="flex h-full flex-col rounded-[1.8rem] border border-white/70 bg-white/82 p-6 text-left shadow-[0_18px_45px_rgba(7,17,31,0.07)] backdrop-blur">
                <p className="text-2xl font-black text-[#07111F]">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-[#07111F]/62">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative lg:pt-6">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#4DE2FF]/16 via-white to-[#1488FF]/18 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_36px_100px_rgba(7,17,31,0.14)] backdrop-blur sm:rounded-[2.7rem] sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,226,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(20,136,255,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.9))]" />
            <div className="relative rounded-[1.7rem] border border-[#07111F]/8 bg-white/92 p-5 sm:rounded-[2.2rem] sm:p-7 lg:p-8">
              <div className="flex min-h-[330px] flex-col justify-between gap-5 sm:gap-6">
                <div className="flex flex-col items-start gap-3 border-b border-[#07111F]/8 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#07111F]/52 sm:text-[11px] sm:tracking-[0.34em]">Direção estratégica</span>
                  <span className="hidden h-px flex-1 bg-[#07111F]/8 sm:block" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#07111F]/52 sm:text-[11px] sm:tracking-[0.34em]">Crescimento com clareza</span>
                </div>

                <div className="rounded-[1.6rem] border border-[#07111F]/6 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-5 sm:rounded-[2rem] sm:p-6 lg:p-7">
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#1488FF] sm:text-sm sm:tracking-[0.24em]">A RR entra para organizar, posicionar e elevar a operação digital.</p>
                  <h3 className="mt-4 max-w-[16ch] text-[1.7rem] font-black leading-[1.02] tracking-[-0.045em] text-[#07111F] sm:text-[2rem]">
                    Menos improviso, mais estrutura para a empresa transmitir valor e vender melhor.
                  </h3>
                  <div className="mt-6 space-y-3">
                    {focusAreas.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-[1.2rem] border border-[#07111F]/8 bg-white/80 px-4 py-3 sm:rounded-[1.4rem] sm:py-3.5">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#1488FF]" />
                        <p className="text-sm font-medium leading-6 text-[#07111F]/76">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 auto-rows-fr sm:grid-cols-2">
                  <div className="flex h-full flex-col rounded-[1.6rem] border border-[#07111F]/8 bg-[#F8FBFF] p-5 text-left">
                    <p className="text-sm font-semibold text-[#1488FF]">Posicionamento</p>
                    <p className="mt-2 text-sm leading-6 text-[#07111F]/64">Visual mais sofisticado, narrativa mais clara e percepção de maior valor.</p>
                  </div>
                  <div className="flex h-full flex-col rounded-[1.6rem] border border-[#07111F]/8 bg-[#F8FBFF] p-5 text-left">
                    <p className="text-sm font-semibold text-[#1488FF]">Operação digital</p>
                    <p className="mt-2 text-sm leading-6 text-[#07111F]/64">Marca, páginas, integrações e IA conectadas com objetivo comercial.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="solucoes" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#07111F]/58">
            <span className="h-px w-12 bg-gradient-to-r from-[#1488FF] to-[#4DE2FF]" />
            <span>Soluções da RR</span>
          </div>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">Estrutura digital para marcas que querem parecer maiores e vender melhor.</h2>
          <p className="mx-auto mt-6 max-w-[60ch] text-[1.06rem] font-medium leading-9 text-[#07111F]/58">Cada entrega nasce do entendimento do negócio. O objetivo não é só ficar bonito, mas comunicar valor com clareza e fazer a operação funcionar melhor.</p>
        </div>
        <div className="mt-14 grid gap-5 auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <div className="group flex h-full flex-col rounded-[2rem] border border-white/75 bg-white/84 p-7 text-left shadow-[0_18px_45px_rgba(7,17,31,0.07)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(7,17,31,0.12)]">
                <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-[#E9F8FF] text-[#1488FF] transition group-hover:bg-[#1488FF] group-hover:text-white">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold tracking-[-0.02em]">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#07111F]/62">{service.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="sobre" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#4DE2FF]/14 to-[#1488FF]/16 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.7rem] border border-white/70 bg-white p-4 shadow-[0_30px_90px_rgba(7,17,31,0.12)]">
              <div className="relative overflow-hidden rounded-[2.2rem]">
                <img
                  src={profilePhoto}
                  alt="Foto de Renata, fundadora da RR Tecnologia e Qualidade"
                  className="aspect-[4/5] w-full object-cover object-[center_22%]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    const fallback = event.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/70 to-transparent p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#4DE2FF]">Fundadora</p>
                  <p className="mt-2 text-2xl font-bold">Renata Rangel</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">Tecnologia, automação, qualidade e estratégia digital aplicadas com leitura de negócio.</p>
                </div>
                <div className="hidden h-full w-full flex-col items-center justify-center bg-[#07111F] p-10 text-center text-white" aria-hidden="true">
                  <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-white/10 text-[#4DE2FF]">
                    <Icon name="user" className="h-10 w-10" />
                  </div>
                  <p className="text-2xl font-bold">Sua foto aqui</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#1488FF]">Quem está por trás</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Sou Renata, e criei a RR para elevar a forma como empresas se posicionam e crescem.</h2>
            <div className="mt-6 max-w-[62ch] space-y-5 text-lg leading-8 text-[#07111F]/66">
              <p>
                Atuo com análise de sistemas, desenvolvimento, qualidade, automação de processos e soluções digitais. Na prática, isso significa transformar complexidade em direção clara e execução consistente.
              </p>
              <p>
                A RR nasce com esse olhar: entender o cenário da empresa, organizar sua presença digital, fortalecer sua imagem e aplicar tecnologia de forma útil, elegante e conectada ao resultado.
              </p>
              <p>
                O objetivo não é entregar peças isoladas. É construir uma base digital mais forte para a empresa vender melhor, operar com mais clareza e transmitir mais confiança ao mercado.
              </p>
            </div>
            <div className="mt-8 grid gap-3 auto-rows-fr sm:grid-cols-2">
              {differentials.map((item) => (
                <div key={item} className="flex h-full items-start gap-3 rounded-[1.5rem] border border-white/75 bg-white/84 p-4 shadow-sm">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#1488FF]" />
                  <p className="text-sm font-medium text-[#07111F]/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 auto-rows-fr lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex h-full flex-col rounded-[2.5rem] border border-white/10 bg-[#07111F] p-8 text-white shadow-[0_30px_90px_rgba(7,17,31,0.18)] md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#4DE2FF]">IA com Baseon</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em]">Inteligência artificial com direção estratégica, não só ferramenta.</h2>
            <p className="mt-5 leading-8 text-white/70">
              As soluções de IA são desenvolvidas em parceria com a Baseon. A RR faz a leitura do negócio, desenha o processo e define a aplicação ideal; a Baseon fortalece a entrega técnica de automações e agentes inteligentes.
            </p>
          </div>
          <div className="flex h-full flex-col rounded-[2.5rem] border border-white/75 bg-white/84 p-8 shadow-[0_18px_45px_rgba(7,17,31,0.07)] backdrop-blur md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#1488FF]">Marca com propósito</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em]">A identidade da RR comunica sofisticação, tecnologia e confiança.</h2>
            <p className="mt-5 leading-8 text-[#07111F]/65">
              O visual foi direcionado para uma percepção mais premium: contraste forte, acabamento mais limpo, menos ruído e uma linguagem capaz de posicionar a marca com mais autoridade sem perder proximidade.
            </p>
          </div>
        </div>
      </section>

      <section id="processo" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#1488FF]">Como funciona</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] md:text-5xl">Um processo claro do diagnóstico à evolução.</h2>
          </div>
          <p className="max-w-md text-[1.02rem] font-medium leading-8 text-[#07111F]/58">Cada etapa foi pensada para alinhar percepção de marca, estrutura digital e resultado comercial.</p>
        </div>
        <div className="grid gap-4 auto-rows-fr lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex h-full flex-col rounded-[1.7rem] border border-white/75 bg-white/84 p-6 shadow-[0_18px_45px_rgba(7,17,31,0.07)] backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#1488FF]">0{index + 1}</span>
                <span className="h-px w-10 bg-[#1488FF]/20" />
              </div>
              <p className="mt-5 font-bold leading-7">{step.title}</p>
              <p className="mt-3 text-sm leading-6 text-[#07111F]/58">{step.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111F] p-6 text-center text-white shadow-[0_30px_100px_rgba(7,17,31,0.22)] sm:rounded-[2.7rem] sm:p-8 md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#4DE2FF]">Próximo passo</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">Vamos deixar sua presença digital mais forte, profissional e preparada para crescer?</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">Converse com a RR Tecnologia e Qualidade para estruturar marca, tráfego, tecnologia, processos e IA com mais clareza e sofisticação.</p>
          <div className="mt-9 flex justify-center">
            <Button href={whatsappUrl} size="lg" variant="accent" className="px-8">
              <Icon name="message" className="mr-2 h-5 w-5" /> Falar pelo WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#07111F]/8 px-6 py-8 text-center text-sm text-[#07111F]/52">
        © 2026 RR Tecnologia e Qualidade. Tecnologia inteligente para negócios que querem crescer com mais clareza.
      </footer>
    </main>
  );
}
