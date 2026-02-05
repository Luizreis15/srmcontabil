import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center p-8 md:p-16 rounded-2xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quer clareza fiscal e rotina sem susto?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Converse com a SMR e receba um diagnóstico inicial para entender seu cenário e próximos passos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8 py-6"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico.", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Agendar diagnóstico no WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Phone className="w-5 h-5" />
              Falar com um especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
