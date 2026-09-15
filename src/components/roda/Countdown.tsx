import { useEffect, useState } from "react";

function calcular(alvo: number) {
  const diff = alvo - Date.now();
  if (diff <= 0) return null;
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff / 3600000) % 24),
    minutos: Math.floor((diff / 60000) % 60),
    total: diff,
  };
}

const rotulos: [keyof NonNullable<ReturnType<typeof calcular>>, string][] = [
  ["dias", "dias"],
  ["horas", "horas"],
  ["minutos", "min"],
];

export function Countdown({
  dataISO,
  className = "",
  onTerminar,
}: {
  dataISO: string;
  className?: string;
  onTerminar?: () => void;
}) {
  const alvo = new Date(dataISO).getTime();
  const [restante, setRestante] = useState(() => calcular(alvo));

  useEffect(() => {
    const id = setInterval(() => {
      const novo = calcular(alvo);
      setRestante(novo);
      if (!novo) onTerminar?.();
    }, 30_000);
    return () => clearInterval(id);
  }, [alvo, onTerminar]);

  if (!restante) {
    return (
      <p className={`text-sm font-semibold text-gold-ink ${className}`}>
        O encontro já começou.
      </p>
    );
  }

  return (
    <div className={className} role="timer" aria-label="Contagem regressiva para o encontro">
      <p className={`mb-2 text-[10px] font-bold uppercase sm:mb-3 sm:text-xs ${restante.total < 86400000 ? "text-gold" : "text-accent-foreground/70"}`}>
        {restante.total < 86400000 ? "Começa em" : "Faltam"}
      </p>
      <div className="flex max-w-xs gap-2 sm:max-w-md sm:gap-3">
      {rotulos.map(([chave, rotulo]) => (
        <div
          key={chave}
          className="min-w-0 flex-1 rounded-lg border border-accent-foreground/15 bg-accent-foreground/10 px-2 py-2 text-center backdrop-blur-sm sm:px-3 sm:py-3"
        >
          <span className="block font-display text-xl font-extrabold tabular-nums text-accent-foreground sm:text-2xl">
            {String(restante[chave]).padStart(2, "0")}
          </span>
          <span className="block text-[10px] uppercase tracking-widest text-accent-foreground/70">
            {rotulo}
          </span>
        </div>
      ))}
      </div>
    </div>
  );
}
