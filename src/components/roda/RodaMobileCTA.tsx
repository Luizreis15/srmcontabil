import { useEffect, useState } from "react";
import { Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormularioModal } from "@/components/roda/FormularioProvider";
import { useRodaEventState } from "@/hooks/useRodaEventState";

export function RodaMobileCTA() {
  const { abrirFormulario } = useFormularioModal();
  const { proximaEdicao } = useRodaEventState();
  const [heroActionVisible, setHeroActionVisible] = useState(false);

  useEffect(() => {
    const action = document.querySelector("[data-hero-action]");
    if (!action) {
      setHeroActionVisible(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setHeroActionVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    observer.observe(action);
    return () => observer.disconnect();
  }, [proximaEdicao?.slug]);

  if (!proximaEdicao) return null;

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 bg-background/95 backdrop-blur-md border-t border-border ${heroActionVisible ? "hidden" : ""}`}>
      <Button
        onClick={() =>
          abrirFormulario({
            tipo: "inscricao",
            edicaoSlug: proximaEdicao?.slug,
            titulo: proximaEdicao
              ? `Próximo Encontro — ${proximaEdicao.tema}`
              : "Quero participar do próximo encontro",
            descricao: "Participação gratuita e online.",
            evento: "next_event_interest",
          })
        }
        className={`h-12 w-full font-semibold shadow-card ${["da-empresa-ao-legado", "fim-escala-6x1-na-pratica"].includes(proximaEdicao.slug) ? "rounded-sm bg-primary text-primary-foreground hover:bg-primary/90" : "rounded-full bg-gold text-gold-foreground hover:bg-gold/90"}`}
      >
        <Ticket className="w-5 h-5" />
        Garantir minha vaga
      </Button>
    </div>
  );
}
