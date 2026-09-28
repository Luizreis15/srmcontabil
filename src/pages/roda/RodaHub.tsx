import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, ShieldCheck, Waypoints } from "lucide-react";
import { Seo } from "@/components/roda/Seo";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { FormInscricao } from "@/components/roda/FormInscricao";
import { LegadoHero } from "@/components/roda/LegadoHero";
import { AcervoEdicoes } from "@/components/roda/AcervoEdicoes";
import { FormSugestaoTema } from "@/components/roda/FormSugestaoTema";
import { VideoEdicao } from "@/components/roda/VideoEdicao";
import { rodaConfig } from "@/data/roda/config";
import { getEdicao } from "@/data/roda/edicoes";
import { useRodaEventState } from "@/hooks/useRodaEventState";

const EVENTO_SLUG = "da-empresa-ao-legado";

const RodaHub = () => {
  const { encerrado } = useRodaEventState();
  const edicao = getEdicao(EVENTO_SLUG);
  if (!edicao) return null;

  const path = "/roda-de-conversa";
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
    <div className="roda-legado-page">
      <Seo
        titulo="Da Empresa ao Legado | Roda de Conversa SMR"
        descricao="1º de outubro, às 16h, online. Dra. Maria Fiorini e Sueli Rocha conversam sobre proteção patrimonial e sucessão familiar."
        path={path}
        jsonLd={jsonLd}
      />

      {edicao.dataISO ? <LegadoHero id="proxima-edicao" encerrado={encerrado} dataISO={edicao.dataISO} /> : null}

      <section id="inscricao" className="scroll-mt-24 border-t border-border bg-background px-4 py-7 sm:px-5 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase text-primary">5ª edição · 01 de outubro · online</span>
            <h2 className="mt-3 text-4xl leading-none text-foreground sm:text-5xl">Uma conversa para pensar no que fica.</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">Planejamento hoje. Segurança para o patrimônio e continuidade para o futuro.</p>
            <div className="mt-8 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
              <div className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="font-bold">Proteger o patrimônio</h3><p className="mt-1 text-sm text-muted-foreground">Decisões de hoje para dar segurança ao futuro.</p></div></div>
              <div className="flex gap-3"><Waypoints className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="font-bold">Preparar a sucessão</h3><p className="mt-1 text-sm text-muted-foreground">Uma conversa sobre continuidade familiar.</p></div></div>
            </div>
          </div>
          <div className="border-t-4 border-primary bg-secondary p-5 sm:p-8">
          {encerrado ? (
            <div>
              <div className="mb-6 flex items-center gap-3">
                <PlayCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-xs font-bold uppercase text-primary">Encontro realizado</p>
                  <h2 className="mt-1 text-2xl font-extrabold">Da Empresa ao Legado</h2>
                </div>
              </div>
              <VideoEdicao edicao={edicao} convidado="Dra. Maria Fiorini" url={`/roda-de-conversa/${edicao.slug}`} />
            </div>
          ) : (
            <>
              <SectionHeading etiqueta="Inscrições abertas" titulo="Participe desta conversa" descricao="Com a Dra. Maria Fiorini e Sueli Rocha. Gratuito e online." />
              <div className="mt-6"><FormInscricao edicaoSlug={edicao.slug} onFechar={() => undefined} compacto /></div>
            </>
          )}
          </div>
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

      <section id="sugerir-tema" className="roda-section scroll-mt-24 bg-secondary">
        <div className="mx-auto max-w-2xl">
          <SectionHeading etiqueta="Co-criação" titulo="Sugira o próximo tema" centralizado />
          <div className="mt-8"><FormSugestaoTema onFechar={() => undefined} /></div>
        </div>
      </section>
    </div>
  );
};

export default RodaHub;
