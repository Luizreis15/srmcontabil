import { Shield, FileCheck, BarChart3, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    icon: Shield,
    title: "Inteligência Fiscal (na prática)",
    items: [
      "Revisão de enquadramento e rotinas",
      "Alertas e prevenção de risco",
      "Leitura tributária com foco em pagar o justo",
    ],
  },
  {
    icon: FileCheck,
    title: "Assessoria Contábil completa",
    items: [
      "Escrituração, apuração, obrigações",
      "Integração e organização documental",
      "Calendário e acompanhamento",
    ],
  },
  {
    icon: BarChart3,
    title: "Gestão que vira decisão",
    items: [
      "Relatórios claros",
      "Indicadores básicos que importam",
      "Conversa objetiva (sem \"contabilês\")",
    ],
  },
];

export function ValueProposition() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O método é simples:{" "}
            <span className="gradient-text">clareza, rotina e controle fiscal.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Você sabe o que será feito, quando será feito e o que você recebe no fim.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:shadow-card-hover transition-all duration-300 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pillar.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
