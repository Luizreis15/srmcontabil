import type { Edicao } from "@/data/roda/types";

const pad = (n: number) => String(n).padStart(2, "0");

const toIcsDate = (d: Date) =>
  `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(
    d.getUTCHours()
  )}${pad(d.getUTCMinutes())}00Z`;

const janela = (iso: string) => {
  const inicio = new Date(iso);
  const fim = new Date(inicio.getTime() + 90 * 60 * 1000);
  return { inicio, fim };
};

export function googleCalendarUrl(edicao: Edicao) {
  if (!edicao.dataISO) return "";
  const { inicio, fim } = janela(edicao.dataISO);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Roda de Conversa SMR — ${edicao.tema}`,
    details: edicao.resumo,
    dates: `${toIcsDate(inicio)}/${toIcsDate(fim)}`,
    location: edicao.plataforma ?? "Online",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function baixarIcs(edicao: Edicao) {
  if (!edicao.dataISO) return;
  const { inicio, fim } = janela(edicao.dataISO);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SMR Assessoria//Roda de Conversa//PT-BR",
    "BEGIN:VEVENT",
    `UID:${edicao.slug}@smrcontabil.com.br`,
    `DTSTAMP:${toIcsDate(new Date())}`,
    `DTSTART:${toIcsDate(inicio)}`,
    `DTEND:${toIcsDate(fim)}`,
    `SUMMARY:Roda de Conversa SMR — ${edicao.tema}`,
    `DESCRIPTION:${edicao.resumo.replace(/\n/g, " ")}`,
    `LOCATION:${edicao.plataforma ?? "Online"}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `roda-de-conversa-${edicao.slug}.ics`;
  link.click();
  URL.revokeObjectURL(link.href);
}
