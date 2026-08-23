import { useEffect, useState } from "react";

function calcular(alvo: number) {
  const diff = alvo - Date.now();
  if (diff <= 0) return null;
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff / 3600000) % 24),
    minutos: Math.floor((diff / 60000) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

const rotulos: [keyof NonNullable<ReturnType<typeof calcular>>, string][] = [
  ["dias", "dias"],
  ["horas", "horas"],
  ["minutos", "min"],
  ["segundos", "seg"],
];

export function Countdown({
  dataISO,
  className = "",
}: {
  dataISO: string;
  className?: string;
}) {
  const alvo = new Date(dataISO).getTime();
  const [restante, setRestante] = useState(() => calcular(alvo));

  useEffect(() => {
    const id = setInterval(() => setRestante(calcular(alvo)), 1000);
    return () => clearInterval(id);
  }, [alvo]);

  if (!restante) {
    return (
      <p className={`text-sm font-semibold text-gold-ink ${className}`}>
        O encontro já começou — fale com a SMR para entrar na transmissão.
      </p>
    );
  }

  return (
    <div className={`flex gap-2 sm:gap-3 ${className}`} role="timer">
      {rotulos.map(([chave, rotulo]) => (
        <div
          key={chave}
          className="flex-1 rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm px-2 py-2.5 text-center"
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
  );
}
