import { Link } from "react-router-dom";
import { ArrowRight, UserRound } from "lucide-react";
import type { Especialista } from "@/data/roda/types";
import { trackEvent } from "@/lib/rodaAnalytics";

export function EspecialistaCard({ especialista }: { especialista: Especialista }) {
  return (
    <article className="roda-card roda-card-hover p-6 flex gap-5 items-start h-full">
      <div className="w-20 h-20 rounded-2xl bg-sand shrink-0 overflow-hidden flex items-center justify-center">
        {especialista.foto ? (
          <img
            src={especialista.foto}
            alt={`Foto de ${especialista.nome}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        ) : (
          <UserRound className="w-8 h-8 text-muted-foreground" aria-hidden />
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-lg font-bold">{especialista.nome}</h3>
        <p className="text-sm text-gold-ink font-semibold">
          {especialista.cargo} · {especialista.empresa}
        </p>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-4">
          {especialista.minicurriculo}
        </p>
        <Link
          to={`/especialistas/${especialista.slug}`}
          onClick={() =>
            trackEvent("guest_profile_view", { convidado: especialista.slug })
          }
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
        >
          Conhecer a especialista
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
