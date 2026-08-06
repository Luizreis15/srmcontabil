import { useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  /** Inclina o card em 3D acompanhando o cursor */
  tilt?: boolean;
  /** Intensidade máxima da inclinação em graus */
  intensidade?: number;
  as?: ElementType;
}

/**
 * Card com movimento interativo (estilo 21st.dev):
 * brilho radial que segue o cursor, borda luminosa e tilt 3D sutil.
 * Em dispositivos de toque e com prefers-reduced-motion o efeito é neutralizado via CSS.
 */
export function MotionCard({
  children,
  className,
  tilt = true,
  intensidade = 5,
  as: Tag = "div",
}: MotionCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const frame = useRef<number | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = event;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      if (tilt) {
        const px = x / rect.width - 0.5;
        const py = y / rect.height - 0.5;
        el.style.setProperty("--ry", `${px * intensidade}deg`);
        el.style.setProperty("--rx", `${-py * intensidade}deg`);
      }
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Tag
      ref={ref as never}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "roda-card roda-motion-card",
        tilt && "roda-motion-tilt",
        className
      )}
    >
      {children}
    </Tag>
  );
}
