import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { rodaConfig, whatsappUrl } from "@/data/roda/config";
import { trackEvent, type RodaEvent } from "@/lib/rodaAnalytics";

interface AbrirArgs {
  url: string;
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

  return (
    <FormContext.Provider value={{ abrirFormulario }}>
      {children}
      <Dialog open={aberto} onOpenChange={setAberto}>
        <DialogContent className="max-w-3xl p-0 gap-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-4 text-left">
            <DialogTitle className="font-display text-xl">
              {args?.titulo ?? "Formulário"}
            </DialogTitle>
            {args?.descricao ? (
              <DialogDescription>{args.descricao}</DialogDescription>
            ) : null}
          </DialogHeader>

          {args?.url ? (
            <>
              <iframe
                title={args.titulo}
                src={args.url}
                className="w-full h-[70vh] border-0"
                allow="camera; microphone; autoplay; encrypted-media;"
              />
              <p className="px-6 py-3 text-xs text-muted-foreground border-t border-border flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-gold-ink" />
                <span>
                  Este formulário é hospedado pelo Typeform, um serviço externo. Ao
                  enviar, seus dados serão tratados pela SMR conforme a nossa{" "}
                  <a href="/privacidade" className="underline hover:text-primary">
                    política de privacidade
                  </a>
                  , apenas para as finalidades informadas.
                </span>
              </p>
            </>
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
