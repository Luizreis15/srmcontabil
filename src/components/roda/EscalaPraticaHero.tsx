import { ArrowDown, CalendarDays, MonitorPlay, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/roda/Countdown";
import giuliano from "@/assets/roda-giuliano.png";

export function EscalaPraticaHero({
  encerrado,
  dataISO,
  id,
}: {
  encerrado: boolean;
  dataISO: string;
  id?: string;
}) {
  return (
    <section id={id} className="roda-legado escala-hero scroll-mt-24">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@500;600;700;800&display=swap"
        />
      </Helmet>

      <div className="escala-bg" aria-hidden="true">
        <div className="escala-grid" />
        <div className="escala-beam escala-beam-1" />
        <div className="escala-beam escala-beam-2" />
        <div className="escala-glow" />
      </div>

      <div className="escala-stage">
        <div className="escala-copy">
          <span className="escala-chip">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            6ª Roda de Conversa SMR
          </span>
          <h1 className="escala-headline">
            O Fim da <span className="escala-6x1">Escala 6x1</span> na Prática
          </h1>
          <p className="escala-sub">O que muda, quais impactos e como se preparar?</p>
        </div>

        <div className="escala-portrait">
          <div className="escala-ring" aria-hidden="true" />
          <span className="escala-bigtype" aria-hidden="true">6x1</span>
          <img
            src={giuliano}
            alt="Dr. Giuliano Tovo Di Ramo, advogado convidado"
            width={545}
            height={960}
            fetchPriority="high"
          />
          <div className="escala-name">
            <strong>Dr. Giuliano Tovo Di Ramo</strong>
            <span>Advogado · Direito do Trabalho Empresarial</span>
          </div>
        </div>

        <div className="escala-action" data-hero-action>
          {encerrado ? (
            <p className="escala-finished">Encontro realizado · Gravação em preparação</p>
          ) : (
            <Button asChild size="lg" className="escala-button">
              <a href="#inscricao">
                Garantir minha vaga gratuita
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          )}
        </div>

        <div className="escala-details">
          <ul className="escala-meta">
            <li><CalendarDays className="h-4 w-4" aria-hidden="true" />Quinta, 22 de outubro · 16h</li>
            <li><MonitorPlay className="h-4 w-4" aria-hidden="true" />Online e gratuito</li>
          </ul>
          {!encerrado ? <Countdown dataISO={dataISO} className="escala-countdown" /> : null}
        </div>
      </div>
    </section>
  );
}
