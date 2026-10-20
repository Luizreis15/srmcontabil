import {
  CalendarClock,
  ClipboardCheck,
  FileText,
  Layers,
  Scale,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/roda/Reveal";
import { FormInscricao } from "@/components/roda/FormInscricao";
import { VideoEdicao } from "@/components/roda/VideoEdicao";
import { getEdicao } from "@/data/roda/edicoes";
import { getEspecialista } from "@/data/roda/especialistas";

const SLUG = "fim-escala-6x1-na-pratica";

const muda = [
  { icon: CalendarClock, titulo: "Jornada e folgas", texto: "Como a nova lógica de dias trabalhados e descanso chega à rotina." },
  { icon: Layers, titulo: "Escalas da equipe", texto: "Cobertura de turnos, fins de semana e operação contínua." },
  { icon: FileText, titulo: "Contratos e acordos", texto: "O que revisar em contratos, acordos e políticas internas." },
];

const impactos = [
  { icon: Wallet, titulo: "Folha e custos", texto: "Efeitos no valor da hora, horas extras e orçamento de pessoal." },
  { icon: Users, titulo: "Equipe e contratação", texto: "Necessidade de recompor times sem perder produtividade." },
  { icon: Scale, titulo: "Risco trabalhista", texto: "Como evitar passivo com escalas mal ajustadas." },
];

const passos = [
  "Mapear as escalas atuais",
  "Simular custos na folha",
  "Revisar contratos e acordos",
  "Planejar a transição com antecedência",
];

export function EscalaPraticaConteudo({ encerrado }: { encerrado: boolean }) {
  const edicao = getEdicao(SLUG);
  const convidado = getEspecialista("giuliano-di-ramo");
  if (!edicao) return null;

  return (
    <>
      <section className="escala-section bg-background">
        <div className="mx-auto max-w-6xl">
          <p className="escala-eyebrow">O que muda</p>
          <h2 className="escala-h2">Menos teoria. Mais decisão para a sua empresa.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {muda.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 90}>
                <article className="escala-card roda-motion-card h-full">
                  <c.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-lg">{c.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="escala-section escala-dark">
        <div className="mx-auto max-w-6xl">
          <p className="escala-eyebrow escala-eyebrow-light">Quais impactos</p>
          <h2 className="escala-h2">Onde a mudança aparece primeiro.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {impactos.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 90}>
                <article className="escala-glass h-full">
                  <c.icon className="h-6 w-6" aria-hidden="true" />
                  <h3 className="mt-4 text-lg">{c.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">{c.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="escala-section bg-secondary">
        <div className="mx-auto max-w-6xl">
          <p className="escala-eyebrow">Como se preparar</p>
          <h2 className="escala-h2">Quatro passos para não decidir no susto.</h2>
          <ol className="escala-steps mt-8">
            {passos.map((p, i) => (
              <Reveal key={p} delay={i * 80}>
                <li className="escala-step">
                  <span className="escala-step-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-semibold">{p}</span>
                  {i === passos.length - 1 ? <ClipboardCheck className="ml-auto h-5 w-5 text-primary" aria-hidden="true" /> : <Workflow className="ml-auto h-5 w-5 text-primary/50" aria-hidden="true" />}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {convidado ? (
        <section className="escala-section bg-background">
          <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div className="escala-guest-photo">
              <img src={convidado.foto ?? ""} alt={`Foto de ${convidado.nome}`} loading="lazy" />
            </div>
            <div>
              <p className="escala-eyebrow">Convidado</p>
              <h2 className="escala-h2">{convidado.nome}</h2>
              <p className="mt-2 text-sm font-semibold text-primary">{convidado.cargo} · {convidado.empresa}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{convidado.minicurriculo}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                {convidado.formacao.slice(0, 3).map((f) => <li key={f}>— {f}</li>)}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <section id="inscricao" className="escala-section escala-form-wrap scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="escala-eyebrow escala-eyebrow-light">{encerrado ? "Encontro realizado" : "Inscrições abertas"}</p>
            <h2 className="escala-h2">{encerrado ? "A gravação está a caminho." : "Garanta sua vaga para 22 de outubro."}</h2>
            <p className="mt-4 max-w-md opacity-80">Quinta-feira, às 16h. Online e gratuito, com espaço para perguntas ao Dr. Giuliano.</p>
          </div>
          <div className="escala-form-card">
            {encerrado ? (
              <VideoEdicao edicao={edicao} convidado={convidado?.nome} url={`/roda-de-conversa/${SLUG}`} />
            ) : (
              <FormInscricao edicaoSlug={SLUG} onFechar={() => undefined} compacto />
            )}
          </div>
        </div>
      </section>

      <section className="escala-section bg-background">
        <div className="mx-auto max-w-3xl">
          <p className="escala-eyebrow">Perguntas frequentes</p>
          <h2 className="escala-h2">Antes de se inscrever</h2>
          <Accordion type="single" collapsible className="mt-6">
            {edicao.perguntasFrequentes.map((faq) => (
              <AccordionItem key={faq.pergunta} value={faq.pergunta}>
                <AccordionTrigger className="text-left font-semibold">{faq.pergunta}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
