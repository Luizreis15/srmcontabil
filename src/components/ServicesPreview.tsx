import { Calculator, Users, FileWarning, TrendingUp, Building2, ClipboardCheck, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Calculator,
    title: "Assessoria Contábil e Fiscal",
    description: "Rotina mensal sem improviso, com escrituração e apuração completas.",
  },
  {
    icon: Users,
    title: "Folha e Trabalhista",
    description: "Compliance e previsibilidade para sua equipe e eSocial.",
  },
  {
    icon: FileWarning,
    title: "Regularização e Conformidade",
    description: "Limpar pendências sem drama, com diagnóstico e plano de ação.",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Fiscal",
    description: "Revisar o que está custando caro e encontrar oportunidades.",
  },
  {
    icon: Building2,
    title: "Abertura e Alterações",
    description: "Processo guiado, sem \"vai e volta\" na burocracia.",
  },
  {
    icon: ClipboardCheck,
    title: "Obrigações Acessórias",
    description: "Controle de prazos e entregas sem risco de multa.",
  },
];

export function ServicesPreview() {
  const ref = useScrollAnimation();

  return (
    <section id="servicos" className="section-padding bg-accent">
      <div className="container-wide mx-auto">
        <div ref={ref} className="scroll-animate">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent-foreground">
              Serviços para empresa — do <span className="text-primary">operacional ao estratégico</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className="stagger-child group bg-card border-0 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <button className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leia mais <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6"
              onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver todos os serviços
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
