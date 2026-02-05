import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const bullets = [
  "Diagnóstico fiscal e rotinas de compliance",
  "Migração de contador guiada (sem dor e sem bagunça)",
  "Relatórios e acompanhamento para decisão",
];

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container-wide mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted-foreground">Santo André / ABC • Desde 1998</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Contabilidade com{" "}
            <span className="gradient-text">Inteligência Fiscal</span>{" "}
            para empresas do ABC.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Pare de administrar no escuro. A gente organiza sua contabilidade, reduz risco fiscal e entrega números que você realmente entende — com suporte humano, rotina clara e zero sustos.
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-medium">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8 py-6"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico de 20 minutos.", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Quero um diagnóstico de 20 min
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base px-8 py-6 border-primary/20 hover:bg-primary/5"
              onClick={() => scrollToSection("#troca")}
            >
              Como funciona a troca de contador
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <strong className="text-foreground">Desde 1998</strong> • Atendimento para empresas (exceto MEI) • Santo André / ABC
          </p>
        </div>
      </div>
    </section>
  );
}
