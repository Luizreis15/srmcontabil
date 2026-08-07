import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { rodaConfig, whatsappUrl } from "@/data/roda/config";
import { trackEvent, type RodaEvent } from "@/lib/rodaAnalytics";
import { FormAvaliacao } from "@/components/roda/FormAvaliacao";
import { FormSugestaoTema } from "@/components/roda/FormSugestaoTema";

interface AbrirArgs {
  tipo?: "avaliacao" | "sugestao";
  edicaoSlug?: string;
  url?: string;
  titulo: string;
  descricao?: string;
  evento?: RodaEvent;
}

interface FormContextValue {
  abrirFormulario: (args: AbrirArgs) => void;
}

const FormContext = createContext<FormContextValue | null>(null);

export function useFormularioModal() {
  const ctx = useContext(FormContext);
  if (!ctx)
    throw new Error("useFormularioModal precisa estar dentro de FormularioProvider");
  return ctx;
}

export function FormularioProvider({ children }: { children: ReactNode }) {
  const [aberto, setAberto] = useState(false);
  const [args, setArgs] = useState<AbrirArgs | null>(null);

  const abrirFormulario = useCallback((novo: AbrirArgs) => {
    setArgs(novo);
    setAberto(true);
    if (novo.evento) trackEvent(novo.evento, { form: novo.titulo });
  }, []);

  const fechar = () => setAberto(false);

  return (
    <FormContext.Provider value={{ abrirFormulario }}>
      {children}
      <Dialog open={aberto} onOpenChange={setAberto}>
        <DialogContent className="max-w-lg p-0 gap-0 overflow-y-auto max-h-[90vh]">
          <DialogHeader className="px-6 pt-6 pb-4 text-left">
            <DialogTitle className="font-display text-xl">
              {args?.titulo ?? "Formulário"}
            </DialogTitle>
            {args?.descricao ? (
              <DialogDescription>{args.descricao}</DialogDescription>
            ) : null}
          </DialogHeader>

          {args?.tipo === "avaliacao" ? (
            <FormAvaliacao edicaoSlug={args.edicaoSlug} onFechar={fechar} />
          ) : args?.tipo === "sugestao" ? (
            <FormSugestaoTema onFechar={fechar} />
          ) : (
            <div className="px-6 pb-8 pt-2">
              <div className="rounded-2xl border border-dashed border-border bg-secondary/60 p-8 text-center">
                <p className="font-display font-semibold text-foreground">
                  Formulário em preparação
                </p>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  Este formulário está sendo finalizado. Enquanto isso, você pode
                  falar direto com a equipe da SMR pelo WhatsApp.
                </p>
                <Button
                  className="mt-5 gap-2"
                  onClick={() => {
                    trackEvent("whatsapp_click", { origem: args?.titulo });
                    window.open(
                      whatsappUrl(rodaConfig.mensagensWhatsapp.falarComSmr),
                      "_blank",
                      "noopener"
                    );
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar com a SMR
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </FormContext.Provider>
  );
}
