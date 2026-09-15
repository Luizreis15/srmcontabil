import { useState } from "react";
import { Megaphone, X } from "lucide-react";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { useRodaEventState } from "@/hooks/useRodaEventState";

export function BarraAviso() {
  const [visivel, setVisivel] = useState(true);
  const { abrirFormulario } = useFormularioModal();
  const { proximaEdicao: edicao } = useRodaEventState();

  if (!visivel) return null;

  if (!edicao) {
    return (
      <div className="hidden bg-navy-deep text-xs text-accent-foreground md:block md:text-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:px-5 md:px-8">
          <Megaphone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
          <p className="flex-1">Próxima edição em definição · acompanhe a Roda de Conversa SMR.</p>
          <button onClick={() => setVisivel(false)} aria-label="Fechar aviso" className="shrink-0 p-1 text-accent-foreground/70 hover:text-accent-foreground"><X className="h-4 w-4" /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden bg-navy-deep text-xs text-accent-foreground md:block md:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 py-2 flex items-center gap-3">
        <Megaphone className="w-4 h-4 text-gold shrink-0" aria-hidden />
        <p className="flex flex-1 items-center justify-between gap-3 leading-snug">
          <span>
            <span>Próxima edição: 17 de setembro, 16h · Dr. Leandro Jesuíno — Escala 6x1: quem se preparar antes paga menos.</span>
          </span>
          <button
            onClick={() =>
              abrirFormulario({
                tipo: "inscricao",
                edicaoSlug: edicao.slug,
                titulo: `Próximo Encontro — ${edicao.tema}`,
                descricao: "Com Dr. Leandro Jesuíno. Participação gratuita e online.",
                evento: "next_event_interest",
              })
            }
            className="font-semibold text-gold underline underline-offset-2 hover:text-white transition-colors"
          >
            Inscrever-se grátis
          </button>
        </p>
        <button
          onClick={() => setVisivel(false)}
          aria-label="Fechar aviso"
          className="p-1 text-white/70 hover:text-white transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
