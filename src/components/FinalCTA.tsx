import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=500&fit=crop"
              alt="Escritório moderno"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/90" />
          </div>
          <div className="relative text-center p-8 md:p-16 text-accent-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quer clareza fiscal e rotina sem susto?
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Converse com a SMR e receba um diagnóstico inicial para entender seu cenário e próximos passos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6"
                onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico.", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Agendar diagnóstico no WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-8 py-6 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
                onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Phone className="w-5 h-5" />
                Falar com um especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
