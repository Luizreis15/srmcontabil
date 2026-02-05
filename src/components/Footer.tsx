import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Troca de Contador", href: "#troca" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">SMR Contábil</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Contabilidade com Inteligência Fiscal para empresas do ABC. Desde 1998.
            </p>
            <p className="text-background/50 text-xs mt-4">
              Atendimento para empresas (exceto MEI)
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Rua das Empresas, 123<br />Santo André, SP - 09000-000</span>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>(11) 99999-9999</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@smrcontabil.com.br"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>contato@smrcontabil.com.br</span>
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-bold mb-4">Fale Conosco</h4>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Diagnóstico no WhatsApp
            </a>
            <p className="text-background/50 text-xs mt-3">
              Resposta em horário comercial
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} SMR Contábil. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-sm">
            CRC SP-XXXXXX/O-X
          </p>
        </div>
      </div>
    </footer>
  );
}
