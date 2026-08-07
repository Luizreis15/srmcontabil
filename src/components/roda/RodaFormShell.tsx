import type { ReactNode } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RodaFormPassos({
  passo,
  total,
}: {
  passo: number;
  total: number;
}) {
  return (
    <div className="flex items-center gap-2" aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={
            "h-1.5 rounded-full transition-all " +
            (i <= passo ? "w-8 bg-gold" : "w-4 bg-border")
          }
        />
      ))}
    </div>
  );
}

export function RodaFormCampo({
  label,
  htmlFor,
  erro,
  children,
  opcional,
}: {
  label: string;
  htmlFor: string;
  erro?: string;
  children: ReactNode;
  opcional?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold text-foreground"
      >
        {label}
        {opcional ? (
          <span className="ml-2 text-xs font-normal text-muted-foreground">
            opcional
          </span>
        ) : null}
      </label>
      {children}
      {erro ? (
        <p className="text-xs font-medium text-destructive">{erro}</p>
      ) : null}
    </div>
  );
}

export function RodaFormSucesso({
  titulo,
  mensagem,
  onFechar,
}: {
  titulo: string;
  mensagem: string;
  onFechar: () => void;
}) {
  return (
    <div className="px-6 pb-8 pt-2 text-center">
      <div className="mx-auto w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
        <CheckCircle2 className="w-6 h-6 text-gold-ink" />
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-foreground">
        {titulo}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
        {mensagem}
      </p>
      <Button className="mt-6" onClick={onFechar}>
        Fechar
      </Button>
    </div>
  );
}

export function RodaFormPrivacidade() {
  return (
    <p className="text-xs text-muted-foreground flex items-start gap-2">
      <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-gold-ink" />
      <span>
        Usamos seus dados apenas para responder e organizar os próximos
        encontros. Veja a{" "}
        <a href="/privacidade" className="underline hover:text-primary">
          política de privacidade
        </a>
        .
      </span>
    </p>
  );
}
