import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Conteudo } from "@/data/roda/types";
import { formatarDataConteudo } from "@/data/roda/conteudos";
import { MotionCard } from "@/components/roda/MotionCard";

export function ConteudoCard({ conteudo }: { conteudo: Conteudo }) {
  return (
    <MotionCard as="article" className="p-5 sm:p-6 flex flex-col h-full">
      {conteudo.imagem ? (
        <div className="rounded-xl overflow-hidden mb-5">
          <img
            src={conteudo.imagem}
            alt={conteudo.titulo}
            loading="lazy"
            decoding="async"
            className="roda-zoom w-full aspect-[16/9] object-cover"
          />
        </div>
      ) : null}
      <span className="roda-badge self-start">{conteudo.categoria}</span>
      <h3 className="mt-4 font-display text-base sm:text-lg font-bold leading-snug">
        {conteudo.titulo}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">
        {conteudo.resumo}
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        {conteudo.autor} · {formatarDataConteudo(conteudo.dataISO)} ·{" "}
        {conteudo.tempoLeitura}
      </p>
      <Link
        to={`/conteudos/${conteudo.slug}`}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
      >
        Ler o conteúdo
        <ArrowRight className="roda-arrow w-4 h-4" />
      </Link>
    </MotionCard>
  );
}
