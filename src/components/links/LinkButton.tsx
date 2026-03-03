import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface LinkButtonProps {
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  emoji?: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline";
  className?: string;
  delay?: number;
}

export function LinkButton({
  href,
  onClick,
  icon: Icon,
  emoji,
  children,
  variant = "outline",
  className,
  delay = 0,
}: LinkButtonProps) {
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl border-primary",
    accent:
      "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl border-accent",
    outline:
      "bg-card/80 backdrop-blur-sm text-foreground hover:bg-primary/10 border-border hover:border-primary/50",
  };

  const content = (
    <>
      {emoji && <span className="text-xl">{emoji}</span>}
      {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
      <span className="font-semibold text-sm">{children}</span>
    </>
  );

  const sharedClass = cn(
    "w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 animate-fade-in-up",
    variants[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={sharedClass}
        style={{ animationDelay: `${delay}ms`, opacity: 0 }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={sharedClass}
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      {content}
    </button>
  );
}
