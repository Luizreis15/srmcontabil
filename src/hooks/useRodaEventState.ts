import { useEffect, useState } from "react";
import {
  getEdicoesRealizadas,
  getProximaEdicao,
  rodaEventoEncerrado,
} from "@/data/roda/edicoes";

export function useRodaEventState() {
  const [agora, setAgora] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setAgora(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return {
    agora,
    encerrado: rodaEventoEncerrado(agora),
    proximaEdicao: getProximaEdicao(agora),
    edicoesRealizadas: getEdicoesRealizadas(agora),
  };
}