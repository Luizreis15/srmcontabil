

# Hero: Divisor com transparencia

## Problema
O arco azul solido (meia-lua) esta cortando a imagem de forma muito marcada, cobrindo o homem na foto. O efeito fica pesado e pouco elegante.

## Solucao
Trocar a abordagem: em vez de um arco solido azul sobre a imagem, fazer a imagem ocupar toda a largura do hero como background, com um overlay escuro semitransparente por cima. O lado esquerdo tera mais opacidade (para o texto ser legivel) e o lado direito menos, revelando a imagem. A meia-lua sera aplicada como um gradiente com transparencia, criando uma transicao suave entre a area de texto e a imagem.

## Mudancas em `src/components/Hero.tsx`

1. **Desktop**: Imagem ocupa 100% do fundo (position absolute, inset-0) em vez de apenas 55% a direita
2. **Overlay com gradiente**: Um div absoluto com `background: linear-gradient(to right, hsl(210 60% 18% / 0.95) 0%, hsl(210 60% 18% / 0.85) 35%, hsl(210 60% 18% / 0.4) 60%, transparent 80%)` — cria transicao suave da esquerda (opaca, legivel) para a direita (transparente, imagem visivel)
3. **Remover** o div da meia-lua solida e o container de 55% da imagem
4. Manter o layout mobile com imagem em baixa opacidade como esta

Resultado: a imagem aparece por inteiro no fundo, com uma transicao elegante de azul semitransparente para transparente, sem cortar ninguem.

