import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Play, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  categoriasEdicoes,
  edicoesRealizadas,
  formatarData,
} from "@/data/roda/edicoes";
import { getEspecialista } from "@/data/roda/especialistas";

const TODOS = "Todos";

export function AcervoEdicoes() {
  const [filtro, setFiltro] = useState(TODOS);
  const abas = [TODOS, ...categoriasEdicoes];

  const lista =
    filtro === TODOS
      ? edicoesRealizadas
      : edicoesRealizadas.filter((e) => e.categoria === filtro);

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filtrar edições por tema"
      >
        {abas.map((aba) => (
          <button
            key={aba}
            role="tab"
            aria-selected={filtro === aba}
            onClick={() => setFiltro(aba)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 border",
              filtro === aba
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:text-primary"
            )}
          >
            {aba}
          </button>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lista.map((edicao) => {
          const convidados = edicao.convidados
            .map((slug) => getEspecialista(slug))
            .filter(Boolean);
          const temas = convidados[0]?.temas.slice(0, 4) ?? [];

          return (
            <article
              key={edicao.slug}
              className="roda-card roda-motion-card roda-motion-tilt p-5 sm:p-6 h-full flex flex-col"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-navy shrink-0">
                  {convidados[0]?.foto ? (
                    <img
                      src={convidados[0].foto as string}
                      alt={`Foto de ${convidados[0].nome}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="flex w-full h-full items-center justify-center text-sm font-bold text-gold">
                      SMR
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <span className="roda-badge">
                    {edicao.numero
                      ? `${edicao.numero}ª edição`
                      : "Edição"}{" "}
                    · {edicao.categoria}
                  </span>
                </div>
              </div>

              <h3 className="mt-4 font-display text-lg font-bold leading-snug">
                {edicao.tema}
              </h3>

              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-gold-ink shrink-0" />
                  {formatarData(edicao.dataISO, edicao.dataTexto)}
                </li>
                {convidados.length ? (
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold-ink shrink-0" />
                    <span className="truncate">
                      {convidados.map((c) => c!.nome).join(", ")}
                    </span>
                  </li>
                ) : null}
              </ul>

              {temas.length ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {temas.map((tema) => (
                    <span
                      key={tema}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {tema}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 pt-1 flex-1 flex items-end">
                {edicao.youtubeId ? (
                  <Button asChild size="sm" className="gap-2">
                    <Link to={`/roda-de-conversa/${edicao.slug}`}>
                      <Play className="w-4 h-4" />
                      Assistir gravação
                    </Link>
                  </Button>
                ) : (
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <Link to={`/roda-de-conversa/${edicao.slug}`}>
                      Gravação em preparação
                    </Link>
                  </Button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
