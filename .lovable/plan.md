

## Plano: Redesign da Árvore de Links com Animações Modernas

### Resumo

Simplificar a página `/links` com apenas 3 links reais (Site, WhatsApp, Trabalhe Conosco), adicionar uma seção de envio de currículo, reforçar o logo em transparência no fundo e aplicar animações modernas inspiradas no estilo 21st.dev (glassmorphism, hover com scale/glow, floating particles, smooth entrances).

### Estrutura Final

```text
/links
├── Background (gradient escuro + logo grande em transparência + floating orbs animados)
├── Header (logo + tagline)
├── Links Principais
│   ├── 🌐 Nosso Site → /preview
│   ├── 💬 WhatsApp (11) 4436-0780 → wa.me/551144360780
│   └── 📄 Trabalhe Conosco → abre modal/seção
├── Seção "Trabalhe Conosco" (expandível ou modal)
│   ├── Texto de boas-vindas
│   └── Botão enviar currículo via WhatsApp (mensagem pré-formatada)
└── Footer compacto
```

### Arquivos a Modificar

1. **`src/pages/Links.tsx`** — Redesign completo: reduzir para 3 links reais, adicionar seção "Trabalhe Conosco" com link para envio de currículo via WhatsApp (mensagem pré-formatada), remover seções de conteúdo e links institucionais extras.

2. **`src/components/links/LinksBackground.tsx`** — Aumentar o logo watermark (de `w-80` para `w-[500px]`+), adicionar orbs flutuantes animadas com CSS keyframes (floating/pulsing) para efeito 21st.dev.

3. **`src/components/links/LinkButton.tsx`** — Adicionar efeitos hover modernos: scale com `hover:scale-[1.02]`, glow sutil com `hover:shadow-[0_0_20px_rgba(0,180,216,0.3)]`, glassmorphism com `backdrop-blur`, transição suave.

4. **`src/index.css`** — Adicionar keyframes para floating orbs (`float-slow`, `float-medium`) e glow pulse para botões.

### Detalhes de Animações (estilo 21st.dev)

- **Floating orbs**: Círculos desfocados que flutuam lentamente no background
- **Glassmorphism buttons**: `bg-white/10 backdrop-blur-md border-white/20`
- **Hover glow**: Sombra teal pulsante ao passar o mouse
- **Staggered entrance**: Manter delays escalonados mas com `cubic-bezier` mais suave
- **Logo breathing**: Animação sutil de opacidade no logo watermark (pulse lento)

### "Trabalhe Conosco"

- Seção expansível (collapsible) dentro da página
- Texto curto: "Faça parte do time SMR"
- Botão de envio de currículo via WhatsApp com mensagem: `"Olá! Gostaria de enviar meu currículo para a SMR Assessoria."`
- Alternativa: link `mailto:` se houver email disponível

