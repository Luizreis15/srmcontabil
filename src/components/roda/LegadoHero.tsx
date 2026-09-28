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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="legado-hero-stage">
        <div className="legado-hero-copy">
          <p className="legado-edition"><span aria-hidden="true" className="legado-edition-line" />5ª RODA DE CONVERSA SMR</p>
          <h1 className="legado-headline">Da Empresa <span>ao Legado<span className="legado-headline-dot">.</span></span></h1>
          <p className="legado-subheadline">Como proteger o patrimônio e preparar a sucessão familiar.</p>
        </div>

        <div className="legado-portrait">
          <div className="legado-portrait-shard" aria-hidden="true" />
          <img src={maria} alt="Retrato da Dra. Maria Fiorini" fetchPriority="high" />
          <span className="legado-portrait-edge" aria-hidden="true" />
        </div>

        <div className="legado-action">
          {!encerrado ? (
            <Button asChild size="lg" className="legado-hero-button group h-12 w-full justify-between rounded-sm px-6 text-sm font-bold text-primary-foreground sm:w-fit sm:min-w-[265px]">
              <a href="#inscricao">Garantir minha vaga <ArrowDown className="transition-transform group-hover:translate-y-1" aria-hidden="true" /></a>
            </Button>
          ) : (
            <p className="legado-finished">Encontro realizado · Gravação em preparação</p>
          )}
        </div>

        <div className="legado-event-details">
          <div className="legado-speaker"><span>COM A CONVIDADA</span><strong>Dra. Maria Fiorini</strong><small>Advogada</small></div>
          <div className="legado-event-meta">
            <span><CalendarDays className="h-4 w-4" aria-hidden="true" />01 de outubro · 16h</span>
            <span><MonitorPlay className="h-4 w-4" aria-hidden="true" />Online</span>
          </div>
          {!encerrado ? <Countdown dataISO={dataISO} className="legado-countdown" /> : null}
        </div>
      </div>
    </section>
  );
}
