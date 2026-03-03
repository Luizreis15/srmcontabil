import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logoSmr from "@/assets/logo-smr.jpg";

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
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-accent text-accent-foreground py-14">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoSmr} alt="SMR Contábil" className="w-10 h-10 rounded-lg object-cover" />
              <span className="font-bold text-xl">SMR Contábil</span>
            </div>
            <p className="text-accent-foreground/70 text-sm leading-relaxed mb-4">
              Contabilidade com Inteligência Fiscal para empresas do ABC. Desde 1998.
            </p>
            <p className="text-accent-foreground/50 text-xs">Atendimento para empresas (exceto MEI)</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent-foreground">Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollToSection(link.href)} className="text-accent-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-accent-foreground">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-accent-foreground/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>Rua das Empresas, 123<br />Santo André, SP - 09000-000</span>
              </li>
              <li>
                <a href="https://wa.me/551144360780" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-accent-foreground/70 hover:text-primary transition-colors text-sm">
                  <MessageCircle className="w-4 h-4 flex-shrink-0 text-primary" />
                  (11) 4436-0780
                </a>
              </li>
              <li>
                <a href="mailto:contato@smrcontabil.com.br" className="flex items-center gap-3 text-accent-foreground/70 hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                  contato@smrcontabil.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-accent-foreground">Newsletter</h4>
            <p className="text-accent-foreground/70 text-sm mb-4">Receba dicas fiscais e novidades.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Seu e-mail" className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50" />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Inscrever-se</Button>
            </form>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {["Facebook", "Instagram", "LinkedIn"].map((label) => (
                <a key={label} href="#" className="w-9 h-9 rounded-full bg-accent-foreground/10 flex items-center justify-center text-accent-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors" aria-label={label}>
                  <span className="text-xs font-bold">{label[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accent-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent-foreground/50 text-sm">© {new Date().getFullYear()} SMR Contábil. Todos os direitos reservados.</p>
          <p className="text-accent-foreground/50 text-sm">CRC SP-XXXXXX/O-X</p>
        </div>
      </div>
    </footer>
  );
}
