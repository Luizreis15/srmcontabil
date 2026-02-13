import { Zap, DollarSign, Clock, Shield, Smartphone, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Zap, label: "Praticidade" },
  { icon: DollarSign, label: "Economia" },
  { icon: Clock, label: "Agilidade" },
  { icon: Shield, label: "Segurança" },
  { icon: Smartphone, label: "100% Digital" },
  { icon: HeadphonesIcon, label: "Suporte Humano" },
];

export function OnlineSection() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto text-center">
        <div ref={ref} className="scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contabilidade <span className="text-primary">Online</span> com atendimento real
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Tecnologia para simplificar, suporte humano para resolver. O melhor dos dois mundos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            {features.map((feature) => (
              <div key={feature.label} className="stagger-child flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground text-sm">{feature.label}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6 pulse-glow"
            onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Quero uma contabilidade online.", "_blank")}
          >
            Quero uma Contabilidade Online
          </Button>
        </div>
      </div>
    </section>
  );
}
