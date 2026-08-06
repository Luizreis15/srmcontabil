import { Link } from "react-router-dom";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import logoSmr from "@/assets/logo-smr-transparent.png";
import { rodaConfig, whatsappUrl } from "@/data/roda/config";
import { trackEvent } from "@/lib/rodaAnalytics";

const navegacao = [
  { label: "Roda de Conversa", to: "/roda-de-conversa" },
  { label: "Edições", to: "/roda-de-conversa/edicoes" },
  { label: "Especialistas", to: "/especialistas" },
  { label: "Conteúdos", to: "/conteudos" },
  { label: "Site da SMR", to: "/" },
];

export function RodaFooter() {
  return (
    <footer className="bg-navy-deep text-white pt-14 pb-8 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={logoSmr}
              alt="SMR Assessoria"
              className="h-20 object-contain"
              style={{ mixBlendMode: "screen" }}
            />
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-sm">
              A <span className="roda-script text-gold text-lg">Roda de</span>{" "}
              <span className="font-semibold text-white">Conversa SMR</span> é um
              espaço de atualização e troca de experiências entre empresários,
              especialistas e a SMR Assessoria Contábil.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Navegação</h4>
            <ul className="space-y-3">
              {navegacao.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacidade"
                  className="text-white/70 hover:text-gold transition-colors text-sm"
                >
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 text-white/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <span>
                  Rua Coronel Fernando Prestes, 350, Sala 131
                  <br />
                  Centro — Santo André, SP · CEP 09020-110
                </span>
              </li>
              <li>
                <a
                  href={whatsappUrl(rodaConfig.mensagensWhatsapp.falarComSmr)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { origem: "footer" })}
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-gold" />
                  (11) 4436-0780
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${rodaConfig.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  {rodaConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} SMR Assessoria Contábil. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
