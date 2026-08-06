import { Seo } from "@/components/roda/Seo";
import { Reveal } from "@/components/roda/Reveal";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { EdicaoCard } from "@/components/roda/EdicaoCard";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { edicoesRealizadas, proximasEdicoes } from "@/data/roda/edicoes";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { rodaConfig } from "@/data/roda/config";

const RodaEdicoes = () => {
  const { abrirFormulario } = useFormularioModal();

  return (
    <>
      <Seo
        titulo="Edições da Roda de Conversa SMR | Encontros e gravações"
        descricao="Todos os encontros da Roda de Conversa SMR: temas, convidados, gravações e os próximos eventos com empresários do ABC."
        path="/roda-de-conversa/edicoes"
      />

      <section className="bg-navy-deep text-white px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <span className="roda-script text-gold text-3xl">Roda de</span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold">
            Todas as edições
          </h1>
          <p className="mt-4 text-white/75 max-w-2xl">
            Cada encontro traz um tema, um convidado e uma conversa direta sobre
            os assuntos que podem impactar a rotina, o caixa e o futuro das
            empresas.
          </p>
        </div>
      </section>

      <section className="roda-section">
        <div className="max-w-7xl mx-auto">
          <SectionHeading etiqueta="Realizados" titulo="Encontros já realizados" />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {edicoesRealizadas.map((edicao, i) => (
              <Reveal key={edicao.slug} delay={i * 80}>
                <EdicaoCard edicao={edicao} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="roda-section bg-sand pt-0 md:pt-0">
        <div className="max-w-7xl mx-auto pt-16">
          <SectionHeading etiqueta="Agenda" titulo="Próximos encontros" />
          {proximasEdicoes.length > 0 ? (
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proximasEdicoes.map((edicao, i) => (
                <Reveal key={edicao.slug} delay={i * 80}>
                  <EdicaoCard edicao={edicao} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-dashed border-border bg-background p-10 text-center">
              <h3 className="font-display text-xl font-bold">
                O próximo tema pode começar com uma pergunta sua.
              </h3>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Conte para a SMR qual assunto está gerando dúvidas ou impactando
                sua empresa.
              </p>
              <Button
                className="mt-6 gap-2 bg-gold text-gold-foreground hover:bg-gold/90"
                onClick={() =>
                  abrirFormulario({
                    url: rodaConfig.typeforms.sugestaoTema,
                    titulo: "Sobre o que precisamos conversar agora?",
                    evento: "topic_suggestion_open",
                  })
                }
              >
                <Lightbulb className="w-4 h-4" />
                Sugerir um tema
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default RodaEdicoes;
