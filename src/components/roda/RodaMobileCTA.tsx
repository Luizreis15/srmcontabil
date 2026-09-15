import { Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { useRodaEventState } from "@/hooks/useRodaEventState";

export function RodaMobileCTA() {
  const { abrirFormulario } = useFormularioModal();
  const { proximaEdicao } = useRodaEventState();

  if (!proximaEdicao) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 bg-background/95 backdrop-blur-md border-t border-border">
      <Button
        onClick={() =>
          abrirFormulario({
            tipo: "inscricao",
            edicaoSlug: proximaEdicao?.slug,
            titulo: proximaEdicao
              ? `Próximo Encontro — ${proximaEdicao.tema}`
              : "Quero participar do próximo encontro",
            descricao: "Com Dr. Leandro Jesuíno. Participação gratuita e online.",
            evento: "next_event_interest",
          })
        }
        className="h-12 w-full rounded-full bg-gold font-semibold text-gold-foreground shadow-card hover:bg-gold/90"
      >
        <Ticket className="w-5 h-5" />
        Garantir minha vaga em 17/09
      </Button>
    </div>
  );
}
