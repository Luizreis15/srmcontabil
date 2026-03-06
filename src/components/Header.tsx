import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopBar } from "@/components/TopBar";
import logoSmr from "@/assets/logo-smr-alta.jpeg";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Troca de Contador", href: "#troca" },
  { label: "Conteúdos", href: "#conteudos" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-28 md:h-32">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logoSmr} alt="SMR Assessoria" className="h-10 md:h-14 object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                onClick={() => scrollToSection("#contato")}
              >
                <Phone className="w-4 h-4" />
                Contato
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-b border-border">
            <nav className="container-wide mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary font-medium py-2 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-2"
                onClick={() => scrollToSection("#contato")}
              >
                <Phone className="w-4 h-4" />
                Contato
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
