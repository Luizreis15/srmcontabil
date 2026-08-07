import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import {
  RodaFormCampo,
  RodaFormPassos,
  RodaFormPrivacidade,
  RodaFormSucesso,
} from "@/components/roda/RodaFormShell";
import { trackEvent } from "@/lib/rodaAnalytics";

const FORMATOS = ["Presencial", "Online", "Tanto faz"] as const;

const schema = z.object({
  tema: z
    .string()
    .trim()
    .min(3, { message: "Descreva o tema" })
    .max(300, { message: "Máximo de 300 caracteres" }),
  motivo: z.string().trim().max(1000, { message: "Máximo de 1000 caracteres" }),
  formato: z.string().trim().max(60),
  melhorMomento: z.string().trim().max(200, { message: "Máximo de 200 caracteres" }),
  nome: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome" })
    .max(120, { message: "Máximo de 120 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "Informe um e-mail válido" })
    .max(255, { message: "Máximo de 255 caracteres" }),
  whatsapp: z.string().trim().max(40, { message: "Máximo de 40 caracteres" }),
});

type Campos = z.infer<typeof schema>;
type Erros = Partial<Record<keyof Campos, string>>;

export function FormSugestaoTema({ onFechar }: { onFechar: () => void }) {
  const [passo, setPasso] = useState(0);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [valores, setValores] = useState<Campos>({
    tema: "",
    motivo: "",
    formato: "",
    melhorMomento: "",
    nome: "",
    email: "",
    whatsapp: "",
  });

  const set = <K extends keyof Campos>(campo: K, valor: Campos[K]) => {
    setValores((v) => ({ ...v, [campo]: valor }));
    setErros((e) => ({ ...e, [campo]: undefined }));
  };

  const validarPasso1 = () => {
    const r = schema
      .pick({ tema: true, motivo: true, formato: true, melhorMomento: true })
      .safeParse(valores);
    if (!r.success) {
      const f = r.error.flatten().fieldErrors;
      setErros({
        tema: f.tema?.[0],
        motivo: f.motivo?.[0],
        melhorMomento: f.melhorMomento?.[0],
      });
      return false;
    }
    return true;
  };

  const enviar = async () => {
    const r = schema.safeParse(valores);
    if (!r.success) {
      const f = r.error.flatten().fieldErrors;
      setErros({ nome: f.nome?.[0], email: f.email?.[0], whatsapp: f.whatsapp?.[0] });
      return;
    }

    setEnviando(true);
    const { error } = await supabase.functions.invoke("roda-formulario", {
      body: { tipo: "sugestao", ...r.data },
    });
    setEnviando(false);

    if (error) {
      toast({
        title: "Não conseguimos enviar sua sugestão",
        description: "Tente novamente em instantes ou fale com a SMR pelo WhatsApp.",
        variant: "destructive",
      });
      return;
    }

    trackEvent("topic_suggestion_open", { enviado: true });
    setEnviado(true);
  };

  if (enviado) {
    return (
      <RodaFormSucesso
        titulo="Tema recebido"
        mensagem="Sua sugestão entra na pauta das próximas edições da Roda de Conversa."
        onFechar={onFechar}
      />
    );
  }

  return (
    <div className="px-6 pb-6 pt-1 space-y-5">
      <RodaFormPassos passo={passo} total={2} />

      {passo === 0 ? (
        <div className="space-y-5">
          <RodaFormCampo label="Qual tema precisa ser discutido?" htmlFor="tema" erro={erros.tema}>
            <Input
              id="tema"
              maxLength={300}
              placeholder="Ex.: impactos da reforma tributária no meu setor"
              value={valores.tema}
              onChange={(e) => set("tema", e.target.value)}
            />
          </RodaFormCampo>

          <RodaFormCampo label="Por que esse assunto importa para a sua empresa?" htmlFor="motivo" erro={erros.motivo} opcional>
            <Textarea
              id="motivo"
              rows={3}
              maxLength={1000}
              value={valores.motivo}
              onChange={(e) => set("motivo", e.target.value)}
            />
          </RodaFormCampo>

          <RodaFormCampo label="Formato preferido" htmlFor="formato" opcional>
            <div id="formato" className="flex flex-wrap gap-2">
              {FORMATOS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => set("formato", valores.formato === f ? "" : f)}
                  aria-pressed={valores.formato === f}
                  className={
                    "px-4 h-10 rounded-xl border text-sm font-semibold transition-colors " +
                    (valores.formato === f
                      ? "border-gold bg-gold text-gold-foreground"
                      : "border-border text-muted-foreground hover:border-gold")
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </RodaFormCampo>

          <RodaFormCampo label="Melhor dia e horário para você" htmlFor="melhorMomento" erro={erros.melhorMomento} opcional>
            <Input
              id="melhorMomento"
              maxLength={200}
              placeholder="Ex.: quartas-feiras, no fim da tarde"
              value={valores.melhorMomento}
              onChange={(e) => set("melhorMomento", e.target.value)}
            />
          </RodaFormCampo>

          <Button className="w-full" onClick={() => validarPasso1() && setPasso(1)}>
            Continuar
          </Button>
        </div>
      ) : (
        <div className="space-y-5">
          <RodaFormCampo label="Seu nome" htmlFor="nome-sug" erro={erros.nome}>
            <Input
              id="nome-sug"
              maxLength={120}
              value={valores.nome}
              onChange={(e) => set("nome", e.target.value)}
            />
          </RodaFormCampo>

          <RodaFormCampo label="Seu e-mail" htmlFor="email-sug" erro={erros.email}>
            <Input
              id="email-sug"
              type="email"
              maxLength={255}
              value={valores.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </RodaFormCampo>

          <RodaFormCampo label="WhatsApp" htmlFor="whatsapp-sug" erro={erros.whatsapp} opcional>
            <Input
              id="whatsapp-sug"
              maxLength={40}
              placeholder="(11) 90000-0000"
              value={valores.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
            />
          </RodaFormCampo>

          <RodaFormPrivacidade />

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setPasso(0)} disabled={enviando}>
              Voltar
            </Button>
            <Button className="flex-1" onClick={enviar} disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar sugestão"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
