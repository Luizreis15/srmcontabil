import { useState } from "react";
import { z } from "zod";
import { CalendarPlus, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import {
  RodaFormCampo,
  RodaFormPrivacidade,
} from "@/components/roda/RodaFormShell";
import { trackEvent } from "@/lib/rodaAnalytics";
import { baixarIcs } from "@/components/roda/calendario";
import { getEdicao } from "@/data/roda/edicoes";
import { rodaConfig } from "@/data/roda/config";

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
    .refine((valor) => valor.replace(/\D/g, "").length === 11, {
      message: "Informe um WhatsApp com DDD",
    }),
  empresa: z
    .string()
    .trim()
    .min(2, { message: "Informe o nome da empresa" })
    .max(120, { message: "Máximo de 120 caracteres" }),
});

type Campos = z.infer<typeof schema>;
type Erros = Partial<Record<keyof Campos, string>>;

const mascararTelefone = (valor: string) => {
  const numeros = valor.replace(/\D/g, "").slice(0, 11);
  if (numeros.length <= 2) return numeros.replace(/^(\d{0,2})/, "($1");
  if (numeros.length <= 7) return numeros.replace(/^(\d{2})(\d+)/, "($1) $2");
  return numeros.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
};

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
  const [erroEnvio, setErroEnvio] = useState("");
  const [valores, setValores] = useState<Campos>({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
  });

  const set = <K extends keyof Campos>(campo: K, valor: Campos[K]) => {
    setValores((v) => ({ ...v, [campo]: valor }));
    setErros((e) => ({ ...e, [campo]: undefined }));
  };

  const validarCampo = (campo: keyof Campos) => {
    if (campo !== "email" && campo !== "whatsapp") return;
    const resultado = schema.shape[campo].safeParse(valores[campo]);
    setErros((atuais) => ({
      ...atuais,
      [campo]: resultado.success ? undefined : resultado.error.issues[0]?.message,
    }));
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
        empresa: f.empresa?.[0],
      });
      return;
    }

    setErroEnvio("");
    setEnviando(true);
    const { error } = await supabase.functions.invoke("roda-formulario", {
      body: {
        tipo: "inscricao",
        edicaoSlug,
        nome: r.data.nome,
        email: r.data.email,
        whatsapp: r.data.whatsapp,
        segmento: r.data.empresa,
      },
    });
    setEnviando(false);

    if (error) {
      setErroEnvio("Não conseguimos concluir agora. Revise os dados e tente novamente.");
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
    const edicao = edicaoSlug ? getEdicao(edicaoSlug) : undefined;
    const compartilhar = () => {
      const texto = `Vou participar da Roda de Conversa SMR sobre Escala 6x1, dia 17/09 às 16h. ${rodaConfig.siteUrl}/roda-de-conversa`;
      window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
    };
    return (
      <div className="flex min-h-72 flex-col items-center justify-center px-4 text-center" role="status">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-ink">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold">Inscrição confirmada</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Você vai receber o link de acesso no e-mail e no WhatsApp cadastrados. Até dia 17, às 16h.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {edicao ? <Button type="button" variant="outline" onClick={() => baixarIcs(edicao)}><CalendarPlus />Adicionar à agenda</Button> : null}
          <Button type="button" variant="outline" onClick={compartilhar}><MessageCircle />Compartilhar no WhatsApp</Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={enviar}
      className={
        compacto
          ? "grid grid-cols-1 gap-5 md:grid-cols-2"
          : "px-6 pb-6 pt-1 space-y-5"
      }
    >
      <RodaFormCampo label="Nome completo" htmlFor="insc-nome" erro={erros.nome}>
        <Input
          id="insc-nome"
          maxLength={120}
          value={valores.nome}
          onChange={(e) => set("nome", e.target.value)}
        />
      </RodaFormCampo>

      <RodaFormCampo label="E-mail corporativo" htmlFor="insc-email" erro={erros.email}>
        <Input
          id="insc-email"
          type="email"
          maxLength={255}
          value={valores.email}
          onChange={(e) => set("email", e.target.value)}
          onBlur={() => validarCampo("email")}
          aria-invalid={Boolean(erros.email)}
        />
      </RodaFormCampo>

      <RodaFormCampo
        label="WhatsApp"
        htmlFor="insc-whatsapp"
        erro={erros.whatsapp}
      >
        <Input
          id="insc-whatsapp"
          maxLength={15}
          inputMode="tel"
          placeholder="(11) 90000-0000"
          value={valores.whatsapp}
          onChange={(e) => set("whatsapp", mascararTelefone(e.target.value))}
          onBlur={() => validarCampo("whatsapp")}
          aria-invalid={Boolean(erros.whatsapp)}
        />
      </RodaFormCampo>

      <RodaFormCampo label="Nome da empresa" htmlFor="insc-empresa" erro={erros.empresa}>
        <Input
          id="insc-empresa"
          maxLength={120}
          value={valores.empresa}
          onChange={(e) => set("empresa", e.target.value)}
        />
      </RodaFormCampo>

      <div className={compacto ? "md:col-span-2" : undefined}>
        <RodaFormPrivacidade />
      </div>

      <div className={compacto ? "md:col-span-2" : undefined}>
        {erroEnvio ? <p className="mb-3 text-sm font-medium text-destructive" role="alert">{erroEnvio}</p> : null}
        <Button type="submit" className="w-full" disabled={enviando}>
          {enviando ? <><Loader2 className="animate-spin" />Enviando inscrição...</> : "Garantir minha vaga em 17/09"}
        </Button>
      </div>
    </form>
  );
}
