import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  MessageSquare,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/roda/Seo";
import { Reveal } from "@/components/roda/Reveal";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { ProximaEdicaoDestaque } from "@/components/roda/ProximaEdicaoDestaque";
import { AcervoEdicoes } from "@/components/roda/AcervoEdicoes";
import { FormSugestaoTema } from "@/components/roda/FormSugestaoTema";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { rodaConfig, whatsappUrl } from "@/data/roda/config";
import { proximaEdicao, formatarData } from "@/data/roda/edicoes";
import { getEspecialista } from "@/data/roda/especialistas";
import { trackEvent } from "@/lib/rodaAnalytics";
import heroSueli from "@/assets/roda-hero-sueli.png";

const comoFunciona = [
  {
    icone: CalendarDays,
    titulo: "Encontros de 15 em 15 dias",
    texto:
      "Temas atualizados conforme as mudanças do governo e do mercado chegam ao dia a dia da empresa.",
  },
  {
    icone: Users,
    titulo: "Aberto ao público",
    texto:
      "Não precisa ser cliente da SMR para participar. Queremos fortalecer o ecossistema empresarial da região.",
  },
  {
    icone: MessageSquare,
    titulo: "Prática e co-criação",
    texto:
      "Você traz a dúvida operacional e nós trazemos o especialista da área para responder ao vivo.",
  },
];

const RodaHub = () => {
  const { abrirFormulario } = useFormularioModal();
  const proxima = proximaEdicao;
  const convidadaProxima = proxima
    ? getEspecialista(proxima.convidados[0])
    : undefined;

  const abrirInscricao = () => {
    trackEvent("next_event_interest", { edicao: proxima?.slug });
    abrirFormulario({
      tipo: "inscricao",
      edicaoSlug: proxima?.slug,
      titulo: proxima
        ? `Garantir minha vaga — ${proxima.tema}`
        : "Quero participar do próximo encontro",
      descricao: "Participação gratuita e online. Vagas limitadas.",
    });
  };

  const jsonLd = [
    {
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
    },
    ...(proxima && proxima.dataISO
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Event",
            name: proxima.tema,
            startDate: proxima.dataISO,
            eventAttendanceMode:
              "https://schema.org/OnlineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            description: proxima.resumo,
            url: `${rodaConfig.siteUrl}/roda-de-conversa/${proxima.slug}`,
            organizer: {
              "@type": "Organization",
              name: "SMR Assessoria Contábil",
              url: rodaConfig.siteUrl,
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
              url: `${rodaConfig.siteUrl}/roda-de-conversa`,
            },
          },
        ]
      : []),
  ];

  return (
    <>
      <Seo
        titulo="Roda de Conversa SMR | Encontros quinzenais gratuitos para empresários"
        descricao="Encontros quinzenais, gratuitos e abertos ao público, da SMR Assessoria com especialistas convidados. Próxima edição: Simples Nacional na Reforma Tributária."
        path="/roda-de-conversa"
        jsonLd={jsonLd}
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-white flex items-center">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(120% 90% at 15% 0%, hsl(209 89% 24%) 0%, hsl(210 90% 12%) 55%, hsl(210 90% 10%) 100%)",
          }}
          aria-hidden
        />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-8 pt-5 pb-8 sm:py-12 md:py-16 grid lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-10 items-center">
          <Reveal className="order-2 lg:order-1">
            <figure className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src={heroSueli}
                alt="Sueli Rocha, da SMR Assessoria, anfitriã da Roda de Conversa SMR"
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
                  Sueli Rocha · SMR Assessoria
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold">
              Encontros quinzenais gratuitos
            </span>

            <h1 className="mt-4 font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              <span className="roda-script text-gold text-4xl sm:text-5xl lg:text-6xl block leading-none mb-1">
                Roda de
              </span>
              Conversa SMR
            </h1>

            <p className="mt-4 text-base sm:text-lg font-semibold text-white">
              O ponto de encontro dos empresários que querem proteger e blindar
              seus negócios de forma estratégica.
            </p>
            <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
              Agora quinzenal e aberta a qualquer empresário, gestor ou parceiro.
              Um tema por encontro, com quem entende do assunto e espaço real
              para perguntar.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={abrirInscricao}
                className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-[0_0_28px_-6px_hsl(var(--gold)/0.7)] transition-all duration-150"
              >
                Garantir minha vaga no próximo encontro
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white gap-2"
              >
                <a href="#edicoes">
                  Ver gravações anteriores
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <p className="mt-5 text-xs sm:text-sm text-white/75">
              Temas sugeridos pela nossa comunidade de clientes e parceiros.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. PRÓXIMA EDIÇÃO */}
      <ProximaEdicaoDestaque />

      {/* 3. COMO FUNCIONA */}
      <section id="como-funciona" className="roda-section bg-sand scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionHeading
              etiqueta="Como funciona"
              titulo="Uma nova edição a cada 15 dias"
              descricao="Um ecossistema de conhecimento dinâmico, construído a partir de dores reais das empresas."
              centralizado
            />
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {comoFunciona.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 80}>
                <div className="roda-card roda-motion-card roda-motion-tilt p-6 h-full transition-all duration-150">
                  <item.icone className="w-5 h-5 text-gold-ink" />
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACERVO */}
      <section id="edicoes" className="roda-section scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionHeading
              etiqueta="Acervo"
              titulo="O que já debatemos por aqui"
              descricao="Acesse gratuitamente os ensinamentos dos encontros anteriores."
              centralizado
            />
          </Reveal>
          <Reveal delay={80}>
            <AcervoEdicoes />
          </Reveal>
          <div className="mt-8 text-center">
            <Link
              to="/roda-de-conversa/edicoes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
            >
              Ver todas as edições
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CO-CREATION HUB */}
      <section id="sugerir-tema" className="roda-section bg-sand scroll-mt-24">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <SectionHeading
              etiqueta="Co-criação"
              titulo="Sua opinião define o próximo tema"
              descricao="Qual é a maior dor contábil, tributária ou trabalhista da sua empresa hoje? Sugira e nós trazemos o especialista."
              centralizado
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="roda-card p-5 sm:p-7">
              <FormSugestaoTema onFechar={() => undefined} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTATO */}
      <section className="roda-section bg-navy-deep text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold">
              Receba os convites das próximas edições
            </h2>
            {proxima ? (
              <p className="mt-3 text-white/85">
                A próxima é {formatarData(proxima.dataISO, proxima.dataTexto)}
                {convidadaProxima ? `, com ${convidadaProxima.nome}` : ""}.
              </p>
            ) : null}
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
