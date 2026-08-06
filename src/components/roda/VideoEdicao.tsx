import { useState } from "react";
import { Play, Clock, CalendarDays, UserRound } from "lucide-react";
import { trackEvent } from "@/lib/rodaAnalytics";
import { ShareButtons } from "@/components/roda/ShareButtons";
import type { Edicao } from "@/data/roda/types";
import { formatarData } from "@/data/roda/edicoes";

interface VideoEdicaoProps {
  edicao: Edicao;
  convidado?: string;
  url: string;
}

export function VideoEdicao({ edicao, convidado, url }: VideoEdicaoProps) {
  const [ativo, setAtivo] = useState(false);
  const temVideo = Boolean(edicao.youtubeId);

  if (!temVideo) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-secondary/60 p-10 md:p-16 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
          <Play className="w-6 h-6 text-gold" />
        </div>
        <h3 className="mt-5 font-display text-xl md:text-2xl font-bold">
          A gravação está sendo preparada
        </h3>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Em breve, você poderá rever os principais momentos da nossa primeira
          Roda de Conversa.
        </p>
      </div>
    );
  }

  const thumb =
    edicao.thumbnail ??
    `https://i.ytimg.com/vi/${edicao.youtubeId}/maxresdefault.jpg`;

  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-accent shadow-card">
        {ativo ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${edicao.youtubeId}?autoplay=1&rel=0`}
            title={edicao.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            className="group absolute inset-0 w-full h-full"
            aria-label={`Assistir: ${edicao.titulo}`}
            onClick={() => {
              trackEvent("video_play", { edicao: edicao.slug });
              setAtivo(true);
            }}
          >
            <img
              src={thumb}
              alt={`Capa da gravação: ${edicao.titulo}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-accent/40 transition-colors group-hover:bg-accent/30" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 rounded-full bg-gold text-gold-foreground flex items-center justify-center shadow-card-hover transition-transform duration-300 group-hover:scale-105">
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{edicao.titulo}</span>
        {edicao.duracao ? (
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            {edicao.duracao}
          </span>
        ) : null}
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-gold" />
          {formatarData(edicao.dataISO, edicao.dataTexto)}
        </span>
        {convidado ? (
          <span className="inline-flex items-center gap-2">
            <UserRound className="w-4 h-4 text-gold" />
            {convidado}
          </span>
        ) : null}
      </div>

      <ShareButtons
        url={url}
        titulo={edicao.seoTitulo}
        contexto={edicao.slug}
      />

      <p className="text-xs text-muted-foreground">
        A reprodução é feita pelo YouTube, um serviço externo, e só carrega
        depois que você clica em assistir.
      </p>
    </div>
  );
}
