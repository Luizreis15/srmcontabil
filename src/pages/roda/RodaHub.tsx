import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/roda/Seo";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { EscalaPraticaHero } from "@/components/roda/EscalaPraticaHero";
import { EscalaPraticaConteudo } from "@/components/roda/EscalaPraticaConteudo";
import { AcervoEdicoes } from "@/components/roda/AcervoEdicoes";
import { FormSugestaoTema } from "@/components/roda/FormSugestaoTema";
import { rodaConfig } from "@/data/roda/config";
import { getEdicao } from "@/data/roda/edicoes";
import { useRodaEventState } from "@/hooks/useRodaEventState";

const EVENTO_SLUG = "fim-escala-6x1-na-pratica";

const RodaHub = () => {
  const { encerrado, agora } = useRodaEventState();
  const edicao = getEdicao(EVENTO_SLUG, agora);
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
    performer: { "@type": "Person", name: "Dr. Giuliano Tovo Di Ramo" },
  };

  return (
    <div className="roda-legado-page">
      <Seo titulo={edicao.seoTitulo} descricao={edicao.seoDescricao} path={path} jsonLd={jsonLd} imagem={edicao.slug === "fim-escala-6x1-na-pratica" ? `${rodaConfig.siteUrl}/og/roda-fim-escala-6x1.jpg` : undefined} />

      {edicao.dataISO ? <EscalaPraticaHero id="proxima-edicao" encerrado={encerrado} dataISO={edicao.dataISO} /> : null}

      <EscalaPraticaConteudo encerrado={encerrado} />

      <section id="edicoes" className="roda-section scroll-mt-24 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <SectionHeading etiqueta="Acervo" titulo="Edições anteriores" centralizado />
          <div className="mt-8"><AcervoEdicoes /></div>
          <div className="mt-8 text-center">
            <Link to="/roda-de-conversa/edicoes" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Ver todas as edições <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="sugerir-tema" className="roda-section scroll-mt-24 bg-background">
        <div className="mx-auto max-w-2xl">
          <SectionHeading etiqueta="Co-criação" titulo="Sugira o próximo tema" centralizado />
          <div className="mt-8"><FormSugestaoTema onFechar={() => undefined} /></div>
        </div>
      </section>
    </div>
  );
};

export default RodaHub;
