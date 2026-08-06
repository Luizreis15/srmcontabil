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

  /* Movimento dos cards: brilho e tilt acompanham o cursor (delegação global) */
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      const alvo = (event.target as HTMLElement | null)?.closest?.(
        ".roda-motion-card"
      ) as HTMLElement | null;
      if (!alvo) return;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = alvo.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        alvo.style.setProperty("--mx", `${x}px`);
        alvo.style.setProperty("--my", `${y}px`);
        alvo.style.setProperty("--ry", `${(x / rect.width - 0.5) * 5}deg`);
        alvo.style.setProperty("--rx", `${-(y / rect.height - 0.5) * 5}deg`);
      });
    };

    const onOut = (event: MouseEvent) => {
      const alvo = (event.target as HTMLElement | null)?.closest?.(
        ".roda-motion-card"
      ) as HTMLElement | null;
      if (!alvo) return;
      alvo.style.setProperty("--rx", "0deg");
      alvo.style.setProperty("--ry", "0deg");
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);


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
