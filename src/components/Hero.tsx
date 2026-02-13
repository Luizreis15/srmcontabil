import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-background">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Contabilidade com{" "}
              <span className="text-primary">Inteligência Fiscal</span>{" "}
              para empresas do ABC.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Pare de administrar no escuro. A gente organiza sua contabilidade, reduz risco fiscal e entrega números que você realmente entende.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico de 20 minutos.", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Falar com o contador
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              <strong className="text-foreground">Desde 1998</strong> • Atendimento para empresas (exceto MEI) • Santo André / ABC
            </p>
          </div>

          {/* Circular Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-80 h-80 md:w-[440px] md:h-[440px]">
              <div className="absolute inset-0 rounded-full bg-primary/10" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&crop=faces"
                alt="Equipe SMR Contábil trabalhando em escritório moderno"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
