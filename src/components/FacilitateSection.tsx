import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FacilitateSection() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-accent">
      <div className="container-wide mx-auto">
        <div ref={ref} className="scroll-animate grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent-foreground">
              Queremos <span className="text-primary">facilitar sua vida</span> empresarial
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-4">
              Cuidamos de toda a parte burocrática para que você possa focar no que realmente importa: fazer seu negócio crescer.
            </p>
            <p className="text-accent-foreground/60 mb-8">
              Com suporte humano, rotina clara e zero sustos. Você tem um parceiro contábil de verdade, não apenas um prestador de serviço.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6"
              onClick={() => window.open("https://wa.me/551144360780?text=Olá! Gostaria de saber mais sobre os serviços.", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Falar com um especialista
            </Button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-xl scale-105" />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop"
                alt="Escritório moderno e organizado"
                className="relative w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
