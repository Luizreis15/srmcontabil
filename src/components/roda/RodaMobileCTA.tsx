import { Ticket } from "lucide-react";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { proximaEdicao } from "@/data/roda/edicoes";

export function RodaMobileCTA() {
  const { abrirFormulario } = useFormularioModal();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 bg-background/95 backdrop-blur-md border-t border-border">
      <button
        onClick={() =>
          abrirFormulario({
            tipo: "inscricao",
            edicaoSlug: proximaEdicao?.slug,
            titulo: proximaEdicao
              ? `Garantir minha vaga — ${proximaEdicao.tema}`
              : "Quero participar do próximo encontro",
            descricao: "Participação gratuita e online. Vagas limitadas.",
            evento: "next_event_interest",
          })
        }
        className="w-full rounded-full bg-gold text-gold-foreground font-semibold py-3.5 flex items-center justify-center gap-2 shadow-card"
      >
        <Ticket className="w-5 h-5" />
        Garantir minha vaga gratuita
      </button>
    </div>
  );
}
