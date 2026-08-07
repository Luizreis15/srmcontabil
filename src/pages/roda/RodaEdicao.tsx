import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CalendarDays, Monitor, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo } from "@/components/roda/Seo";
import { Reveal } from "@/components/roda/Reveal";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { VideoEdicao } from "@/components/roda/VideoEdicao";
import { EspecialistaCard } from "@/components/roda/EspecialistaCard";
import { ConteudoCard } from "@/components/roda/ConteudoCard";
import { ShareButtons } from "@/components/roda/ShareButtons";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import {
  getEdicao,
  formatarData,
  rotuloStatus,
  proximasEdicoes,
} from "@/data/roda/edicoes";
import { getEspecialista } from "@/data/roda/especialistas";
import { conteudos } from "@/data/roda/conteudos";
import { rodaConfig } from "@/data/roda/config";

const RodaEdicao = () => {
  const { slug = "" } = useParams();
  const edicao = getEdicao(slug);
  const { abrirFormulario } = useFormularioModal();

  if (!edicao) return <Navigate to="/roda-de-conversa/edicoes" replace />;

  const convidados = edicao.convidados
    .map((s) => getEspecialista(s))
    .filter(Boolean);
  const relacionados = conteudos.filter((c) => c.edicaoRelacionada === slug);
  const proxima = proximasEdicoes[0];
  const path = `/roda-de-conversa/${edicao.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Roda de Conversa SMR — ${edicao.tema}`,
    description: edicao.resumo,
    startDate: edicao.dataISO ?? undefined,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      name: edicao.plataforma ?? "Online",
    },
    organizer: {
      "@type": "Organization",
      name: "SMR Assessoria Contábil",
      url: rodaConfig.siteUrl,
    },
    performer: convidados.map((c) => ({ "@type": "Person", name: c!.nome })),
  };

  return (
    <>
      <Seo
        titulo={edicao.seoTitulo}
        descricao={edicao.seoDescricao}
        path={path}
        tipo="article"
        jsonLd={jsonLd}
      />

      <section className="bg-navy-deep text-white px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            Roda de Conversa #
            {edicao.numero ? String(edicao.numero).padStart(2, "0") : "—"} ·{" "}
            {rotuloStatus[edicao.status]}
          </span>
          <h1 className="mt-5 font-display text-3xl md:text-5xl font-extrabold leading-tight">
            {edicao.titulo}
          </h1>
          <p className="mt-5 text-white/85 text-lg leading-relaxed">
            {edicao.descricao}
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-gold" />
              {formatarData(edicao.dataISO, edicao.dataTexto)}
              {edicao.horario ? `, às ${edicao.horario}` : ""}
            </li>
            {edicao.plataforma ? (
              <li className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-gold" />
                {edicao.formato} · {edicao.plataforma}
              </li>
            ) : null}
            {edicao.participantes ? (
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gold" />
                Aproximadamente {edicao.participantes} empresários
              </li>
            ) : null}
          </ul>
        </div>
      </section>

      <section className="roda-section">
        <div className="max-w-4xl mx-auto">
          <VideoEdicao
            edicao={edicao}
            convidado={convidados[0]?.nome}
            url={path}
          />
        </div>
      </section>

      {edicao.aprendizados.length > 0 ? (
        <section className="roda-section bg-sand pt-0 md:pt-0">
          <div className="max-w-5xl mx-auto pt-16">
            <SectionHeading
              etiqueta="Principais aprendizados"
              titulo="O que ficou desta conversa"
              centralizado
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {edicao.aprendizados.map((item, i) => (
                <Reveal key={item.titulo} delay={i * 80}>
                  <div className="roda-card roda-motion-card roda-motion-tilt p-6 h-full">
                    <h3 className="font-display font-bold">{item.titulo}</h3>
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

      {edicao.perguntasFrequentes.length > 0 ? (
        <section className="roda-section">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              etiqueta="Perguntas frequentes"
              titulo="Dúvidas que apareceram na conversa"
            />
            <Accordion type="single" collapsible className="mt-8">
              {edicao.perguntasFrequentes.map((faq) => (
                <AccordionItem key={faq.pergunta} value={faq.pergunta}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ) : null}

      {convidados.length > 0 ? (
        <section className="roda-section pt-0">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              etiqueta="Convidado"
              titulo="Quem participou desta edição"
              className="mb-8"
            />
            <div className="grid gap-6">
              {convidados.map((c) => (
                <EspecialistaCard key={c!.slug} especialista={c!} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {edicao.materiais.length > 0 ? (
        <section className="roda-section pt-0">
          <div className="max-w-4xl mx-auto">
            <SectionHeading etiqueta="Materiais" titulo="Para se aprofundar" />
            <ul className="mt-6 space-y-3">
              {edicao.materiais.map((m) => (
                <li key={m.url}>
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-primary hover:text-gold-ink"
                  >
                    {m.titulo}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="roda-section bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold">
            Sua opinião constrói os próximos encontros
          </h2>
          <p className="mt-4 text-white/85">
            Conte como foi sua experiência nesta edição e ajude a SMR a preparar
            a próxima conversa.
          </p>
          <Button
            size="lg"
            className="mt-7 bg-gold text-gold-foreground hover:bg-gold/90"
            onClick={() =>
              abrirFormulario({
                tipo: "avaliacao",
                edicaoSlug: edicao.slug,
                titulo: `Avaliar: ${edicao.tema}`,
                evento: "feedback_open",
              })
            }
          >
            Avaliar esta edição
          </Button>
        </div>
      </section>

      {relacionados.length > 0 ? (
        <section className="roda-section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              etiqueta="Conteúdos relacionados"
              titulo="Continue a leitura"
            />
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {relacionados.map((c, i) => (
                <Reveal key={c.slug} delay={i * 80}>
                  <ConteudoCard conteudo={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="roda-section pt-0">
        <div className="max-w-4xl mx-auto rounded-3xl bg-sand p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold">
              {proxima ? "Próxima edição" : "A próxima edição pode ser sua"}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {proxima
                ? proxima.tema
                : "Sugira o tema que está impactando a sua empresa agora."}
            </p>
          </div>
          <Button asChild className="shrink-0">
            <Link to="/roda-de-conversa#proximos">
              Ver próximos encontros
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        <div className="max-w-4xl mx-auto mt-8">
          <ShareButtons
            url={path}
            titulo={edicao.seoTitulo}
            contexto={edicao.slug}
          />
        </div>
      </section>
    </>
  );
};

export default RodaEdicao;
