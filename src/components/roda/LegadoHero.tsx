import { ArrowDown, CalendarDays, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Countdown } from "@/components/roda/Countdown";
import maria from "@/assets/roda-maria-limpa.png";
import sueli from "@/assets/roda-sueli-limpa.png";

const participantes = [
  { nome: "Dra. Maria Fiorini", papel: "Advogada convidada", foto: maria },
  { nome: "Sueli Rocha", papel: "Anfitriã · SMR Assessoria", foto: sueli },
];

export function LegadoHero({ encerrado, dataISO, id }: { encerrado: boolean; dataISO: string; id?: string }) {
  return (
    <section id={id} className="roda-legado scroll-mt-24 overflow-hidden bg-secondary text-foreground">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="mx-auto grid max-w-7xl lg:min-h-[620px] lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center px-5 pb-5 pt-7 sm:px-8 md:px-12 lg:py-16 xl:px-16">
          <div className="flex items-center gap-3 text-xs font-bold uppercase text-primary">
            <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
            5ª Roda de Conversa SMR
          </div>
          <h1 className="mt-4 text-[clamp(3.75rem,11vw,5.5rem)] leading-[0.82] text-foreground lg:text-[clamp(5rem,7vw,7.25rem)]">
            Da Empresa<br /><span className="text-primary">ao Legado</span>
          </h1>
          <p className="mt-4 max-w-lg text-base font-medium leading-snug text-foreground/80 sm:text-lg lg:text-xl">
            Como proteger o patrimônio e preparar a sucessão familiar.
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-foreground/15 pt-3 text-sm font-semibold sm:text-base lg:mt-8 lg:pt-6">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />01 de outubro · 16h</span>
            <span className="inline-flex items-center gap-2"><MonitorPlay className="h-4 w-4 text-primary" aria-hidden="true" />Online</span>
          </div>

          {!encerrado ? (
            <Button asChild size="lg" className="mt-6 hidden w-fit gap-2 rounded-sm bg-primary px-7 font-bold text-primary-foreground hover:bg-primary/90 md:inline-flex">
              <a href="#inscricao">Garantir minha vaga <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
            </Button>
          ) : (
            <p className="mt-6 text-sm font-semibold text-primary">Encontro realizado · Gravação em preparação</p>
          )}
        </div>

        <div className="relative flex min-h-0 flex-col justify-end bg-navy-deep px-4 pt-4 sm:px-8 lg:px-10 lg:pt-12">
          <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-primary" aria-hidden="true" />
          <div className="mb-4 flex items-center justify-between gap-2 text-xs font-semibold uppercase text-accent-foreground/80 lg:mb-6">
            <span>Uma conversa sobre o futuro</span><span>01 / 10 / 2026</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {participantes.map((pessoa) => (
              <figure key={pessoa.nome} className="min-w-0">
                <div className="aspect-[0.94] overflow-hidden bg-secondary sm:aspect-[0.86] lg:aspect-[0.78]">
                  <img
                    src={pessoa.foto}
                    alt={`Retrato de ${pessoa.nome}`}
                    className="h-full w-full object-cover object-top"
                    fetchPriority="high"
                  />
                </div>
                <figcaption className="min-h-[68px] border-t-4 border-primary py-2 text-accent-foreground sm:min-h-[86px] sm:py-4">
                  <span className="block text-base font-bold leading-tight sm:text-xl">{pessoa.nome}</span>
                  <span className="mt-1 block text-xs text-accent-foreground/75 sm:text-sm">{pessoa.papel}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      {!encerrado ? (
        <div className="border-t border-border bg-background px-5 py-2 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between">
            <p className="hidden text-sm font-semibold text-foreground lg:block">Planejamento hoje. Continuidade para o futuro.</p>
            <Countdown dataISO={dataISO} className="legado-countdown" />
          </div>
        </div>
      ) : null}
    </section>
  );
}