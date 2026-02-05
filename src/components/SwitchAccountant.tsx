import { FileSearch, ClipboardList, Settings, CheckSquare, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Diagnóstico rápido",
    description: "Análise do cenário atual",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Checklist completo",
    description: "Documentos e responsabilidades",
  },
  {
    number: "03",
    icon: Settings,
    title: "Transição guiada",
    description: "Configuração de rotinas",
  },
  {
    number: "04",
    icon: CheckSquare,
    title: "Primeira competência",
    description: "Revisada junto com você",
  },
];

export function SwitchAccountant() {
  return (
    <section id="troca" className="section-padding">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trocar de contador não deveria parecer um{" "}
              <span className="gradient-text">divórcio.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A gente conduz a migração com checklist e prazos — você não fica perdido e sua operação não para.
            </p>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8 py-6"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de migrar de contador com segurança.", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Quero migrar com segurança
            </Button>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-secondary border border-border hover:shadow-card transition-all duration-300"
              >
                <span className="absolute top-4 right-4 text-4xl font-bold text-primary/10">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
