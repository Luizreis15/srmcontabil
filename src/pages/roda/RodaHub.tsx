import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ExternalLink, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Seo } from "@/components/roda/Seo";
import { Reveal } from "@/components/roda/Reveal";
import { SectionHeading } from "@/components/roda/SectionHeading";
import { FormInscricao } from "@/components/roda/FormInscricao";
import { AcervoEdicoes } from "@/components/roda/AcervoEdicoes";
import { FormSugestaoTema } from "@/components/roda/FormSugestaoTema";
import { rodaConfig } from "@/data/roda/config";
import { proximaEdicao } from "@/data/roda/edicoes";

const videoId = "IVex-RRcP0E";
const youtubeUrl = `https://youtu.be/${videoId}?feature=shared`;

const destaques = [
  {
    titulo: "Proteção Constitucional",
    texto:
      "O tratamento jurídico diferenciado para micro e pequenas empresas (artigos 170 e 179) precisa ser defendido durante a transição.",
  },
  {
    titulo: "Simples Tradicional vs. Híbrido",
    texto:
      "No tradicional, o imposto vai na guia DAS, com crédito limitado. No híbrido, IBS e CBS são recolhidos por fora, com crédito integral para o cliente B2B.",
  },
  {
    titulo: "O Dilema do Preço",
    texto:
      "Optar pelo modelo híbrido gera aumento imediato na carga tributária da empresa e exige revisão urgente de precificação.",
  },
  {
    titulo: "Setor de Serviços",
    texto:
      "É um dos mais impactados, pois a folha de pagamento não gera créditos tributários para abater no IBS e na CBS.",
  },
  {
    titulo: "Prazos Críticos",
    texto:
      "A opção pelo regime híbrido ocorre de 1º a 30 de setembro, com cancelamento possível até 30 de novembro.",
  },
];

const RodaHub = () => {
  const proxima = proximaEdicao;

  return (
    <>
      <Seo
        titulo="Simples Nacional e Reforma Tributária | Roda SMR"
        descricao="Assista à Roda de Conversa SMR sobre Simples Nacional e Reforma Tributária e inscreva-se no próximo encontro."
        path="/roda-de-conversa"
      />

      <section className="bg-navy-deep text-white px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex rounded-full border border-gold/30 bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
              Gravação disponível
            </span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Roda de Conversa: Simples Nacional e a Reforma Tributária
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              Perdeu o evento ao vivo? Assista à gravação completa, confira os principais destaques discutidos pelos nossos especialistas e garanta sua vaga para a próxima edição.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="roda-section bg-background">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-accent shadow-card-hover">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                title="Roda de Conversas: Simples Nacional e a Reforma Tributária"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="mt-5 text-center">
              <Button variant="outline" asChild className="gap-2">
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Assistir diretamente no YouTube
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="roda-section bg-sand">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Tabs defaultValue="destaques" className="w-full">
              <TabsList className="grid h-auto w-full grid-cols-2 gap-1 p-1">
                <TabsTrigger value="destaques" className="min-h-11 gap-2 whitespace-normal px-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Destaques rápidos
                </TabsTrigger>
                <TabsTrigger value="resumo" className="min-h-11 gap-2 whitespace-normal px-2">
                  <ListChecks className="h-4 w-4 shrink-0" />
                  Resumo estruturado
                </TabsTrigger>
              </TabsList>

              <TabsContent value="destaques" className="mt-6">
                <ul className="grid gap-4 md:grid-cols-2">
                  {destaques.map((item) => (
                    <li key={item.titulo} className="roda-card p-5">
                      <div className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink" />
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          <strong className="text-foreground">{item.titulo}:</strong>{" "}
                          {item.texto}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="resumo" className="mt-6 space-y-4">
                <article className="roda-card p-5 sm:p-6">
                  <h2 className="font-display text-lg font-bold">Contexto geral</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A Reforma Tributária implementa o <strong className="text-foreground">IVA Dual</strong>, composto por <strong className="text-foreground">IBS</strong> e <strong className="text-foreground">CBS</strong>. Essa mudança impacta diretamente as empresas do Simples Nacional que estão no meio da cadeia produtiva.
                  </p>
                </article>
                <article className="roda-card p-5 sm:p-6">
                  <h2 className="font-display text-lg font-bold">Tomada de decisão</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Para vendas ao consumidor final (B2C), o cenário mapeado favorece o <strong className="text-foreground">Simples Tradicional</strong>. Para fornecedores de empresas no Lucro Real (B2B), haverá pressão para migrar ao <strong className="text-foreground">Simples Híbrido</strong> e permitir créditos integrais.
                  </p>
                </article>
                <article className="roda-card p-5 sm:p-6">
                  <h2 className="font-display text-lg font-bold">Checklist de sobrevivência</h2>
                  <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <li><strong className="text-foreground">1. Mapeamento:</strong> faça um diagnóstico minucioso dos clientes e fornecedores junto ao seu contador.</li>
                    <li><strong className="text-foreground">2. Simulação:</strong> calcule o impacto financeiro com base nas alíquotas previstas.</li>
                    <li><strong className="text-foreground">3. Gestão e ERP:</strong> organize o fluxo de caixa corporativo e separe totalmente contas físicas e jurídicas, antecipando o futuro Split Payment.</li>
                  </ol>
                </article>
              </TabsContent>
            </Tabs>
          </Reveal>
        </div>
      </section>

      <section id="proxima-edicao" className="roda-section bg-navy-deep text-white scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase text-gold">Próximo encontro</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              Impactos da Reforma na Área Trabalhista
            </h2>
            <p className="mt-3 font-semibold text-gold">Palestrante convidado: Dr. Juliano</p>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              Entenda os desdobramentos práticos da transição tributária nas relações entre empregadores e colaboradores, e saiba como blindar juridicamente o seu negócio.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-xl border border-white/15 bg-background p-5 text-foreground shadow-card sm:p-7">
              <FormInscricao edicaoSlug={proxima?.slug} onFechar={() => undefined} compacto />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="edicoes" className="roda-section scroll-mt-24">
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

      <section id="sugerir-tema" className="roda-section bg-sand scroll-mt-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading etiqueta="Co-criação" titulo="Sugira o próximo tema" centralizado />
          <div className="roda-card mt-8 p-5 sm:p-7"><FormSugestaoTema onFechar={() => undefined} /></div>
        </div>
      </section>
    </>
  );
};

export default RodaHub;