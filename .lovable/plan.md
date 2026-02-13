

# Redesign do Hero - Replicar Layout da Sigma

## O Que Esta Errado

O hero atual tem uma imagem circular pequena (440px) flutuando dentro de um container. O hero da Sigma e completamente diferente:

- A imagem ocupa **metade direita da tela inteira**, com um **recorte em arco/curva** que sangra ate a borda direita e inferior
- O fundo escuro ocupa **100% da viewport** (ou quase)
- O texto fica posicionado mais abaixo, com mais espaco
- Layout mais dramatico e imersivo

## O Que Sera Feito

### Hero.tsx - Redesign Completo do Layout

1. **Secao full-viewport**: `min-h-[85vh]` com fundo escuro edge-to-edge
2. **Imagem com clip-path curvo**: Em vez de `border-radius: 50%` (circulo), usar `clip-path: ellipse()` ou um arco CSS que faz a imagem sangrar para a direita e para baixo, criando aquele efeito de "quarto de circulo" da Sigma
3. **Imagem posicionada absolutamente** na metade direita, ocupando toda a altura da secao
4. **Texto a esquerda** com mais padding vertical, posicionado mais ao centro vertical
5. **Botao CTA verde** (teal) com icone do WhatsApp - unico, limpo
6. **Linha de prova** abaixo do botao mantida, mas mais discreta
7. **Remover o glow/blur** atras da imagem - a Sigma nao tem isso

### Detalhes Tecnicos

- `clip-path: ellipse(80% 100% at 70% 50%)` ou similar para criar o arco
- Imagem com `position: absolute`, `right: 0`, `top: 0`, `bottom: 0` para sangrar na borda
- Container do texto com `max-w-xl` dentro de um grid ou flex
- `overflow-hidden` na secao para conter a imagem
- Responsivo: no mobile, imagem fica acima ou atras com overlay

### Arquivo Modificado
- `src/components/Hero.tsx` - reescrita completa do layout

