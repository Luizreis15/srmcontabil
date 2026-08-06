import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/roda/Seo";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { EdicaoCard } from "@/components/roda/EdicaoCard";
import { ConteudoCard } from "@/components/roda/ConteudoCard";
import { ShareButtons } from "@/components/roda/ShareButtons";
import { getEspecialista } from "@/data/roda/especialistas";
import { getEdicao } from "@/data/roda/edicoes";
import { conteudos } from "@/data/roda/conteudos";
import { rodaConfig } from "@/data/roda/config";
import { trackEvent } from "@/lib/rodaAnalytics";

const EspecialistaPerfil = () => {
  const { slug = "" } = useParams();
  const esp = getEspecialista(slug);

  useEffect(() => {
    if (esp) trackEvent("guest_profile_view", { convidado: esp.slug });
  }, [esp]);

  if (!esp) return <Navigate to="/especialistas" replace />;

  const edicoesDoConvidado = esp.edicoes
    .map((s) => getEdicao(s))
    .filter(Boolean);
  const artigos = conteudos.filter((c) => c.convidadoRelacionado === esp.slug);
  const path = `/especialistas/${esp.slug}`;

  const contatos = esp.autorizadoPublicarContatos
    ? [
        esp.email && {
          label: "Entrar em contato",
          href: `mailto:${esp.email}`,
          Icon: Mail,
        },
        esp.whatsapp && {
          label: "WhatsApp profissional",
          href: `https://wa.me/${esp.whatsapp}`,
          Icon: MessageCircle,
        },
        esp.site && { label: "Visitar site", href: esp.site, Icon: Globe },
        esp.linkedin && { label: "LinkedIn", href: esp.linkedin, Icon: Linkedin },
        esp.instagram && {
          label: "Instagram",
          href: esp.instagram,
          Icon: Instagram,
        },
      ].filter(Boolean)
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: esp.nome,
    jobTitle: esp.cargo,
    worksFor: { "@type": "Organization", name: esp.empresa },
    description: esp.minicurriculo,
    url: `${rodaConfig.siteUrl}${path}`,
  };

  return (
    <>
      <Seo
        titulo={esp.seoTitulo}
        descricao={esp.seoDescricao}
        path={path}
        imagem={esp.foto}
        jsonLd={jsonLd}
      />

      <section className="bg-navy-deep text-white px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:items-center">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-white/10 overflow-hidden shrink-0 flex items-center justify-center">
            {esp.foto ? (
              <img
                src={esp.foto}
                alt={`Foto de ${esp.nome}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <UserRound className="w-12 h-12 text-white/80" aria-hidden />
            )}
          </div>
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold">
              {esp.nome}
            </h1>
            <p className="mt-2 text-gold font-semibold">
              {esp.cargo} · {esp.empresa}
            </p>
            <p className="mt-4 text-white/85 leading-relaxed">
              {esp.minicurriculo}
            </p>
          </div>
        </div>
      </section>

      <section className="roda-section">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {esp.areasAtuacao.length > 0 ? (
            <div className="roda-card p-6">
              <h2 className="font-display font-bold">Áreas de atuação</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {esp.areasAtuacao.map((a) => (
                  <li key={a} className="roda-badge">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {esp.temas.length > 0 ? (
            <div className="roda-card p-6">
              <h2 className="font-display font-bold">
                Temas sobre os quais pode contribuir
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {esp.temas.map((t) => (
                  <li key={t}>· {t}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {esp.formacao.length > 0 ? (
            <div className="roda-card p-6">
              <h2 className="font-display font-bold">Formação</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {esp.formacao.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {esp.experiencia.length > 0 ? (
            <div className="roda-card p-6">
              <h2 className="font-display font-bold">Experiência</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {esp.experiencia.map((e) => (
                  <li key={e}>· {e}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          {contatos.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {contatos.map((c) => {
                const item = c as { label: string; href: string; Icon: typeof Mail };
                return (
                  <Button
                    key={item.href}
                    variant="outline"
                    asChild
                    className="gap-2"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent("guest_contact_click", {
                          convidado: esp.slug,
                          canal: item.label,
                        })
                      }
                    >
                      <item.Icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Os contatos profissionais desta convidada serão publicados somente
              após a autorização dela. Para falar sobre a Roda de Conversa,{" "}
              <a
                href={`https://wa.me/${rodaConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                fale com a SMR
              </a>
              .
            </p>
          )}
          <div className="mt-6">
            <ShareButtons
              url={path}
              titulo={esp.seoTitulo}
              contexto={esp.slug}
            />
          </div>
        </div>
      </section>

      {edicoesDoConvidado.length > 0 ? (
        <section className="roda-section bg-sand pt-0 md:pt-0">
          <div className="max-w-7xl mx-auto pt-16">
            <SectionHeading
              etiqueta="Participações"
              titulo="Edições da Roda de Conversa"
            />
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {edicoesDoConvidado.map((e) => (
                <EdicaoCard key={e!.slug} edicao={e!} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {artigos.length > 0 ? (
        <section className="roda-section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              etiqueta="Conteúdos"
              titulo="Materiais relacionados"
            />
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {artigos.map((c) => (
                <ConteudoCard key={c.slug} conteudo={c} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="roda-section pt-0">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/especialistas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
          >
            Ver todos os especialistas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default EspecialistaPerfil;
