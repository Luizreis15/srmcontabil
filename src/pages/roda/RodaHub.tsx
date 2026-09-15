import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Seo } from "@/components/roda/Seo";
import { Reveal } from "@/components/roda/Reveal";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { FormInscricao } from "@/components/roda/FormInscricao";
import { Countdown } from "@/components/roda/Countdown";
import { AcervoEdicoes } from "@/components/roda/AcervoEdicoes";
import { FormSugestaoTema } from "@/components/roda/FormSugestaoTema";
import { VideoEdicao } from "@/components/roda/VideoEdicao";
import { rodaConfig } from "@/data/roda/config";
import { getEdicao } from "@/data/roda/edicoes";
import { useRodaEventState } from "@/hooks/useRodaEventState";
import ogImage from "@/assets/roda-escala-6x1-og-v2.png.asset.json";
import bannerImage from "@/assets/roda-escala-6x1-banner.png";

const EVENTO_SLUG = "escala-6x1-reducao-jornada";

const pauta = [
  ["Em que etapa a proposta está", "O que já foi aprovado, o que falta e o prazo real de adaptação."],
  ["O impacto na folha", "Efeito sobre o valor da hora, sobre a hora extra e sobre a necessidade de recompor equipe."],
  ["A segunda folga e o domingo", "O que significa “preferencialmente aos domingos” e como fica a cobertura do fim de semana."],
  ["Alternativas de jornada", "12x36, meio período e intermitente: o que continua valendo."],
  ["O risco da pejotização", "Por que trocar CLT por CNPJ é especialmente arriscado neste momento."],
  ["Passivo e prazos", "Quanto custa errar a escala e o que fazer nos próximos 30 dias."],
] as const;

const RodaHub = () => {
  const { encerrado } = useRodaEventState();
  const edicao = getEdicao(EVENTO_SLUG);
  if (!edicao) return null;

  const path = "/roda-de-conversa";
  const imagem = `${rodaConfig.siteUrl}${ogImage.url}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Roda de Conversa · Escala 6x1: quem se preparar antes paga menos",
    description: edicao.seoDescricao,
    startDate: edicao.dataISO,
    endDate: "2026-09-17T17:30:00-03:00",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: encerrado
      ? "https://schema.org/EventCompleted"
      : "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: `${rodaConfig.siteUrl}${path}` },
    organizer: { "@type": "Organization", name: "SMR Assessoria", url: rodaConfig.siteUrl },
    performer: { "@type": "Person", name: "Dr. Leandro Jesuíno" },
    image: [imagem],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${rodaConfig.siteUrl}${path}`,
    },
  };

  return (
    <>
      <Seo
        titulo="Roda de Conversa · Escala 6x1: quem se preparar antes paga menos | SMR Assessoria Contábil"
        descricao="17 de setembro, 16h. Com o advogado Dr. Leandro Jesuíno. O que muda na escala, na folha e no domingo da sua empresa com o fim da 6x1. Inscrição gratuita."
        path={path}
        imagem={imagem}
        jsonLd={jsonLd}
      />

      <section id="proxima-edicao" className="relative scroll-mt-24 bg-navy-deep text-accent-foreground">
        <div className="absolute inset-0 roda-event-glow" aria-hidden />
        <div className="relative md:hidden">
          <img
            src={bannerImage}
            alt="Roda de Conversa SMR: Escala 6x1 com Dr. Leandro Jesuíno, dia 17 de setembro às 16h"
            className="block h-auto w-full"
            fetchPriority="high"
          />
          {!encerrado && edicao.dataISO ? (
            <div className="px-4 pb-10 pt-5">
              <Countdown dataISO={edicao.dataISO} />
            </div>
          ) : null}
        </div>
        <div className="relative mx-auto hidden max-w-7xl px-4 pb-16 pt-8 sm:px-5 sm:pt-10 md:block md:px-8 md:pb-40 md:pt-20">
          <Reveal>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-[11px] font-extrabold uppercase text-gold sm:text-xs">4ª edição · Trabalhista</span>
                <span className="text-sm text-accent-foreground/50" aria-hidden>•</span>
                <span className="text-xs font-semibold text-gold sm:text-sm">17 de setembro · 16h</span>
              </div>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] sm:mt-6 sm:text-5xl lg:text-6xl">
                Escala 6x1: quem se preparar<br className="hidden md:block" />{" "}
                <span className="text-gold">antes paga menos.</span>
              </h1>
              <p className="mt-4 text-sm font-semibold text-gold sm:mt-5 sm:text-base">
                Palestrante convidado: Dr. Leandro Jesuíno
              </p>
              <p className="mt-5 hidden max-w-3xl text-base leading-relaxed text-accent-foreground/85 sm:block sm:text-lg">
                A PEC que acaba com a escala 6x1 já passou pela Câmara e pela CCJ do Senado. Falta uma votação. Nesta conversa, o que muda na sua escala, na sua folha e no seu domingo — e o que dá para resolver antes da promulgação.
              </p>
              {!encerrado && edicao.dataISO ? <Countdown dataISO={edicao.dataISO} className="mt-5 sm:mt-8" /> : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-cream px-4 pb-16 sm:px-5 md:px-8 md:pb-24">
        <div className="mx-auto max-w-6xl -translate-y-6 md:-translate-y-24">
          <Reveal>
            <div className="rounded-2xl border border-line bg-card p-5 text-card-foreground shadow-event-card sm:p-7 md:p-9">
              {encerrado ? (
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <PlayCircle className="h-6 w-6 text-gold-ink" />
                    <div>
                      <p className="text-xs font-bold uppercase text-gold-ink">Gravação disponível</p>
                      <h2 className="mt-1 text-2xl font-extrabold">Escala 6x1: quem se preparar antes paga menos</h2>
                    </div>
                  </div>
                  <VideoEdicao edicao={{ ...edicao, status: "realizado" }} convidado="Dr. Leandro Jesuíno" url={`/roda-de-conversa/${edicao.slug}`} />
                </div>
              ) : (
                <>
                  <p className="mb-5 text-center text-xs font-bold uppercase text-gold-ink">Vagas limitadas · Gratuito · Online</p>
                  <FormInscricao edicaoSlug={edicao.slug} onFechar={() => undefined} compacto />
                </>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-2 max-w-7xl md:-mt-10">
          <SectionHeading
            etiqueta="Pauta do encontro"
            titulo="Seis frentes que vão ser abertas"
            descricao="Os temas foram definidos a partir das dúvidas que mais chegaram ao escritório nas últimas semanas."
          />
          <ol className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pauta.map(([titulo, texto], indice) => (
              <li key={titulo} className="roda-motion-card flex h-full flex-col rounded-lg border border-line bg-cream p-6">
                <span className="text-3xl font-extrabold text-gold-ink">{String(indice + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-lg font-extrabold leading-snug">{titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="edicoes" className="roda-section scroll-mt-24 bg-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading etiqueta="Acervo" titulo="Outras conversas para assistir" centralizado />
          <div className="mt-8"><AcervoEdicoes /></div>
          <div className="mt-8 text-center">
            <Link to="/roda-de-conversa/edicoes" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink">
              Ver todas as edições <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="sugerir-tema" className="roda-section scroll-mt-24 bg-cream">
        <div className="mx-auto max-w-2xl">
          <SectionHeading etiqueta="Co-criação" titulo="Sugira o próximo tema" centralizado />
          <div className="roda-card mt-8 p-5 sm:p-7"><FormSugestaoTema onFechar={() => undefined} /></div>
        </div>
      </section>
    </>
  );
};

export default RodaHub;