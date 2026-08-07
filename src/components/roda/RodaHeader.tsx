import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoSmr from "@/assets/logo-smr-alta.jpeg";
import { useFormularioModal } from "@/components/roda/FormularioProvider";

const links = [
  { label: "Roda de Conversa", to: "/roda-de-conversa" },
  { label: "Edições", to: "/roda-de-conversa/edicoes" },
  { label: "Próximos encontros", to: "/roda-de-conversa#proximos" },
  { label: "Especialistas", to: "/especialistas" },
  { label: "Conteúdos", to: "/conteudos" },
];

export function RodaHeader() {
  const [aberto, setAberto] = useState(false);
  const { abrirFormulario } = useFormularioModal();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const sugerirTema = () => {
    setAberto(false);
    abrirFormulario({
      tipo: "sugestao",
      titulo: "Sobre o que precisamos conversar agora?",
      descricao:
        "Conte qual assunto está gerando dúvidas ou impactando a sua empresa.",
      evento: "topic_suggestion_open",
    });
  };

  const irPara = (to: string) => {
    setAberto(false);
    if (to.includes("#")) {
      const [caminho, alvo] = to.split("#");
      if (pathname === caminho) {
        document.getElementById(alvo)?.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate(to);
  };

  const ativo = (to: string) =>
    to.includes("#")
      ? pathname === to.split("#")[0] && hash === `#${to.split("#")[1]}`
      : pathname === to;

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <Link to="/" className="flex items-center shrink-0" aria-label="SMR Assessoria — página inicial">
            <img
              src={logoSmr}
              alt="SMR Assessoria"
              className="h-9 md:h-12 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <button
                key={link.to}
                onClick={() => irPara(link.to)}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  ativo(link.to)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button
              onClick={sugerirTema}
              className="gap-2 bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <Lightbulb className="w-4 h-4" />
              Sugerir um tema
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setAberto(!aberto)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
          >
            {aberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {aberto && (
        <div className="lg:hidden border-b border-border bg-background">
          <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.to}
                onClick={() => irPara(link.to)}
                className="text-left py-3 text-base font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={sugerirTema}
              className="mt-3 gap-2 bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <Lightbulb className="w-4 h-4" />
              Sugerir um tema
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
