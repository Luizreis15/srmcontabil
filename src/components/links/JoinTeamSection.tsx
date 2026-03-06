import { useState } from "react";
import { Users, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function JoinTeamSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Nome e telefone são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    const text = [
      "Olá! Gostaria de fazer parte da equipe SMR Assessoria.",
      `*Nome:* ${name.trim()}`,
      `*Telefone:* ${phone.trim()}`,
      area.trim() ? `*Área de interesse:* ${area.trim()}` : "",
      message.trim() ? `*Mensagem:* ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/551144360780?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Envie a mensagem para completar sua candidatura!",
    });
  };

  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: "550ms", opacity: 0 }}
    >
      <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider text-center mb-3">
        Faça parte da equipe
      </p>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-5 space-y-3"
      >
        <div className="flex items-center gap-2 mb-1">
          <Users className="w-5 h-5 text-primary" />
          <span className="font-semibold text-sm text-foreground">
            Envie seu currículo
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-snug">
          Preencha seus dados e envie via WhatsApp. Estamos sempre em busca de
          novos talentos!
        </p>

        <Input
          placeholder="Seu nome *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background/60 text-sm"
          required
        />
        <Input
          placeholder="Telefone *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-background/60 text-sm"
          required
        />
        <Input
          placeholder="Área de interesse (ex: Fiscal, RH…)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="bg-background/60 text-sm"
        />
        <Textarea
          placeholder="Mensagem adicional (opcional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-background/60 text-sm min-h-[60px]"
          rows={2}
        />

        <Button type="submit" className="w-full gap-2">
          <Send className="w-4 h-4" />
          Enviar via WhatsApp
        </Button>
      </form>
    </div>
  );
}
