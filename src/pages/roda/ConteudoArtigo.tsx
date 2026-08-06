import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/roda/Seo";
import { ConteudoCard } from "@/components/roda/ConteudoCard";
import { ShareButtons } from "@/components/roda/ShareButtons";
import { SectionHeading } from "@/components/roda/SectionHeading";
import {
  conteudos,
  getConteudo,
  formatarDataConteudo,
} from "@/data/roda/conteudos";
import { getEdicao } from "@/data/roda/edicoes";
import { rodaConfig } from "@/data/roda/config";
import { trackEvent } from "@/lib/rodaAnalytics";

const ConteudoArtigo = () => {
  const { slug = "" } = useParams();
  const artigo = getConteudo(slug);

  useEffect(() => {
    if (artigo) trackEvent("article_view", { artigo: artigo.slug });
  }, [artigo]);

  if (!artigo) return <Navigate to="/conteudos" replace />;

  const path = `/conteudos/${artigo.slug}`;
  const edicao = artigo.edicaoRelacionada
    ? getEdicao(artigo.edicaoRelacionada)
    : null;
  const relacionados = conteudos
    .filter((c) => c.slug !== artigo.slug && c.categoria === artigo.categoria)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artigo.titulo,
    description: artigo.resumo,
    datePublished: artigo.dataISO,
    author: { "@type": "Organization", name: artigo.autor },
    publisher: {
      "@type": "Organization",
      name: "SMR Assessoria Contábil",
      url: rodaConfig.siteUrl,
    },
    mainEntityOfPage: `${rodaConfig.siteUrl}${path}`,
  };

  return (
    <>
      <Seo
        titulo={artigo.seoTitulo}
        descricao={artigo.seoDescricao}
        path={path}
        tipo="article"
        imagem={artigo.imagem}
        jsonLd={jsonLd}
      />

      <article className="roda-section">
        <div className="max-w-3xl mx-auto">
          <span className="roda-badge">{artigo.categoria}</span>
          <h1 className="mt-5 font-display text-3xl md:text-4xl font-extrabold leading-tight">
            {artigo.titulo}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {artigo.autor} · {formatarDataConteudo(artigo.dataISO)} ·{" "}
            {artigo.tempoLeitura}
          </p>
          {artigo.imagem ? (
            <img
              src={artigo.imagem}
              alt={artigo.titulo}
              className="mt-8 rounded-2xl w-full aspect-[16/9] object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : null}

          <div className="mt-8 space-y-5 text-base md:text-lg text-foreground/85 leading-relaxed">
            <p className="text-muted-foreground font-medium">{artigo.resumo}</p>
            {artigo.corpo.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          {edicao ? (
            <div className="mt-10 rounded-2xl bg-sand p-6">
              <p className="text-sm text-muted-foreground">
                Este conteúdo está ligado à edição:
              </p>
              <Link
                to={`/roda-de-conversa/${edicao.slug}`}
                className="mt-2 inline-flex items-center gap-2 font-display font-bold text-primary hover:text-gold-ink"
              >
                {edicao.tema}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : null}

          <div className="mt-8">
            <ShareButtons
              url={path}
              titulo={artigo.seoTitulo}
              contexto={artigo.slug}
            />
          </div>
        </div>
      </article>

      {relacionados.length > 0 ? (
        <section className="roda-section bg-sand pt-0 md:pt-0">
          <div className="max-w-7xl mx-auto pt-16">
            <SectionHeading etiqueta="Continue lendo" titulo="Conteúdos relacionados" />
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {relacionados.map((c) => (
                <ConteudoCard key={c.slug} conteudo={c} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ConteudoArtigo;
