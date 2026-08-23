import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import {
  RodaFormCampo,
  RodaFormPrivacidade,
  RodaFormSucesso,
} from "@/components/roda/RodaFormShell";
import { trackEvent } from "@/lib/rodaAnalytics";

const schema = z.object({
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
  whatsapp: z
    .string()
    .trim()
    .min(8, { message: "Informe um WhatsApp com DDD" })
    .max(40, { message: "Máximo de 40 caracteres" }),
  segmento: z.string().trim().max(120, { message: "Máximo de 120 caracteres" }),
});

type Campos = z.infer<typeof schema>;
type Erros = Partial<Record<keyof Campos, string>>;

export function FormInscricao({
  edicaoSlug,
  onFechar,
  compacto,
}: {
  edicaoSlug?: string;
  onFechar: () => void;
  compacto?: boolean;
}) {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [valores, setValores] = useState<Campos>({
    nome: "",
    email: "",
    whatsapp: "",
    segmento: "",
  });

  const set = <K extends keyof Campos>(campo: K, valor: Campos[K]) => {
    setValores((v) => ({ ...v, [campo]: valor }));
    setErros((e) => ({ ...e, [campo]: undefined }));
  };

  const enviar = async (evento: React.FormEvent) => {
    evento.preventDefault();
    const r = schema.safeParse(valores);
    if (!r.success) {
      const f = r.error.flatten().fieldErrors;
      setErros({
        nome: f.nome?.[0],
        email: f.email?.[0],
        whatsapp: f.whatsapp?.[0],
        segmento: f.segmento?.[0],
      });
      return;
    }

    setEnviando(true);
    const { error } = await supabase.functions.invoke("roda-formulario", {
      body: { tipo: "inscricao", edicaoSlug, ...r.data },
    });
    setEnviando(false);

    if (error) {
      toast({
        title: "Não conseguimos concluir sua inscrição",
        description:
          "Tente novamente em instantes ou fale com a SMR pelo WhatsApp.",
        variant: "destructive",
      });
      return;
    }

    trackEvent("next_event_interest", { enviado: true, edicao: edicaoSlug });
    setEnviado(true);
  };

  if (enviado) {
    return (
      <RodaFormSucesso
        titulo="Vaga garantida"
        mensagem="Enviaremos o link do encontro para o seu e-mail e WhatsApp antes da transmissão."
        onFechar={onFechar}
      />
    );
  }

  return (
    <form
      onSubmit={enviar}
      className={compacto ? "space-y-5" : "px-6 pb-6 pt-1 space-y-5"}
    >
      <RodaFormCampo label="Nome" htmlFor="insc-nome" erro={erros.nome}>
        <Input
          id="insc-nome"
          maxLength={120}
          value={valores.nome}
          onChange={(e) => set("nome", e.target.value)}
        />
      </RodaFormCampo>

      <RodaFormCampo label="E-mail" htmlFor="insc-email" erro={erros.email}>
        <Input
          id="insc-email"
          type="email"
          maxLength={255}
          value={valores.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </RodaFormCampo>

      <RodaFormCampo
        label="WhatsApp"
        htmlFor="insc-whatsapp"
        erro={erros.whatsapp}
      >
        <Input
          id="insc-whatsapp"
          maxLength={40}
          placeholder="(11) 90000-0000"
          value={valores.whatsapp}
          onChange={(e) => set("whatsapp", e.target.value)}
        />
      </RodaFormCampo>

      <RodaFormCampo
        label="Segmento da empresa"
        htmlFor="insc-segmento"
        erro={erros.segmento}
        opcional
      >
        <Input
          id="insc-segmento"
          maxLength={120}
          placeholder="Ex.: comércio varejista, serviços, indústria"
          value={valores.segmento}
          onChange={(e) => set("segmento", e.target.value)}
        />
      </RodaFormCampo>

      <RodaFormPrivacidade />

      <Button type="submit" className="w-full" disabled={enviando}>
        {enviando ? "Enviando..." : "Garantir minha vaga gratuita"}
      </Button>
    </form>
  );
}
