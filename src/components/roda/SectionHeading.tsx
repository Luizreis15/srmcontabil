import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  etiqueta?: string;
  titulo: ReactNode;
  descricao?: ReactNode;
  className?: string;
  centralizado?: boolean;
}

export function SectionHeading({
  etiqueta,
  titulo,
  descricao,
  className,
  centralizado,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        centralizado && "mx-auto text-center",
        className
      )}
    >
      {etiqueta ? <span className="roda-badge">{etiqueta}</span> : null}
      <h2 className="mt-4 font-display text-2xl md:text-4xl font-extrabold leading-tight text-foreground">
        {titulo}
      </h2>
      {descricao ? (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {descricao}
        </p>
      ) : null}
    </div>
  );
}
