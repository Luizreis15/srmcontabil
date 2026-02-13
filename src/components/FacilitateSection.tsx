import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FacilitateSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Queremos <span className="text-primary">facilitar sua vida</span> empresarial
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Cuidamos de toda a parte burocrática para que você possa focar no que realmente importa: fazer seu negócio crescer.
            </p>
            <p className="text-muted-foreground mb-8">
              Com suporte humano, rotina clara e zero sustos. Você tem um parceiro contábil de verdade, não apenas um prestador de serviço.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços.", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Falar com um especialista
            </Button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop"
                alt="Escritório moderno e organizado"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
