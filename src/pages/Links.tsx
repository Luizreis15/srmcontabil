import { useState } from "react";
import { Globe, MessageCircle, Users, Send, ChevronDown } from "lucide-react";
import { LinksBackground } from "@/components/links/LinksBackground";
import { LinkButton } from "@/components/links/LinkButton";
import { LinksFooter } from "@/components/links/LinksFooter";
import logoSmr from "@/assets/logo-smr.png";

const Links = () => {
  const [showTrabalhe, setShowTrabalhe] = useState(false);

  return (
    <div className="min-h-screen relative">
      <LinksBackground />

      <div className="relative z-10 max-w-md mx-auto px-5 py-10">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up" style={{ opacity: 0, animationDelay: "0ms" }}>
          <img
            src={logoSmr}
            alt="SMR Assessoria"
            className="h-24 mx-auto mb-4 object-contain drop-shadow-lg"
          />
          <p className="text-accent-foreground/60 text-sm mt-1 tracking-wide">
            Inteligência Fiscal para empresas do ABC
          </p>
        </div>

        {/* Links Principais */}
        <div className="space-y-4">
          <LinkButton
            href="/preview"
            icon={Globe}
            variant="outline"
            delay={100}
          >
            Nosso Site
          </LinkButton>

          <LinkButton
            href="https://wa.me/551144360780"
            icon={MessageCircle}
            variant="primary"
            delay={200}
          >
            WhatsApp (11) 4436-0780
          </LinkButton>

          <LinkButton
            onClick={() => setShowTrabalhe(!showTrabalhe)}
            icon={Users}
            variant="outline"
            delay={300}
          >
            <span className="flex items-center gap-2">
              Trabalhe Conosco
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${showTrabalhe ? "rotate-180" : ""}`}
              />
            </span>
          </LinkButton>
        </div>

        {/* Seção Trabalhe Conosco */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            showTrabalhe ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-accent-foreground font-semibold text-lg mb-2">
              Faça parte do time SMR
            </h3>
            <p className="text-accent-foreground/60 text-sm mb-5 leading-relaxed">
              Estamos sempre em busca de talentos. Envie seu currículo e venha crescer conosco!
            </p>
            <a
              href="https://wa.me/551144360780?text=Ol%C3%A1!%20Gostaria%20de%20enviar%20meu%20curr%C3%ADculo%20para%20a%20SMR%20Assessoria."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:scale-[1.03] hover:shadow-[0_0_25px_hsl(195_85%_45%/0.4)] transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              Enviar Currículo via WhatsApp
            </a>
          </div>
        </div>

        <LinksFooter />
      </div>
    </div>
  );
};

export default Links;
