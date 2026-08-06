import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Lightbulb,
  Mail,
  MessageCircle,
  Monitor,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/roda/Seo";
import { Reveal } from "@/components/roda/Reveal";
import { StatCounter } from "@/components/roda/StatCounter";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { VideoEdicao } from "@/components/roda/VideoEdicao";
import { EdicaoCard } from "@/components/roda/EdicaoCard";
import { EspecialistaCard } from "@/components/roda/EspecialistaCard";
import { ConteudoCard } from "@/components/roda/ConteudoCard";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { googleCalendarUrl, baixarIcs } from "@/components/roda/calendario";
import { rodaConfig, whatsappUrl } from "@/data/roda/config";
import {
  edicaoMaisRecente,
  edicoesRealizadas,
  proximasEdicoes,
  formatarData,
  rotuloStatus,
} from "@/data/roda/edicoes";
import { especialistas, getEspecialista } from "@/data/roda/especialistas";
import { conteudos } from "@/data/roda/conteudos";
import { trackEvent } from "@/lib/rodaAnalytics";

const RodaHub = () => {
  const { abrirFormulario } = useFormularioModal();
  const destaque = edicaoMaisRecente;
  const convidadaDestaque = destaque
    ? getEspecialista(destaque.convidados[0])
    : undefined;

  const abrirAvaliacao = () =>
    abrirFormulario({
      url: destaque?.typeformAvaliacao || rodaConfig.typeforms.avaliacao,
      titulo: "Sua opinião constrói os próximos encontros",
      descricao:
        "Conte como foi sua experiência e ajude a SMR a construir os próximos encontros.",
      evento: "feedback_open",
    });

  const abrirSugestao = () =>
    abrirFormulario({
      url: rodaConfig.typeforms.sugestaoTema,
      titulo: "Sobre o que precisamos conversar agora?",
      descricao:
        "Qual assunto está gerando dúvidas, preocupações ou decisões importantes na sua empresa?",
      evento: "topic_suggestion_open",
    });

  const abrirDisponibilidade = () =>
    abrirFormulario({
      url: rodaConfig.typeforms.disponibilidade,
      titulo: "Qual é o melhor momento para conversarmos?",
      descricao:
        "Dias, horários, formato e frequência ideais para os próximos encontros.",
      evento: "availability_form_open",
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
        titulo="Roda de Conversa SMR | Conhecimento prático para decisões empresariais"
        descricao="Um espaço de atualização e troca de experiências entre empresários e especialistas. Assista à primeira edição sobre Split Payment e sugira o próximo tema."
        path="/roda-de-conversa"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(120% 90% at 15% 0%, hsl(209 89% 24%) 0%, hsl(210 90% 12%) 55%, hsl(210 90% 10%) 100%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              Iniciativa permanente da SMR Assessoria Contábil
            </span>
            <h1 className="mt-6 font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              <span className="roda-script text-gold text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl block leading-none">
                Roda de
              </span>
              Conversa SMR
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gold font-semibold">
              {rodaConfig.assinatura}
            </p>
            <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
              Um espaço criado para empresários que querem compreender as
              mudanças, antecipar impactos e tomar decisões com mais clareza.
            </p>
            <p className="mt-4 text-base text-white/80 max-w-xl">
              50 empresários participaram da nossa primeira conversa. E esse foi
              apenas o começo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                asChild
                className="bg-gold text-gold-foreground hover:bg-gold/90 gap-2"
              >
                <a href="#gravacao">
                  Assistir à primeira edição
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={abrirAvaliacao}
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Avaliar o encontro
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={abrirSugestao}
                className="text-white hover:bg-white/10 hover:text-white gap-2"
              >
                <Lightbulb className="w-4 h-4" />
                Sugerir o próximo tema
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="relative mb-6 rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src={heroSueli.url}
                alt="Sueli Rocha, da SMR Assessoria Contábil, anfitriã da Roda de Conversa SMR"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, hsl(210 90% 10% / 0.85) 0%, transparent 45%)",
                }}
                aria-hidden
              />
              <figcaption className="absolute bottom-4 left-5 right-5">
                <span className="block text-xs font-semibold uppercase tracking-widest text-gold">
                  Anfitriã
                </span>
                <span className="block font-display text-lg font-bold text-white">
                  Sueli Rocha · SMR Assessoria Contábil
                </span>
              </figcaption>
            </figure>
            <div className="rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-sm p-6 sm:p-7">

              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Primeira edição
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold">
                Split Payment
              </h2>
              <p className="mt-3 text-white/85 text-sm leading-relaxed">
                50 empresários conectados em uma conversa prática sobre os
                impactos da Reforma Tributária no caixa e na rotina das
                empresas.
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-white/85">
                  <CalendarDays className="w-4 h-4 text-gold" />
                  6 de agosto de 2026, às 16h
                </div>
                <div className="flex items-center gap-3 text-white/85">
                  <Monitor className="w-4 h-4 text-gold" />
                  Encontro online pelo Google Meet
                </div>
                <div className="flex items-center gap-3 text-white/85">
                  <Users className="w-4 h-4 text-gold" />
                  Convidada: Dra. Daniela Marinho
                </div>
              </dl>
              <Link
                to="/roda-de-conversa/split-payment"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white transition-colors"
              >
                Ver a página da edição
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="roda-section bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatCounter valor={50} rotulo="empresários participantes" />
          <StatCounter valor={1} rotulo="especialista convidada" />
          <StatCounter valor={1} rotulo="tema estratégico" />
          <StatCounter
            valor={null}
            textoAlternativo="Muitas"
            rotulo="perguntas respondidas"
          />
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="roda-section">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <SectionHeading
              etiqueta="O projeto"
              titulo="Uma conversa que continua"
              descricao="A primeira edição da Roda de Conversa SMR reuniu aproximadamente 50 empresários em um encontro marcado por perguntas, interação e troca de experiências."
            />
          </Reveal>
          <Reveal delay={100} className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Falamos sobre Split Payment com a Dra. Daniela Marinho e mostramos
              como as mudanças da Reforma Tributária poderão impactar o caixa e a
              rotina das empresas.
            </p>
            <p>
              Agora, o projeto continua com novos temas, especialistas e conversas
              construídas a partir das necessidades dos empresários parceiros da
              SMR.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CARD DA EDIÇÃO MAIS RECENTE */}
      {destaque ? (
        <section className="roda-section pt-0">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="roda-card roda-motion-card overflow-hidden grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="bg-navy text-white p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Edição mais recente
                  </span>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold">
                    {destaque.tema}
                  </h2>
                  <p className="mt-4 text-white/85 leading-relaxed">
                    {destaque.resumo}
                  </p>
                  <p className="mt-6 text-sm text-white/80">
                    Realização: SMR Assessoria Contábil
                  </p>
                </div>
                <div className="p-6 sm:p-8 md:p-10">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <CalendarDays className="w-4 h-4 text-gold" />
                      Realizado em {formatarData(destaque.dataISO)}
                    </li>
                    <li className="flex items-center gap-3">
                      <Monitor className="w-4 h-4 text-gold" />
                      Encontro online · {destaque.plataforma}
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-gold" />
                      Aproximadamente {destaque.participantes} empresários
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-gold" />
                      Convidada: {convidadaDestaque?.nome}
                    </li>
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="gap-2">
                      <a href="#gravacao">Assistir ao encontro</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="#aprendizados">Ver os principais aprendizados</a>
                    </Button>
                    {convidadaDestaque ? (
                      <Button variant="ghost" asChild className="gap-2">
                        <Link
                          to={`/especialistas/${convidadaDestaque.slug}`}
                          onClick={() =>
                            trackEvent("guest_profile_view", {
                              convidado: convidadaDestaque.slug,
                            })
                          }
                        >
                          Conhecer a convidada
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* VÍDEO */}
      {destaque ? (
        <section id="gravacao" className="roda-section pt-0 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <SectionHeading
                etiqueta="Gravação"
                titulo="Reveja a conversa quando quiser"
                centralizado
                className="mb-10"
              />
              <VideoEdicao
                edicao={destaque}
                convidado={convidadaDestaque?.nome}
                url={`/roda-de-conversa/${destaque.slug}`}
              />
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* APRENDIZADOS */}
      {destaque ? (
        <section id="aprendizados" className="roda-section bg-sand scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionHeading
                etiqueta="Principais aprendizados"
                titulo="O que ficou desta conversa"
                centralizado
              />
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {destaque.aprendizados.map((item, i) => (
                <Reveal key={item.titulo} delay={i * 80}>
                  <div className="roda-card roda-motion-card roda-motion-tilt p-5 sm:p-6 h-full">
                    <h3 className="font-display font-bold text-base">
                      {item.titulo}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ESPECIALISTA */}
      {convidadaDestaque ? (
        <section className="roda-section">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <SectionHeading
                etiqueta="Especialista convidada"
                titulo="Quem esteve nesta conversa"
                className="mb-8"
              />
              <EspecialistaCard especialista={convidadaDestaque} />
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* FEEDBACK */}
      <section className="roda-section bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-extrabold">
              Sua opinião constrói os próximos encontros
            </h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              Queremos que cada edição seja ainda mais útil, prática e próxima da
              realidade da sua empresa. Conte como foi sua experiência e ajude a
              SMR a construir os próximos encontros.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-gold text-gold-foreground hover:bg-gold/90"
              onClick={abrirAvaliacao}
            >
              Avaliar esta edição
            </Button>
            <p className="mt-4 text-xs text-white/80">
              Coletamos apenas o necessário para melhorar os encontros. Seus dados
              não são compartilhados sem consentimento.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRÓXIMOS ENCONTROS */}
      <section id="proximos" className="roda-section scroll-mt-24">
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
                      {edicao.formato ? ` · ${edicao.formato}` : ""}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          trackEvent("next_event_interest", {
                            edicao: edicao.slug,
                          });
                          abrirFormulario({
                            url:
                              edicao.linkInscricao ||
                              rodaConfig.typeforms.inscricao,
                            titulo: `Quero participar — ${edicao.tema}`,
                            evento: "next_event_interest",
                          });
                        }}
                      >
                        Quero participar
                      </Button>
                      {edicao.dataISO ? (
                        <>
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={googleCalendarUrl(edicao)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Google Agenda
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => baixarIcs(edicao)}
                          >
                            Adicionar à agenda
                          </Button>
                        </>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={80}>
              <div className="mt-10 rounded-3xl border border-dashed border-border bg-sand p-10 md:p-14 text-center">
                <h3 className="font-display text-xl md:text-2xl font-bold">
                  O próximo tema pode começar com uma pergunta sua.
                </h3>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Conte para a SMR qual assunto está gerando dúvidas ou impactando
                  sua empresa.
                </p>
                <Button
                  size="lg"
                  className="mt-7 gap-2 bg-gold text-gold-foreground hover:bg-gold/90"
                  onClick={abrirSugestao}
                >
                  <Lightbulb className="w-4 h-4" />
                  Sugerir um tema
                </Button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* SUGESTÃO + DISPONIBILIDADE */}
      <section className="roda-section pt-0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="roda-card roda-motion-card roda-motion-tilt p-6 sm:p-8 h-full">
              <h3 className="font-display text-xl font-bold">
                Ajude a construir a próxima edição
              </h3>
              <p className="mt-3 text-muted-foreground">
                Qual assunto está gerando dúvidas, preocupações ou decisões
                importantes dentro da sua empresa? Conte para a SMR. O próximo
                encontro pode começar com a sua pergunta.
              </p>
              <Button className="mt-6" onClick={abrirSugestao}>
                Enviar minha sugestão
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="roda-card roda-motion-card roda-motion-tilt p-6 sm:p-8 h-full">
              <h3 className="font-display text-xl font-bold">
                Qual é o melhor momento para conversarmos?
              </h3>
              <p className="mt-3 text-muted-foreground">
                Dias da semana, período, faixa de horário, formato e frequência
                ideais. Assim marcamos os próximos encontros no horário que cabe
                na sua rotina.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={abrirDisponibilidade}
              >
                Responder em 1 minuto
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDIÇÕES ANTERIORES */}
      <section className="roda-section bg-sand">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                etiqueta="Arquivo"
                titulo="Edições anteriores"
                className="mb-0"
              />
              <Link
                to="/roda-de-conversa/edicoes"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
              >
                Ver todas as edições
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:-mx-5 sm:px-5 md:mx-0 md:px-0">
            {edicoesRealizadas.map((edicao) => (
              <div
                key={edicao.slug}
                className="min-w-[85%] sm:min-w-[380px] max-w-[420px] snap-start"
              >
                <EdicaoCard edicao={edicao} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALISTAS */}
      <section className="roda-section">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionHeading
              etiqueta="Especialistas"
              titulo="Quem conversa com a SMR"
              descricao="Profissionais convidados para traduzir temas complexos em decisões práticas."
            />
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {especialistas.map((esp, i) => (
              <Reveal key={esp.slug} delay={i * 80}>
                <EspecialistaCard especialista={esp} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEÚDOS */}
      <section className="roda-section bg-sand">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                etiqueta="Conteúdos"
                titulo="Informação que ajuda sua empresa a decidir melhor"
                className="mb-0"
              />
              <Link
                to="/conteudos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
              >
                Ver todos os conteúdos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conteudos.slice(0, 3).map((conteudo, i) => (
              <Reveal key={conteudo.slug} delay={i * 80}>
                <ConteudoCard conteudo={conteudo} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMUNICAÇÃO DIRETA */}
      <section className="roda-section bg-navy-deep text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-extrabold">
              Continue perto da SMR
            </h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              A informação certa pode mudar a próxima decisão da sua empresa.
              Receba os próximos convites, novos conteúdos e atualizações
              importantes para o seu negócio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
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
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white gap-2"
                asChild
              >
                <a
                  href={`mailto:${rodaConfig.email}?subject=${encodeURIComponent(
                    "Quero receber os convites da Roda de Conversa SMR"
                  )}`}
                >
                  <Mail className="w-4 h-4" />
                  Receber por e-mail
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a
                  href={whatsappUrl(rodaConfig.mensagensWhatsapp.falarComSmr)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("whatsapp_click", { origem: "falar-com-smr" })
                  }
                >
                  Falar com a SMR
                </a>
              </Button>
            </div>
            <p className="mt-5 text-xs text-white/80 max-w-xl mx-auto">
              Você não é incluído em nenhuma lista automaticamente. O envio só
              acontece após a sua solicitação e pode ser interrompido quando você
              quiser.{" "}
              <Link to="/privacidade" className="underline hover:text-gold-ink">
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
