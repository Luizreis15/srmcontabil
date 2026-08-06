import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { FormularioProvider } from "@/components/roda/FormularioProvider";
import { RodaHeader } from "@/components/roda/RodaHeader";
import { RodaFooter } from "@/components/roda/RodaFooter";
import { RodaMobileCTA } from "@/components/roda/RodaMobileCTA";

export function RodaLayout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return (
    <FormularioProvider>
      <div className="roda-theme min-h-screen bg-background text-foreground font-display">
        <RodaHeader />
        <main className="pb-24 md:pb-0">{children}</main>
        <RodaFooter />
        <RodaMobileCTA />
      </div>
    </FormularioProvider>
  );
}
