import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface LinkButtonProps {
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  delay?: number;
}

export function LinkButton({
  href,
  onClick,
  icon: Icon,
  children,
  variant = "outline",
  className,
  delay = 0,
}: LinkButtonProps) {
  const variants = {
    primary:
      "bg-primary/90 text-primary-foreground border-primary/50 hover:bg-primary hover:shadow-[0_0_30px_hsl(195_85%_45%/0.4)]",
    outline:
      "bg-white/[0.07] text-accent-foreground border-white/10 hover:bg-white/[0.12] hover:border-white/20 hover:shadow-[0_0_20px_hsl(195_85%_45%/0.2)]",
  };

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
      <span className="font-semibold text-sm">{children}</span>
    </>
  );

  const sharedClass = cn(
    "w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-md transition-all duration-300 animate-fade-in-up hover:scale-[1.02]",
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
