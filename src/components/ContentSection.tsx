import { BookOpen, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const trails = [
  {
    title: "Troca de contador sem dor",
    description: "Guia completo para migrar de escritório",
  },
  {
    title: "Rotina fiscal e obrigações sem multa",
    description: "Calendário e boas práticas",
  },
  {
    title: "Impostos: o que você paga e por quê",
    description: "Entenda seu cenário tributário",
  },
];

export function ContentSection() {
  return (
    <section id="conteudos" className="section-padding">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content Trails */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conteúdo útil — sem enrolação e sem "post pra encher blog".
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Guias para reduzir risco fiscal, organizar rotina e tomar decisão.
            </p>

            <div className="space-y-4">
              {trails.map((trail, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-secondary/50 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {trail.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{trail.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Lead Magnet */}
          <div>
            <Card className="bg-primary text-primary-foreground border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Checklist gratuito</h3>
                <p className="text-primary-foreground/80 mb-6">
                  "7 sinais de que sua empresa está pagando imposto errado (e o que revisar)"
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Receber o checklist
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/60 mt-4">
                  Sem spam. Enviamos apenas conteúdo útil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
