import { Calculator, Users, FileWarning, TrendingUp, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Calculator,
    title: "Assessoria Contábil e Fiscal",
    description: "rotina mensal sem improviso",
  },
  {
    icon: Users,
    title: "Folha e Trabalhista",
    description: "compliance e previsibilidade",
  },
  {
    icon: FileWarning,
    title: "Regularização e Conformidade",
    description: "limpar pendências sem drama",
  },
  {
    icon: TrendingUp,
    title: "Planejamento/Inteligência Fiscal",
    description: "revisar o que está custando caro",
  },
  {
    icon: Building2,
    title: "Abertura/Alterações Empresariais",
    description: "processo guiado, sem \"vai e volta\"",
  },
];

export function ServicesPreview() {
  return (
    <section id="servicos" className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços para empresa — do operacional ao estratégico.
          </h2>
        </div>

        {/* Services List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                <p className="text-primary-foreground/70">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button
          size="lg"
          variant="secondary"
          className="gap-2 text-base px-8 py-6"
          onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
        >
          Ver todos os serviços
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
