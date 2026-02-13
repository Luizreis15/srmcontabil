import { FileSearch, ClipboardList, Settings, CheckSquare, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { number: "01", icon: FileSearch, title: "Diagnóstico rápido", description: "Análise do cenário atual" },
  { number: "02", icon: ClipboardList, title: "Checklist completo", description: "Documentos e responsabilidades" },
  { number: "03", icon: Settings, title: "Transição guiada", description: "Configuração de rotinas" },
  { number: "04", icon: CheckSquare, title: "Primeira competência", description: "Revisada junto com você" },
];

export function SwitchAccountant() {
  return (
    <section id="troca" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="w-72 h-72 md:w-96 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=600&fit=crop&crop=faces"
                alt="Equipe preparando migração contábil"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trocar de contador não deveria parecer um{" "}
              <span className="text-primary">divórcio.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A gente conduz a migração com checklist e prazos — você não fica perdido e sua operação não para.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-3 p-4 rounded-xl bg-secondary border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de migrar de contador com segurança.", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Quero migrar com segurança
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
