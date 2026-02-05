import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vocês atendem MEI?",
    answer: "Não. Nosso foco é empresa (Simples, Presumido, Real). Trabalhamos com estruturas que precisam de acompanhamento fiscal e contábil mais robusto.",
  },
  {
    question: "Atendem apenas Santo André?",
    answer: "Nosso foco é ABC, mas atendemos remoto conforme necessidade. A tecnologia permite acompanhamento eficiente independente da localização.",
  },
  {
    question: "Quanto tempo leva para trocar de contador?",
    answer: "Depende do cenário, mas a migração segue checklist e prazos definidos desde o primeiro contato. Normalmente entre 15 e 30 dias para transição completa.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Atendimento humano, rotina organizada e acompanhamento do que é prioridade. Você tem canais diretos e respostas em horário comercial.",
  },
  {
    question: "Vocês ajudam com regularização de pendências?",
    answer: "Sim. Fazemos diagnóstico e plano de ação para normalizar o fiscal/contábil. Identificamos o que precisa ser resolvido e conduzimos o processo.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas que todo mundo tem{" "}
            <span className="text-muted-foreground">(e poucos respondem direito)</span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
