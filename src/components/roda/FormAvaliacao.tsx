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

const schema = z.object({
  nota: z.number().int().min(1, { message: "Escolha uma nota de 1 a 5" }).max(5),
  maisUtil: z.string().trim().max(1000, { message: "Máximo de 1000 caracteres" }),
  oQueFaltou: z.string().trim().max(1000, { message: "Máximo de 1000 caracteres" }),
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
  empresa: z.string().trim().max(160, { message: "Máximo de 160 caracteres" }),
});

type Campos = z.infer<typeof schema>;
type Erros = Partial<Record<keyof Campos, string>>;

export function FormAvaliacao({
  edicaoSlug,
  onFechar,
}: {
  edicaoSlug?: string;
  onFechar: () => void;
}) {
  const [passo, setPasso] = useState(0);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [valores, setValores] = useState<Campos>({
    nota: 0,
    maisUtil: "",
    oQueFaltou: "",
    nome: "",
    email: "",
    empresa: "",
  });

  const set = <K extends keyof Campos>(campo: K, valor: Campos[K]) => {
    setValores((v) => ({ ...v, [campo]: valor }));
    setErros((e) => ({ ...e, [campo]: undefined }));
  };

  const validarPasso1 = () => {
    const r = schema.pick({ nota: true, maisUtil: true, oQueFaltou: true }).safeParse(valores);
    if (!r.success) {
      const f = r.error.flatten().fieldErrors;
      setErros({
        nota: f.nota?.[0],
        maisUtil: f.maisUtil?.[0],
        oQueFaltou: f.oQueFaltou?.[0],
      });
      return false;
    }
    return true;
  };

  const enviar = async () => {
    const r = schema.safeParse(valores);
    if (!r.success) {
      const f = r.error.flatten().fieldErrors;
      setErros({
        nome: f.nome?.[0],
        email: f.email?.[0],
        empresa: f.empresa?.[0],
      });
      return;
    }

    setEnviando(true);
    const { error } = await supabase.functions.invoke("roda-formulario", {
      body: { tipo: "avaliacao", edicaoSlug: edicaoSlug ?? null, ...r.data },
    });
    setEnviando(false);

    if (error) {
      toast({
        title: "Não conseguimos enviar sua avaliação",
        description: "Tente novamente em instantes ou fale com a SMR pelo WhatsApp.",
        variant: "destructive",
      });
      return;
    }

    trackEvent("feedback_complete", { edicao: edicaoSlug });
    setEnviado(true);
  };

  if (enviado) {
    return (
      <RodaFormSucesso
        titulo="Obrigado pela sua avaliação"
        mensagem="Sua resposta ajuda a SMR a construir os próximos encontros."
        onFechar={onFechar}
      />
    );
  }

  return (
    <div className="px-6 pb-6 pt-1 space-y-5">
      <RodaFormPassos passo={passo} total={2} />

      {passo === 0 ? (
        <div className="space-y-5">
          <RodaFormCampo label="Como você avalia o encontro?" htmlFor="nota" erro={erros.nota}>
            <div id="nota" className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => set("nota", n)}
                  aria-pressed={valores.nota === n}
                  className={
                    "w-11 h-11 rounded-xl border text-sm font-bold transition-colors " +
                    (valores.nota === n
                      ? "border-gold bg-gold text-gold-foreground"
                      : "border-border text-muted-foreground hover:border-gold")
                  }
                >
                  {n}
                </button>
              ))}
            </div>
          </RodaFormCampo>

          <RodaFormCampo label="O que foi mais útil para você?" htmlFor="maisUtil" erro={erros.maisUtil} opcional>
            <Textarea
              id="maisUtil"
              rows={3}
              maxLength={1000}
              value={valores.maisUtil}
              onChange={(e) => set("maisUtil", e.target.value)}
            />
          </RodaFormCampo>

          <RodaFormCampo label="O que faltou ou poderia melhorar?" htmlFor="oQueFaltou" erro={erros.oQueFaltou} opcional>
            <Textarea
              id="oQueFaltou"
              rows={3}
              maxLength={1000}
              value={valores.oQueFaltou}
              onChange={(e) => set("oQueFaltou", e.target.value)}
            />
          </RodaFormCampo>

          <Button className="w-full" onClick={() => validarPasso1() && setPasso(1)}>
            Continuar
          </Button>
        </div>
      ) : (
        <div className="space-y-5">
          <RodaFormCampo label="Seu nome" htmlFor="nome" erro={erros.nome}>
            <Input
              id="nome"
              maxLength={120}
              value={valores.nome}
              onChange={(e) => set("nome", e.target.value)}
            />
          </RodaFormCampo>

          <RodaFormCampo label="Seu e-mail" htmlFor="email" erro={erros.email}>
            <Input
              id="email"
              type="email"
              maxLength={255}
              value={valores.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </RodaFormCampo>

          <RodaFormCampo label="Empresa" htmlFor="empresa" erro={erros.empresa} opcional>
            <Input
              id="empresa"
              maxLength={160}
              value={valores.empresa}
              onChange={(e) => set("empresa", e.target.value)}
            />
          </RodaFormCampo>

          <RodaFormPrivacidade />

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setPasso(0)} disabled={enviando}>
              Voltar
            </Button>
            <Button className="flex-1" onClick={enviar} disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar avaliação"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
