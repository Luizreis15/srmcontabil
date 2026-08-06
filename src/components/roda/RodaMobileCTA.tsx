import { Lightbulb } from "lucide-react";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { rodaConfig } from "@/data/roda/config";

export function RodaMobileCTA() {
  const { abrirFormulario } = useFormularioModal();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 bg-background/95 backdrop-blur-md border-t border-border">
      <button
        onClick={() =>
          abrirFormulario({
            url: rodaConfig.typeforms.sugestaoTema,
            titulo: "Sobre o que precisamos conversar agora?",
            descricao:
              "Conte qual assunto está gerando dúvidas ou impactando a sua empresa.",
            evento: "topic_suggestion_open",
          })
        }
        className="w-full rounded-full bg-gold text-gold-foreground font-semibold py-3.5 flex items-center justify-center gap-2 shadow-card"
      >
        <Lightbulb className="w-5 h-5" />
        Sugerir um tema
      </button>
    </div>
  );
}
