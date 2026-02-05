import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Troca de Contador", href: "#troca" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-foreground">SMR Contábil</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico.", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              Diagnóstico no WhatsApp
            </Button>
            <p className="text-xs text-muted-foreground">Resposta em horário comercial</p>
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
                className="text-left text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 mt-2"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico.", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              Diagnóstico no WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
