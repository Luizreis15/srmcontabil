import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoSmr from "@/assets/logo-smr-alta.jpeg";

export function LinksFooter() {
  return (
    <footer className="mt-10 pb-8 animate-fade-in-up" style={{ animationDelay: "800ms", opacity: 0 }}>
      <div className="rounded-2xl bg-accent/90 backdrop-blur-sm p-6 text-accent-foreground space-y-4">
        <img src={logoSmr} alt="SMR Assessoria" className="h-14 mx-auto mb-2 object-contain" />

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
            <span className="text-accent-foreground/80">
              R. Cel. Fernando Prestes, 350 - Vila Assunção<br />
              Santo André - SP, 09020-110
            </span>
          </div>

          <a href="https://wa.me/551144360780" className="flex items-center gap-3 text-accent-foreground/80 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
            (11) 4436-0780
          </a>

          <a href="mailto:contato@smrcontabil.com.br" className="flex items-center gap-3 text-accent-foreground/80 hover:text-primary transition-colors">
            <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
            contato@smrcontabil.com.br
          </a>

          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 flex-shrink-0 text-primary" />
            <span className="text-accent-foreground/80">Seg–Sex: 8h às 18h</span>
          </div>
        </div>

        <p className="text-accent-foreground/40 text-xs text-center pt-2 border-t border-accent-foreground/10">
          © {new Date().getFullYear()} SMR Assessoria — Desde 1998
        </p>
      </div>
    </footer>
  );
}
