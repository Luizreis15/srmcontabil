import { HardHat, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-accent flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto animate-fade-in">
        {/* Logo */}
        <div className="mb-8">
          <span className="text-6xl font-extrabold text-primary tracking-tight">S</span>
          <span className="text-6xl font-extrabold text-accent-foreground tracking-tight">MR</span>
        </div>

        {/* Ícone animado */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center pulse-glow">
            <HardHat className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Título e mensagem */}
        <h1 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Novo site em construção
        </h1>
        <p className="text-lg text-accent-foreground/70 mb-10 leading-relaxed">
          Estamos preparando algo incrível para você. Em breve, nosso novo site estará no ar.
        </p>

        {/* Contatos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://wa.me/551144360780"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+551144360780"
            className="inline-flex items-center gap-2 border border-accent-foreground/30 text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Ligar agora
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://instagram.com/smrcontabil"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-accent-foreground/30 flex items-center justify-center text-accent-foreground/60 hover:text-primary hover:border-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com/smrcontabil"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-accent-foreground/30 flex items-center justify-center text-accent-foreground/60 hover:text-primary hover:border-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
