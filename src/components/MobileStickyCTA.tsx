import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-md border-t border-border md:hidden">
      <Button
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
        onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico.", "_blank")}
      >
        <MessageCircle className="w-5 h-5" />
        Diagnóstico no WhatsApp
      </Button>
    </div>
  );
}
