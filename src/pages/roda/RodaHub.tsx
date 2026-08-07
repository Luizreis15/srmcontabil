import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Lightbulb,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/roda/Seo";
import { Reveal } from "@/components/roda/Reveal";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { EspecialistaCard } from "@/components/roda/EspecialistaCard";
import { ConteudoCard } from "@/components/roda/ConteudoCard";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { googleCalendarUrl } from "@/components/roda/calendario";
import { rodaConfig, whatsappUrl } from "@/data/roda/config";
import {
  edicaoMaisRecente,
  proximasEdicoes,
  formatarData,
  rotuloStatus,
} from "@/data/roda/edicoes";
import { especialistas, getEspecialista } from "@/data/roda/especialistas";
import { conteudos } from "@/data/roda/conteudos";
import { trackEvent } from "@/lib/rodaAnalytics";
import heroSueli from "@/assets/roda-hero-sueli.png";

const pilares = [
  {
    icone: Users,
    titulo: "Empresários juntos",
    texto: "Encontros abertos para quem decide, com espaço real para perguntar.",
  },
  {
    icone: Star,
    titulo: "Especialistas convidados",
    texto: "Quem entende do tema explica o que muda na prática.",
  },
  {
    icone: CalendarDays,
    titulo: "Pauta feita por você",
    texto: "Os temas nascem das dúvidas enviadas pelos participantes.",
  },
];

const RodaHub = () => {
  const { abrirFormulario } = useFormularioModal();
  const destaque = edicaoMaisRecente;
  const convidadaDestaque = destaque
    ? getEspecialista(destaque.convidados[0])
    : undefined;

  const abrirAvaliacao = () =>
    abrirFormulario({
      tipo: "avaliacao",
      edicaoSlug: destaque?.slug,
      titulo: "Como foi o encontro para você?",
      descricao: "Dois passos rápidos. Sua resposta orienta a próxima edição.",
      evento: "feedback_open",
    });

  const abrirSugestao = () =>
    abrirFormulario({
      tipo: "sugestao",
      titulo: "Sobre o que precisamos conversar agora?",
      descricao: "Conte o tema e o melhor momento para você participar.",
      evento: "topic_suggestion_open",
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: rodaConfig.nomeProjeto,
    description: rodaConfig.assinatura,
    url: `${rodaConfig.siteUrl}/roda-de-conversa`,
    organizer: {
      "@type": "Organization",
      name: "SMR Assessoria Contábil",
      url: rodaConfig.siteUrl,
    },
  };

  return (
    <>
      <Seo
        titulo="Roda de Conversa SMR | Encontros de conhecimento para empresários"
        descricao="Encontros da SMR Assessoria Contábil com especialistas convidados para traduzir temas complexos em decisões práticas. Sugira o próximo tema."
        path="/roda-de-conversa"
        jsonLd={jsonLd}
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-white min-h-[calc(100vh-4rem)] flex items-center">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(120% 90% at 15% 0%, hsl(209 89% 24%) 0%, hsl(210 90% 12%) 55%, hsl(210 90% 10%) 100%)",
          }}
          aria-hidden
        />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-8 py-8 sm:py-12 md:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-10 items-center">
          <Reveal delay={120} className="order-1 lg:order-2">
            <h1 className="font-display text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              <span className="roda-script text-gold text-[2.25rem] sm:text-6xl md:text-6xl lg:text-7xl block leading-none mb-1">
                Roda de
              </span>
              Conversa SMR
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gold font-semibold">
              {rodaConfig.assinatura}
            </p>
          </Reveal>

          <Reveal className="order-2 lg:order-1">
            <figure className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src={heroSueli}
                alt="Sueli Rocha, da SMR Assessoria Contábil, anfitriã da Roda de Conversa SMR"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, hsl(210 90% 10% / 0.85) 0%, transparent 40%)",
                }}
                aria-hidden
              />
              <figcaption className="absolute bottom-2.5 left-3 right-3 md:bottom-5 md:left-6 md:right-6">
                <span className="block text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gold">
                  Anfitriã
                </span>
                <span className="block font-display text-sm md:text-lg font-bold text-white">
                  Sueli Rocha · SMR Assessoria Contábil
                </span>
              </figcaption>
            </figure>

            <div className="mt-3 md:mt-5 flex flex-col sm:flex-row gap-2 md:gap-3">
              <Button
                size="lg"
                onClick={abrirSugestao}
                className="bg-gold text-gold-foreground hover:bg-gold/90 gap-2"
              >
                <Lightbulb className="w-4 h-4" />
                Sugerir o próximo tema
              </Button>
              {destaque ? (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white gap-2"
                >
                  <Link to={`/roda-de-conversa/${destaque.slug}`}>
                    Ver a última edição
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. O QUE É */}
      <section className="roda-section">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionHeading
              etiqueta="O projeto"
              titulo="Conversas curtas sobre o que muda no seu negócio"
              descricao="Um encontro por vez, um tema por vez — sempre com aplicação prática."
              centralizado
            />
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {pilares.map((pilar, i) => (
              <Reveal key={pilar.titulo} delay={i * 80}>
                <div className="roda-card roda-motion-card roda-motion-tilt p-6 h-full">
                  <pilar.icone className="w-5 h-5 text-gold-ink" />
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {pilar.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ÚLTIMA EDIÇÃO — discreta */}
      {destaque ? (
        <section className="roda-section pt-0">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="roda-card roda-motion-card p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <span className="roda-badge">Última edição</span>
                  <h2 className="mt-3 font-display text-lg sm:text-xl font-bold">
                    {destaque.tema}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formatarData(destaque.dataISO)}
                    {convidadaDestaque ? ` · ${convidadaDestaque.nome}` : ""}
                  </p>
                </div>
                <Button asChild className="gap-2 shrink-0">
                  <Link to={`/roda-de-conversa/${destaque.slug}`}>
                    Assistir à gravação
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* 4. PRÓXIMOS ENCONTROS */}
      <section id="proximos" className="roda-section bg-sand scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionHeading
              etiqueta="Próximos encontros"
              titulo="O que vem por aí"
              centralizado
            />
          </Reveal>

          {proximasEdicoes.length > 0 ? (
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proximasEdicoes.map((edicao, i) => (
                <Reveal key={edicao.slug} delay={i * 80}>
                  <div className="roda-card roda-motion-card roda-motion-tilt p-5 sm:p-6 h-full flex flex-col">
                    <span className="roda-badge self-start">
                      {rotuloStatus[edicao.status]}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold">
                      {edicao.tema}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">
                      {edicao.resumo}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {formatarData(edicao.dataISO, edicao.dataTexto)}
                      {edicao.horario ? ` · ${edicao.horario}` : ""}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          trackEvent("next_event_interest", {
                            edicao: edicao.slug,
                          });
                          abrirFormulario({
                            url: edicao.linkInscricao,
                            titulo: `Quero participar — ${edicao.tema}`,
                            evento: "next_event_interest",
                          });
                        }}
                      >
                        Quero participar
                      </Button>
                      {edicao.dataISO ? (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={googleCalendarUrl(edicao)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Adicionar à agenda
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={80}>
              <div className="mt-8 rounded-3xl border border-dashed border-border bg-background p-8 md:p-10 text-center">
                <h3 className="font-display text-lg md:text-xl font-bold">
                  A próxima data sai em breve.
                </h3>
                <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
                  Receba o convite assim que a agenda for definida.
                </p>
                <Button
                  className="mt-6 gap-2 bg-gold text-gold-foreground hover:bg-gold/90"
                  asChild
                >
                  <a
                    href={whatsappUrl(rodaConfig.mensagensWhatsapp.convites)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("whatsapp_click", { origem: "proximos" })
                    }
                  >
                    <MessageCircle className="w-4 h-4" />
                    Quero receber o convite
                  </a>
                </Button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* 5. PARTICIPE — avaliar e sugerir */}
      <section className="roda-section bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold">
              Você constrói a próxima roda
            </h2>
            <p className="mt-4 text-white/85">
              Dois formulários rápidos, direto aqui no site.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90 gap-2"
                onClick={abrirSugestao}
              >
                <Lightbulb className="w-4 h-4" />
                Sugerir um tema
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={abrirAvaliacao}
              >
                Avaliar o último encontro
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. ESPECIALISTAS E CONTEÚDOS */}
      <section className="roda-section">
        <div className="max-w-7xl mx-auto space-y-14">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeading
                  etiqueta="Especialistas"
                  titulo="Quem conversa com a SMR"
                  className="mb-0"
                />
                <Link
                  to="/especialistas"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
                >
                  Ver todos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {especialistas.slice(0, 2).map((esp, i) => (
                <Reveal key={esp.slug} delay={i * 80}>
                  <EspecialistaCard especialista={esp} />
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeading
                  etiqueta="Conteúdos"
                  titulo="Para decidir melhor"
                  className="mb-0"
                />
                <Link
                  to="/conteudos"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
                >
                  Ver todos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conteudos.slice(0, 3).map((conteudo, i) => (
                <Reveal key={conteudo.slug} delay={i * 80}>
                  <ConteudoCard conteudo={conteudo} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTATO */}
      <section className="roda-section bg-navy-deep text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold">
              Receba os próximos convites
            </h2>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90 gap-2"
                asChild
              >
                <a
                  href={whatsappUrl(rodaConfig.mensagensWhatsapp.convites)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("whatsapp_click", { origem: "comunicacao" })
                  }
                >
                  <MessageCircle className="w-4 h-4" />
                  Receber pelo WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a
                  href={`mailto:${rodaConfig.email}?subject=${encodeURIComponent(
                    "Quero receber os convites da Roda de Conversa SMR"
                  )}`}
                >
                  Receber por e-mail
                </a>
              </Button>
            </div>
            <p className="mt-5 text-xs text-white/80">
              Sem listas automáticas.{" "}
              <Link to="/privacidade" className="underline hover:text-gold">
                Política de privacidade
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default RodaHub;
