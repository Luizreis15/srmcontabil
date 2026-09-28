import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Seo } from "@/components/roda/Seo";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { FormInscricao } from "@/components/roda/FormInscricao";
import { Countdown } from "@/components/roda/Countdown";
import { AcervoEdicoes } from "@/components/roda/AcervoEdicoes";
import { FormSugestaoTema } from "@/components/roda/FormSugestaoTema";
import { VideoEdicao } from "@/components/roda/VideoEdicao";
import { rodaConfig } from "@/data/roda/config";
import { getEdicao } from "@/data/roda/edicoes";
import { useRodaEventState } from "@/hooks/useRodaEventState";
import convite from "@/assets/roda-empresa-legado-convite.jpg.asset.json";

const EVENTO_SLUG = "da-empresa-ao-legado";

const RodaHub = () => {
  const { encerrado } = useRodaEventState();
  const edicao = getEdicao(EVENTO_SLUG);
  if (!edicao) return null;

  const path = "/roda-de-conversa";
  const imagem = `${rodaConfig.siteUrl}${convite.url}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Roda de Conversa SMR — ${edicao.titulo}`,
    description: edicao.seoDescricao,
    startDate: edicao.dataISO,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: encerrado
      ? "https://schema.org/EventCompleted"
      : "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: `${rodaConfig.siteUrl}${path}` },
    organizer: { "@type": "Organization", name: "SMR Assessoria", url: rodaConfig.siteUrl },
    performer: { "@type": "Person", name: "Dra. Maria Fiorini" },
  };

  return (
    <>
      <Seo
        titulo="Da Empresa ao Legado | Roda de Conversa SMR"
        descricao="1º de outubro, às 16h, online. Dra. Maria Fiorini e Sueli Rocha conversam sobre proteção patrimonial e sucessão familiar."
        path={path}
        jsonLd={jsonLd}
      />

      <section id="proxima-edicao" className="scroll-mt-24 bg-navy-deep text-accent-foreground">
        <h1 className="sr-only">Roda de Conversa SMR: Da Empresa ao Legado</h1>
        <div className="mx-auto flex max-w-7xl flex-col items-center px-0 md:px-8 md:pt-5">
          <img
            src={imagem}
            alt="Convite da Roda de Conversa SMR: Da Empresa ao Legado, como proteger o patrimônio e preparar a sucessão familiar. Dra. Maria Fiorini e Sueli Rocha. 1º de outubro, às 16h, online."
            className="block h-auto w-full object-contain md:max-h-[min(85vh,850px)] md:w-auto"
            fetchPriority="high"
          />
          {!encerrado && edicao.dataISO ? (
            <div className="w-full px-4 pb-8 pt-5 md:pb-10">
              <Countdown dataISO={edicao.dataISO} className="mx-auto max-w-xs sm:max-w-md" />
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-cream px-4 py-12 sm:px-5 md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          {encerrado ? (
            <div>
              <div className="mb-6 flex items-center gap-3">
                <PlayCircle className="h-6 w-6 text-gold-ink" />
                <div>
                  <p className="text-xs font-bold uppercase text-gold-ink">Encontro realizado</p>
                  <h2 className="mt-1 text-2xl font-extrabold">Da Empresa ao Legado</h2>
                </div>
              </div>
              <VideoEdicao edicao={edicao} convidado="Dra. Maria Fiorini" url={`/roda-de-conversa/${edicao.slug}`} />
            </div>
          ) : (
            <>
              <SectionHeading etiqueta="1º de outubro · 16h · online" titulo="Participe desta conversa" descricao="Proteção patrimonial e sucessão familiar, com a Dra. Maria Fiorini e Sueli Rocha." />
              <div className="mt-8"><FormInscricao edicaoSlug={edicao.slug} onFechar={() => undefined} compacto /></div>
            </>
          )}
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
          <div className="mt-8"><FormSugestaoTema onFechar={() => undefined} /></div>
        </div>
      </section>
    </>
  );
};

export default RodaHub;
