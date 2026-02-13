import { Zap, DollarSign, Clock, Shield, Smartphone, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Zap, label: "Praticidade" },
  { icon: DollarSign, label: "Economia" },
  { icon: Clock, label: "Agilidade" },
  { icon: Shield, label: "Segurança" },
  { icon: Smartphone, label: "100% Digital" },
  { icon: HeadphonesIcon, label: "Suporte Humano" },
];

export function OnlineSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Contabilidade <span className="text-primary">Online</span> com atendimento real
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tecnologia para simplificar, suporte humano para resolver. O melhor dos dois mundos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {features.map((feature) => (
            <div key={feature.label} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-sm">{feature.label}</span>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6"
          onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Quero uma contabilidade online.", "_blank")}
        >
          Quero uma Contabilidade Online
        </Button>
      </div>
    </section>
  );
}
