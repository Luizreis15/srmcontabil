import { MapPin } from "lucide-react";
import logoSmr from "@/assets/logo-smr.png";

export function LinksFooter() {
  return (
    <footer className="mt-10 pb-8 text-center animate-fade-in-up" style={{ animationDelay: "800ms", opacity: 0 }}>
      <img src={logoSmr} alt="SMR Assessoria" className="h-12 mx-auto mb-3 object-contain opacity-60" />
      <div className="flex items-center justify-center gap-1.5 text-accent-foreground/50 text-xs">
        <MapPin className="w-3 h-3" />
        <span>Santo André, SP — Desde 1998</span>
      </div>
    </footer>
  );
}
