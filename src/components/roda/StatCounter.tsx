import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  valor: number | null;
  prefixo?: string;
  sufixo?: string;
  /** Usado quando o indicador não é numérico (ex.: "Muitas") */
  textoAlternativo?: string;
  rotulo: string;
}

export function StatCounter({
  valor,
  prefixo = "",
  sufixo = "",
  textoAlternativo,
  rotulo,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(valor === null ? 0 : 0);
  const started = useRef(false);

  useEffect(() => {
    if (valor === null) return;
    const el = ref.current;
    if (!el) return;

    const prefereReduzir = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      observer.disconnect();

      if (prefereReduzir) {
        setDisplay(valor);
        return;
      }

      const duracao = 1200;
      const inicio = performance.now();
      const passo = (agora: number) => {
        const p = Math.min((agora - inicio) / duracao, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(valor * eased));
        if (p < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [valor]);

  return (
    <div
      ref={ref}
      className="roda-card roda-motion-card roda-motion-tilt p-4 sm:p-6 text-center bg-card/80"
    >
      <div className="text-3xl md:text-4xl font-extrabold text-primary tabular-nums">
        {valor === null ? textoAlternativo : `${prefixo}${display}${sufixo}`}
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-snug">{rotulo}</p>
    </div>
  );
}
