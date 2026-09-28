import { describe, expect, it } from "vitest";
import {
  getEdicao,
  getEdicoesRealizadas,
  getProximaEdicao,
  rodaEventoEncerrado,
} from "@/data/roda/edicoes";

const slug = "da-empresa-ao-legado";
const anterior = "escala-6x1-reducao-jornada";
const antesDoFim = new Date("2026-10-01T23:59:59-03:00").getTime();
const depoisDoFim = new Date("2026-10-02T00:00:00-03:00").getTime();

describe("estado temporal da 5ª Roda de Conversa", () => {
  it("mantém a 5ª edição em destaque antes da transição", () => {
    expect(rodaEventoEncerrado(antesDoFim)).toBe(false);
    expect(getProximaEdicao(antesDoFim)?.slug).toBe(slug);
    expect(getEdicao(slug, antesDoFim)?.status).toBe("inscricoes-abertas");
    expect(getEdicao(anterior, antesDoFim)?.youtubeId).toBe("oa141COxmD0");
    expect(getEdicoesRealizadas(antesDoFim)[0]?.slug).toBe(anterior);
  });

  it("move a 5ª edição ao acervo sem inventar vídeo", () => {
    expect(rodaEventoEncerrado(depoisDoFim)).toBe(true);
    expect(getProximaEdicao(depoisDoFim)).toBeNull();

    const edicaoEncerrada = getEdicao(slug, depoisDoFim);
    expect(edicaoEncerrada?.status).toBe("realizado");
    expect(edicaoEncerrada?.youtubeId).toBeFalsy();
    expect(getEdicoesRealizadas(depoisDoFim).some((edicao) => edicao.slug === slug)).toBe(true);
  });
});