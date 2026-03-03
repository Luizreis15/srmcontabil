

## Plano: Criar Árvore de Links (Mini Site) para SMR Assessoria

Inspirado no projeto **Links CSR**, vamos criar uma página de árvore de links no estilo Linktree para a SMR Assessoria, acessível em `/links`.

### Estrutura

```text
/links
├── Background decorativo (logo SMR em marca d'água)
├── Header (logo + nome + tagline)
├── Seção CTA Principal
│   ├── WhatsApp - Falar com Especialista
│   └── Agendar Diagnóstico Fiscal Gratuito
├── Seção Links Institucionais
│   ├── Nossos Serviços
│   ├── Trocar de Contador
│   └── Sobre a SMR
├── Seção Conteúdo
│   ├── Blog / Conteúdos Fiscais
│   └── FAQ - Dúvidas Frequentes
├── Redes Sociais (ícones: Instagram, Facebook, LinkedIn)
└── Footer (endereço + logo)
```

### Arquivos a Criar

1. **`src/pages/Links.tsx`** — Página principal da árvore de links, seguindo o padrão do `Index.tsx` do projeto CSR: layout centralizado (`max-w-md`), logo no topo, seções de links com divisores, footer compacto.

2. **`src/components/links/LinkButton.tsx`** — Componente de botão de link reutilizável (baseado no `LinkButton` do CSR), adaptado com as cores da SMR (teal primary, azul marinho accent). Suporta `href`, `onClick`, `icon`, `emoji`, variantes de cor.

3. **`src/components/links/LinksBackground.tsx`** — Background decorativo com o logo SMR em marca d'água (opacidade baixa) e círculos gradientes nas cores da marca, similar ao `HandsPattern` do CSR.

4. **`src/components/links/LinksFooter.tsx`** — Footer compacto com logo pequeno e endereço.

### Arquivos a Modificar

5. **`src/App.tsx`** — Adicionar rota `/links` apontando para a nova página.

### Detalhes Técnicos

- Os links institucionais (Serviços, Sobre, etc.) apontarão para as âncoras da página principal (`/preview#servicos`).
- O WhatsApp usará o link já existente: `https://wa.me/551144360780`.
- Redes sociais com ícones circulares no footer.
- Animações de entrada (`animate-fade-in`, `animate-slide-up`) com delays escalonados, como no CSR.
- Design mobile-first, `max-w-md` centralizado.
- Cores adaptadas ao design system existente da SMR (teal + azul marinho).

