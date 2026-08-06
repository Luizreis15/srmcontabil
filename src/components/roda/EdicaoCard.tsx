import { Link } from "react-router-dom";
import { CalendarDays, Users, Video, ArrowRight } from "lucide-react";
import type { Edicao } from "@/data/roda/types";
import { formatarData, rotuloStatus } from "@/data/roda/edicoes";
import { getEspecialista } from "@/data/roda/especialistas";

export function EdicaoCard({ edicao }: { edicao: Edicao }) {
  const convidado = edicao.convidados
    .map((slug) => getEspecialista(slug)?.nome)
    .filter(Boolean)
    .join(", ");

  return (
    <article className="roda-card roda-card-hover overflow-hidden flex flex-col h-full">
      <div className="aspect-[16/9] bg-navy relative">
        {edicao.thumbnail || edicao.imagemCapa ? (
          <img
            src={(edicao.thumbnail ?? edicao.imagemCapa) as string}
            alt={`Capa da edição ${edicao.tema}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white/80 px-6 text-center">
            <span className="roda-script text-gold text-2xl">Roda de</span>
            <span className="font-display font-bold tracking-wide">
              CONVERSA SMR
            </span>
            {edicao.numero ? (
              <span className="mt-1 text-xs text-white/80">
                Edição #{String(edicao.numero).padStart(2, "0")}
              </span>
            ) : null}
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
          {rotuloStatus[edicao.status]}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold leading-snug">
          {edicao.tema}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {edicao.resumo}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-gold-ink" />
            {formatarData(edicao.dataISO, edicao.dataTexto)}
          </li>
          {convidado ? (
            <li className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold-ink" />
              Com {convidado}
            </li>
          ) : null}
          <li className="flex items-center gap-2">
            <Video className="w-4 h-4 text-gold-ink" />
            {edicao.youtubeId
              ? "Gravação disponível"
              : "Gravação em preparação"}
          </li>
        </ul>

        <Link
          to={`/roda-de-conversa/${edicao.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink-ink transition-colors"
        >
          Ver esta edição
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
