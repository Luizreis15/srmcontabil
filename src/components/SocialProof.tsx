import { Quote, Award, Building, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Calendar, value: "1998", label: "Desde" },
  { icon: Building, value: "150+", label: "Empresas atendidas" },
  { icon: Award, value: "26", label: "Anos no ABC" },
];

const testimonials = [
  {
    quote: "Organizaram nossa rotina fiscal e parou o susto mensal. Agora sei exatamente o que esperar.",
    name: "Roberto Almeida",
    role: "Diretor",
    company: "Distribuidora ABC",
    location: "Santo André",
  },
  {
    quote: "Migração foi tranquila e o suporte finalmente responde. Não precisei me preocupar com nada.",
    name: "Carla Mendes",
    role: "Sócia",
    company: "Tech Solutions",
    location: "São Bernardo",
  },
  {
    quote: "Entendo meus números pela primeira vez. Relatórios claros e reuniões objetivas.",
    name: "Paulo Santos",
    role: "CEO",
    company: "Indústria Metal ABC",
    location: "São Caetano",
  },
];

export function SocialProof() {
  return (
    <section id="sobre" className="section-padding bg-secondary/50">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não é "marketing".{" "}
            <span className="gradient-text">É processo + histórico.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                  <div className="text-sm text-accent font-medium">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Credentials */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Registro CRC Ativo</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Certificação Digital</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Sistemas Integrados</span>
          </div>
        </div>
      </div>
    </section>
  );
}
