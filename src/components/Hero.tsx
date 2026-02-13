import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-accent">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-[hsl(210_60%_12%)]" />

      {/* Image - right half with arc clip */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[55%] hidden lg:block"
        style={{
          clipPath: "ellipse(85% 100% at 75% 50%)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=1000&fit=crop&crop=faces"
          alt="Equipe SMR Contábil trabalhando em escritório moderno"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile image - behind with overlay */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=faces"
          alt="Equipe SMR Contábil"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Text content - left side */}
      <div className="relative z-10 flex items-center min-h-[85vh]">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="max-w-xl py-20 md:py-28">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-accent-foreground">
              Contabilidade com{" "}
              <span className="text-primary">Inteligência Fiscal</span>{" "}
              para empresas do ABC.
            </h1>
            <p className="text-lg md:text-xl text-accent-foreground/75 leading-relaxed mb-8 max-w-lg">
              Pare de administrar no escuro. A gente organiza sua contabilidade, reduz risco fiscal e entrega números que você realmente entende.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6 pulse-glow"
              onClick={() =>
                window.open(
                  "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico de 20 minutos.",
                  "_blank"
                )
              }
            >
              <MessageCircle className="w-5 h-5" />
              Falar com o contador
            </Button>
            <p className="mt-6 text-sm text-accent-foreground/50">
              <strong className="text-accent-foreground/80">Desde 1998</strong> • Atendimento para empresas (exceto MEI) • Santo André / ABC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
