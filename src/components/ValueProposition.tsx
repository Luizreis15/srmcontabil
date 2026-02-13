import { Shield, FileCheck, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const advantages = [
  {
    icon: Shield,
    title: "Inteligência Fiscal",
    description: "Revisão de enquadramento, alertas de risco e leitura tributária com foco em pagar o justo.",
  },
  {
    icon: FileCheck,
    title: "Assessoria Completa",
    description: "Escrituração, apuração, obrigações e calendário organizado. Tudo sem improviso.",
  },
  {
    icon: BarChart3,
    title: "Gestão para Decisão",
    description: "Relatórios claros, indicadores que importam e conversa objetiva — sem \"contabilês\".",
  },
];

export function ValueProposition() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div ref={ref} className="scroll-animate">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O método é simples:{" "}
              <span className="text-primary">clareza, rotina e controle fiscal.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Você sabe o que será feito, quando será feito e o que você recebe no fim.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <Card
                key={index}
                className="stagger-child group border-t-4 border-t-primary border-x-border border-b-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
