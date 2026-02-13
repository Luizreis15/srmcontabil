import { Progress } from "@/components/ui/progress";

const services = [
  { label: "Assessoria Contábil", value: 95 },
  { label: "Inteligência Fiscal", value: 90 },
  { label: "Folha e Trabalhista", value: 88 },
  { label: "Regularização", value: 85 },
  { label: "Planejamento Tributário", value: 80 },
];

export function PainPoints() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Circular Image */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&crop=faces"
                alt="Profissionais em reunião de planejamento"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
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

            <div className="space-y-6">
              {services.map((service) => (
                <div key={service.label}>
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
