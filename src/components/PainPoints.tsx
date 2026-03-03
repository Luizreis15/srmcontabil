import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { label: "Assessoria Contábil", value: 100 },
  { label: "Inteligência Fiscal", value: 100 },
  { label: "Folha e Trabalhista", value: 100 },
  { label: "Regularização", value: 100 },
  { label: "Planejamento Tributário", value: 100 },
];

export function PainPoints() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <div ref={ref} className="scroll-animate grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Circular Image */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl scale-105" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&crop=faces"
                alt="Profissionais em reunião de planejamento"
                className="relative w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-xl"
              />
            </div>
          </div>

          {/* Progress Bars */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como <span className="text-primary">Trabalhamos</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Você não precisa de alguém que apenas apure imposto. Você precisa de um parceiro que previna risco, organize rotina e deixe o financeiro previsível.
            </p>

            <div className="space-y-5">
              {services.map((service) => (
                <div key={service.label} className="stagger-child">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{service.label}</span>
                    <span className="text-sm font-bold text-primary">{service.value}%</span>
                  </div>
                  <Progress value={service.value} className="h-3 bg-muted [&>[data-state]]:bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
