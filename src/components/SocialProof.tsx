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
    <section id="sobre" className="section-padding bg-accent text-accent-foreground">
      <div className="container-wide mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não é "marketing". É processo + histórico.
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-accent-foreground/5 border border-accent-foreground/10">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-accent-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <Card key={index} className="bg-accent-foreground/5 border-accent-foreground/10 text-accent-foreground">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-accent-foreground/70">{t.role} • {t.company}</div>
                  <div className="text-sm text-primary font-medium">{t.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Credentials */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-accent-foreground/70">
          {["Registro CRC Ativo", "Certificação Digital", "Sistemas Integrados"].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
