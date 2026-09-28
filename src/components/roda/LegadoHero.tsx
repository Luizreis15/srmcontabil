import { ArrowDown, CalendarDays, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Countdown } from "@/components/roda/Countdown";
import maria from "@/assets/roda-maria-limpa.png";

export function LegadoHero({ encerrado, dataISO, id }: { encerrado: boolean; dataISO: string; id?: string }) {
  return (
    <section id={id} className="roda-legado scroll-mt-24 overflow-hidden bg-navy-deep text-accent-foreground">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="mx-auto grid max-w-7xl lg:min-h-[620px] lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center px-5 pb-6 pt-7 sm:px-8 md:px-12 lg:py-16 xl:px-16">
          <div className="flex items-center gap-3 text-xs font-bold uppercase text-accent-foreground/75">
            <span className="h-0.5 w-8 bg-accent-foreground" aria-hidden="true" />
            5ª Roda de Conversa SMR
          </div>
          <h1 className="mt-4 text-[clamp(3.75rem,11vw,5.5rem)] leading-[0.82] text-accent-foreground lg:text-[clamp(5rem,7vw,7.25rem)]">
            Da Empresa<br /><span className="text-legado-highlight">ao Legado</span>
          </h1>
          <p className="mt-4 max-w-lg text-base font-medium leading-snug text-accent-foreground/85 sm:text-lg lg:text-xl">
            Como proteger o patrimônio e preparar a sucessão familiar.
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-accent-foreground/25 pt-3 text-sm font-semibold sm:text-base lg:mt-8 lg:pt-6">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-legado-highlight" aria-hidden="true" />01 de outubro · 16h</span>
            <span className="inline-flex items-center gap-2"><MonitorPlay className="h-4 w-4 text-legado-highlight" aria-hidden="true" />Online</span>
          </div>

          <p className="mt-5 text-lg font-bold text-accent-foreground sm:text-xl">Dra. Maria Fiorini <span className="block text-sm font-medium text-accent-foreground/75">Advogada convidada</span></p>

          {!encerrado ? (
            <Button asChild size="lg" className="mt-5 w-fit gap-2 rounded-sm bg-primary px-7 font-bold text-primary-foreground hover:bg-primary/90 lg:mt-7">
              <a href="#inscricao">Garantir minha vaga <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
            </Button>
          ) : (
            <p className="mt-6 text-sm font-semibold text-accent-foreground">Encontro realizado · Gravação em preparação</p>
          )}
        </div>

        <div className="relative h-[280px] overflow-hidden bg-secondary sm:h-[420px] lg:h-auto lg:min-h-[620px]">
          <img src={maria} alt="Retrato da Dra. Maria Fiorini" className="h-full w-full object-cover object-[center_20%] lg:absolute lg:inset-0 lg:object-center" fetchPriority="high" />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-navy-deep to-transparent lg:block" aria-hidden="true" />
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