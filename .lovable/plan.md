

# Redesign SMR Contabil - Cores Corretas + Vida Visual

## Problema 1: Paleta de Cores Errada

A paleta atual usa verde (#2a8f5c) como cor principal. Pelo Instagram da SMR, as cores reais sao:

- **Azul marinho escuro** (fundo principal das pecas): ~hsl(210, 60%, 18%) - #0f2a4a
- **Azul teal/ciano** (destaque, acentos): ~hsl(195, 85%, 45%) - #0e8bb5  
- **Branco** para texto e elementos sobre fundo escuro
- **Cinza claro** para fundos alternados

Todos os componentes serao atualizados para refletir essa paleta azul.

## Problema 2: Site Sem Vida

Mudancas para dar impacto e dinamismo:

- **Hero com fundo azul escuro** em vez de branco - mais impacto visual imediato
- **Secoes com fundos alternados mais fortes**: azul escuro, branco, cinza, azul escuro
- **Animacoes de entrada** (scroll-triggered) em cada secao usando Intersection Observer
- **Gradientes e overlays** nas secoes de destaque
- **Cards com hover mais agressivo** (sombra, escala, cor)
- **Bordas e detalhes em teal** para dar destaque visual
- **Barras de progresso animadas** que crescem ao entrar na viewport
- **Icones com fundo teal solido** (nao apenas 10% de opacidade)
- **CTA buttons em teal vibrante** com efeito de pulse/glow
- **Secoes mais compactas** - reduzir padding vertical excessivo

## Arquivos a Modificar

### 1. src/index.css
- Trocar toda a paleta de `--primary` de verde para azul teal (~195 85% 45%)
- Trocar `--accent` para azul marinho escuro (~210 60% 18%)
- Adicionar animacao de scroll-reveal via CSS
- Reduzir padding do `.section-padding` para secoes mais compactas
- Adicionar classe `.animate-on-scroll` com transicao de opacidade e translateY

### 2. tailwind.config.ts
- Ajustar cores para a nova paleta azul

### 3. src/components/Hero.tsx
- Fundo azul escuro (bg-accent) com texto branco
- Imagem circular com borda teal
- Botao CTA em teal vibrante com animacao pulse sutil
- Texto branco com destaque teal no "Inteligencia Fiscal"

### 4. src/components/Header.tsx
- Botao "Contato" em teal (bg-primary)
- Logo com icone azul

### 5. src/components/TopBar.tsx
- Fundo azul escuro com texto branco/cinza claro

### 6. src/components/PainPoints.tsx
- Barras de progresso em teal
- Borda/destaque teal na imagem

### 7. src/components/ValueProposition.tsx
- Icones com fundo teal solido e icone branco (mais impacto)
- Cards com borda superior teal

### 8. src/components/ServicesPreview.tsx
- Fundo azul escuro para a secao inteira
- Cards brancos sobre fundo escuro (alto contraste)
- Icones teal

### 9. src/components/SwitchAccountant.tsx
- Manter layout split, adicionar fundo mais contrastante

### 10. src/components/FacilitateSection.tsx
- Fundo azul escuro com texto branco
- Imagem com borda teal

### 11. src/components/SocialProof.tsx
- Manter fundo escuro, ajustar para azul marinho
- Stats com destaque teal

### 12. src/components/OnlineSection.tsx
- Icones com fundo teal solido

### 13. src/components/FinalCTA.tsx
- Gradiente azul escuro para teal
- Botoes mais vibrantes

### 14. src/components/Footer.tsx
- Fundo azul escuro (consistente com a marca)

### 15. src/components/FAQ.tsx
- Detalhes em teal nos acordeoes

### 16. src/hooks/useScrollAnimation.ts (novo)
- Custom hook com Intersection Observer para animar secoes ao scroll
- Cada secao entra com fade-in + slide-up ao entrar na viewport

### 17. src/pages/Index.tsx
- Aplicar animacoes de scroll em cada secao

## Resumo do Impacto Visual

- Verde --> Azul marinho + teal (identidade correta da SMR)
- Fundos brancos monotonos --> Alternancia de azul escuro / branco / cinza
- Secoes estaticas --> Animacoes de entrada ao scroll
- Cards planos --> Cards com hover vibrante e bordas de destaque
- Icones fracos --> Icones com fundo solido teal
- Botoes discretos --> CTAs em teal com efeito glow/pulse

