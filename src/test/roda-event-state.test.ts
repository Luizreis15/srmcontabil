import { describe, expect, it } from "vitest";
import {
  getEdicao,
  getEdicoesRealizadas,
  getProximaEdicao,
  rodaEventoEncerrado,
} from "@/data/roda/edicoes";

const slug = "escala-6x1-reducao-jornada";
const antesDoFim = new Date("2026-09-17T17:29:59-03:00").getTime();
const depoisDoFim = new Date("2026-09-17T17:30:00-03:00").getTime();

describe("estado temporal da 4ª Roda de Conversa", () => {
  it("mantém inscrições abertas antes de 17h30", () => {
    expect(rodaEventoEncerrado(antesDoFim)).toBe(false);
    expect(getProximaEdicao(antesDoFim)?.slug).toBe(slug);
    expect(getEdicao(slug, antesDoFim)?.status).toBe("inscricoes-abertas");
  });

  it("move a edição ao acervo às 17h30 sem inventar vídeo", () => {
    expect(rodaEventoEncerrado(depoisDoFim)).toBe(true);
    expect(getProximaEdicao(depoisDoFim)).toBeNull();

    const edicaoEncerrada = getEdicao(slug, depoisDoFim);
    expect(edicaoEncerrada?.status).toBe("realizado");
    expect(edicaoEncerrada?.youtubeId).toBeNull();
    expect(getEdicoesRealizadas(depoisDoFim).some((edicao) => edicao.slug === slug)).toBe(true);
  });
});