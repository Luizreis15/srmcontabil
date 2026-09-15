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
      <p className={`mb-3 text-xs font-bold uppercase ${restante.total < 86400000 ? "text-gold" : "text-white/70"}`}>
        {restante.total < 86400000 ? "Começa em" : "Faltam"}
      </p>
      <div className="flex max-w-md gap-2 sm:gap-3">
      {rotulos.map(([chave, rotulo]) => (
        <div
          key={chave}
          className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm"
        >
          <span className="block font-display text-xl sm:text-2xl font-extrabold tabular-nums text-white">
            {String(restante[chave]).padStart(2, "0")}
          </span>
          <span className="block text-[10px] uppercase tracking-widest text-white/70">
            {rotulo}
          </span>
        </div>
      ))}
      </div>
    </div>
  );
}
