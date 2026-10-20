import { describe, expect, it } from "vitest";
import {
  getEdicao,
  getEdicoesRealizadas,
  getProximaEdicao,
  rodaEventoEncerrado,
} from "@/data/roda/edicoes";

const slug = "fim-escala-6x1-na-pratica";
const anterior = "da-empresa-ao-legado";
const antesDoFim = new Date("2026-10-22T23:59:59-03:00").getTime();
const depoisDoFim = new Date("2026-10-23T00:00:00-03:00").getTime();

describe("estado temporal da 6ª Roda de Conversa", () => {
  it("destaca a 6ª edição em 22/10 às 16h", () => {
    expect(rodaEventoEncerrado(antesDoFim)).toBe(false);
    const proxima = getProximaEdicao(antesDoFim);
    expect(proxima?.slug).toBe(slug);
    expect(proxima?.dataISO).toBe("2026-10-22T16:00:00-03:00");
    expect(getEdicoesRealizadas(antesDoFim)[0]?.slug).toBe(anterior);
  });

  it("move a 6ª edição ao acervo sem inventar vídeo", () => {
    expect(rodaEventoEncerrado(depoisDoFim)).toBe(true);
    expect(getProximaEdicao(depoisDoFim)).toBeNull();
    expect(getEdicao(slug, depoisDoFim)?.status).toBe("realizado");
    expect(getEdicao(slug, depoisDoFim)?.youtubeId).toBeFalsy();
  });
});
