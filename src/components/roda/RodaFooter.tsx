import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import logoSmr from "@/assets/logo-smr-transparent.png";
import { rodaConfig, whatsappUrl } from "@/data/roda/config";
import { trackEvent } from "@/lib/rodaAnalytics";

const navegacao = [
  { label: "Edições", to: "/roda-de-conversa/edicoes" },
  { label: "Especialistas", to: "/especialistas" },
  { label: "Conteúdos", to: "/conteudos" },
  { label: "Site da SMR", to: "/" },
  { label: "Privacidade", to: "/privacidade" },
];

export function RodaFooter() {
  return (
    <footer className="bg-navy-deep text-white pt-5 pb-24 md:pb-5 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link to="/roda-de-conversa" className="shrink-0">
          <img
            src={logoSmr}
            alt="SMR Assessoria"
            className="h-10 object-contain"
            style={{ mixBlendMode: "screen" }}
          />
        </Link>

        <nav className="flex flex-wrap gap-x-5 gap-y-1.5">
          {navegacao.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-white/85 hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappUrl(rodaConfig.mensagensWhatsapp.falarComSmr)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { origem: "footer" })}
          className="flex items-center gap-2 text-sm font-semibold text-white hover:text-gold transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-gold" />
          (11) 4436-0780
        </a>
      </div>

      <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-white/10 text-xs text-white/70 flex flex-col sm:flex-row sm:justify-between gap-1">
        <span>
          Rua Coronel Fernando Prestes, 350, Sala 131 — Santo André/SP
        </span>
        <span>© {new Date().getFullYear()} SMR Assessoria Contábil</span>
      </div>
    </footer>
  );
}
