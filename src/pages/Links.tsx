import { MessageCircle, Calendar, Briefcase, RefreshCw, Info, BookOpen, HelpCircle } from "lucide-react";
import { LinksBackground } from "@/components/links/LinksBackground";
import { LinkButton } from "@/components/links/LinkButton";
import { LinksFooter } from "@/components/links/LinksFooter";
import { JoinTeamSection } from "@/components/links/JoinTeamSection";
import { Separator } from "@/components/ui/separator";
import logoSmr from "@/assets/logo-smr.png";

const Links = () => {
  return (
    <div className="min-h-screen relative">
      <LinksBackground />

      <div className="relative z-10 max-w-md mx-auto px-5 py-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up" style={{ opacity: 0, animationDelay: "0ms" }}>
          <img
            src={logoSmr}
            alt="SMR Assessoria"
            className="h-24 mx-auto mb-4 object-contain drop-shadow-lg"
          />
          <h1 className="text-xl font-bold text-foreground">
            SMR Assessoria Contábil
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Inteligência Fiscal para empresas do ABC
          </p>
        </div>

        {/* CTA Principal */}
        <div className="space-y-3 mb-6">
          <LinkButton
            href="https://wa.me/551144360780"
            icon={MessageCircle}
            variant="primary"
            delay={100}
          >
            Falar com Especialista
          </LinkButton>
          <LinkButton
            href="https://wa.me/551144360780?text=Olá!%20Gostaria%20de%20agendar%20um%20diagnóstico%20fiscal%20gratuito."
            icon={Calendar}
            variant="accent"
            delay={200}
          >
            Diagnóstico Fiscal Gratuito
          </LinkButton>
        </div>

        <Separator className="bg-foreground/10 my-6" />

        {/* Links Institucionais */}
        <div className="space-y-3 mb-6">
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider text-center mb-3">
            Conheça a SMR
          </p>
          <LinkButton href="/preview#servicos" icon={Briefcase} delay={300} description="Assessoria contábil, fiscal, folha, planejamento tributário e regularização. Do operacional ao estratégico.">
            Nossos Serviços
          </LinkButton>
          <LinkButton href="/preview#troca" icon={RefreshCw} delay={350} description="Migração guiada em 4 passos: diagnóstico, checklist, transição e primeira competência revisada com você.">
            Trocar de Contador
          </LinkButton>
          <LinkButton href="/preview#sobre" icon={Info} delay={400} description="Desde 1998 facilitando a vida empresarial no ABC. Suporte humano, rotina clara e zero sustos.">
            Sobre a SMR
          </LinkButton>
        </div>

        <Separator className="bg-foreground/10 my-6" />

        {/* Conteúdo */}
        <div className="space-y-3 mb-6">
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider text-center mb-3">
            Conteúdos
          </p>
          <LinkButton href="/preview#conteudos" icon={BookOpen} delay={450}>
            Blog — Conteúdos Fiscais
          </LinkButton>
          <LinkButton href="/preview#faq" icon={HelpCircle} delay={500}>
            FAQ — Dúvidas Frequentes
          </LinkButton>
        </div>

        <Separator className="bg-foreground/10 my-6" />

        {/* Faça parte da equipe */}
        <JoinTeamSection />

        <Separator className="bg-foreground/10 my-6" />

        {/* Redes Sociais */}
        <div
          className="flex items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "600ms", opacity: 0 }}
        >
          {[
            { label: "Instagram", href: "#", icon: "I" },
            { label: "Facebook", href: "#", icon: "F" },
            { label: "LinkedIn", href: "#", icon: "L" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-bold"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <LinksFooter />
      </div>
    </div>
  );
};

export default Links;
