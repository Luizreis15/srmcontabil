import { Linkedin, MessageCircle, Link2, Check } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/rodaAnalytics";
import { rodaConfig } from "@/data/roda/config";

interface ShareButtonsProps {
  url: string;
  titulo: string;
  contexto?: string;
}

export function ShareButtons({ url, titulo, contexto }: ShareButtonsProps) {
  const [copiado, setCopiado] = useState(false);
  const absoluta = url.startsWith("http") ? url : `${rodaConfig.siteUrl}${url}`;

  const compartilhar = (canal: string, destino: string) => {
    trackEvent("event_share", { canal, contexto });
    window.open(destino, "_blank", "noopener");
  };

  const base =
    "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold-ink";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm text-muted-foreground">Compartilhar:</span>
      <button
        type="button"
        className={base}
        onClick={() =>
          compartilhar(
            "whatsapp",
            `https://wa.me/?text=${encodeURIComponent(`${titulo} ${absoluta}`)}`
          )
        }
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </button>
      <button
        type="button"
        className={base}
        onClick={() =>
          compartilhar(
            "linkedin",
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluta)}`
          )
        }
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </button>
      <button
        type="button"
        className={base}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(absoluta);
            setCopiado(true);
            trackEvent("event_share", { canal: "link", contexto });
            setTimeout(() => setCopiado(false), 2000);
          } catch {
            /* clipboard indisponível */
          }
        }}
      >
        {copiado ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
        {copiado ? "Link copiado" : "Copiar link"}
      </button>
    </div>
  );
}
