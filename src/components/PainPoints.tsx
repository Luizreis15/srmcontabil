import { AlertTriangle, Clock, Users, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Imposto pago errado",
    description: "e ninguém percebe até virar multa",
  },
  {
    icon: Clock,
    title: "Obrigações acessórias",
    description: "perdeu prazo? o sistema não perdoa",
  },
  {
    icon: Users,
    title: "Folha/eSocial",
    description: "passivo trabalhista não avisa, só chega",
  },
  {
    icon: HelpCircle,
    title: "Números confusos",
    description: "sem clareza, toda decisão é chute",
  },
];

export function PainPoints() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Se sua contabilidade "só entrega guia", isso não é contabilidade.{" "}
            <span className="text-muted-foreground">É sobrevivência.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Você não precisa de alguém que apenas apure imposto. Você precisa de um parceiro que previna risco, organize rotina e deixe o financeiro previsível.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/15 transition-colors">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
