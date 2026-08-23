import { CalendarDays, CheckCircle2, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/roda/Countdown";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { googleCalendarUrl } from "@/components/roda/calendario";
import { formatarData, proximaEdicao } from "@/data/roda/edicoes";
import { getEspecialista } from "@/data/roda/especialistas";
import { trackEvent } from "@/lib/rodaAnalytics";

export function ProximaEdicaoDestaque() {
  const { abrirFormulario } = useFormularioModal();
  const edicao = proximaEdicao;
  if (!edicao) return null;

  const convidado = getEspecialista(edicao.convidados[0]);

  const inscrever = () => {
    trackEvent("next_event_interest", { edicao: edicao.slug });
    abrirFormulario({
      tipo: "inscricao",
      edicaoSlug: edicao.slug,
      titulo: `Garantir minha vaga — ${edicao.tema}`,
      descricao: "Participação gratuita e online. Vagas limitadas.",
    });
  };

  return (
    <section
      id="proxima-edicao"
      className="roda-section bg-navy-deep text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold">
            <Radio className="w-3.5 h-3.5" />
            Próxima edição · inscrições abertas
          </span>

          <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/90">
            <CalendarDays className="w-4 h-4 text-gold" />
            {formatarData(edicao.dataISO, edicao.dataTexto)}
            {edicao.horario ? ` · ${edicao.horario}` : ""} · 100% online e ao
            vivo
          </p>

          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            {edicao.tema}
          </h2>

          <ul className="mt-6 space-y-3">
            {edicao.aprendizados.map((item) => (
              <li key={item.titulo} className="flex gap-3 text-sm text-white/85">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span>
                  <strong className="font-semibold text-white">
                    {item.titulo}.
                  </strong>{" "}
                  {item.descricao}
                </span>
              </li>
            ))}
          </ul>

          {edicao.dataISO ? (
            <Countdown dataISO={edicao.dataISO} className="mt-7 max-w-md" />
          ) : null}

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              onClick={inscrever}
              className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-[0_0_28px_-6px_hsl(var(--gold)/0.7)]"
            >
              Garantir minha vaga gratuita
            </Button>
            {edicao.dataISO ? (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href={googleCalendarUrl(edicao)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adicionar à agenda
                </a>
              </Button>
            ) : null}
          </div>
        </div>

        {convidado ? (
          <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-6 sm:p-8 text-center">
            <div className="mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gold/50 bg-navy">
              {convidado.foto ? (
                <img
                  src={convidado.foto}
                  alt={`Foto de ${convidado.nome}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="flex w-full h-full items-center justify-center font-display text-2xl font-bold text-gold">
                  {convidado.nome
                    .replace(/^Dra?\.\s*/, "")
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              )}
            </div>
            <span className="mt-5 block text-xs font-semibold uppercase tracking-widest text-gold">
              Convidada desta edição
            </span>
            <h3 className="mt-1 font-display text-xl font-bold text-white">
              {convidado.nome}
            </h3>
            <p className="mt-3 text-sm text-white/85 leading-relaxed">
              {convidado.minicurriculo}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
