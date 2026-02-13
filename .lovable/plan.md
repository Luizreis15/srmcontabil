
# Redesign Completo do Site SMR Contabil - Inspirado na Sigma Contabilidade

## Problema Identificado
O site atual e muito texto-pesado, sem imagens, sem cor vibrante e sem vida visual. A referencia (Sigma Contabilidade) usa:
- Hero com imagem grande de equipe em formato circular
- Barra superior com contatos e redes sociais
- Secoes alternando imagem + texto lado a lado
- Cards de servicos com icones verdes vibrantes
- Secao com barras de progresso nos servicos
- Fundos alternados (branco, cinza claro, secoes com imagens)
- Fotos reais de escritorio/equipe em varias secoes
- Visual mais verde e vivo (menos cinza/petrol escuro)

## Mudancas Planejadas

### 1. Paleta de Cores - Mais Vida e Verde
- Verde mais vibrante como cor principal dos CTAs e destaques (inspirado no verde da Sigma)
- Backgrounds alternados: branco puro, cinza bem claro, secoes com fundo verde escuro
- Menos petrol blue pesado, mais contraste e limpeza

### 2. Top Bar (novo componente)
- Barra fina no topo com email, telefone e icones de redes sociais (Facebook, Instagram, LinkedIn)
- Estilo: fundo branco ou cinza claro, texto pequeno

### 3. Header Redesenhado
- Logo a esquerda
- Menu centralizado/direita
- Botao "Contato" com fundo verde (como na referencia)

### 4. Hero - Layout Split com Imagem
- Layout em 2 colunas: texto a esquerda, imagem grande a direita
- Imagem em formato circular/arredondado (como a Sigma faz com clip-path ou border-radius)
- Usar imagem placeholder de equipe profissional (via Unsplash URL)
- Headline + sub + botao verde "Falar com o contador" (WhatsApp)
- Remover badge e bullets do hero, simplificar

### 5. Secao "Como Trabalhamos" - Imagem + Texto
- Layout 2 colunas: imagem circular a esquerda, texto + barras de progresso a direita
- Barras de progresso verdes para cada servico (Assessoria Contabil, Fiscal, Folha, etc.)
- Label acima da barra + percentual

### 6. Secao Vantagens - Cards com Icones Verdes
- 3 cards com icones verdes, titulo e descricao
- Fundo cinza claro
- Icones maiores e mais coloridos

### 7. Secao Diferenciais - Grid de Cards
- 6 cards em grid 3x2 ou 2x3
- Icone verde, titulo, descricao curta
- Botao "Leia Mais" em cada card

### 8. Secao "Facilitar sua vida" - Imagem + Texto
- Layout 2 colunas com imagem da equipe/escritorio
- Texto motivacional + CTA

### 9. Secao Contabilidade Online - Icones em Grid
- Icones circulares com labels (Praticidade, Economia, Agilidade, etc.)
- CTA verde "Quero uma Contabilidade Online"

### 10. FAQ Redesenhado
- Manter acordeao, mas com visual mais limpo
- Titulo "Duvidas comuns de nossos clientes"

### 11. Footer Redesenhado
- Fundo escuro com logo, newsletter (campo de email), CTA
- Icones de redes sociais

### 12. Imagens Placeholder
- Usar URLs de imagens do Unsplash para equipe de escritorio/contabilidade
- Formato circular em varias secoes (hero, como trabalhamos, etc.)
- Imagens aplicadas via `<img>` com classes de arredondamento

## Detalhes Tecnicos

### Arquivos a Modificar
- **src/index.css**: Ajustar paleta para verde mais vibrante, novos tokens CSS
- **tailwind.config.ts**: Ajustar cores accent/primary para verde mais vivo
- **src/components/Header.tsx**: Redesenhar com TopBar + novo layout
- **src/components/Hero.tsx**: Layout 2 colunas com imagem circular
- **src/components/PainPoints.tsx**: Transformar em secao "Como Trabalhamos" com barras de progresso
- **src/components/ValueProposition.tsx**: Redesenhar como secao de vantagens com cards visuais
- **src/components/ServicesPreview.tsx**: Grid de cards com icones verdes maiores
- **src/components/SwitchAccountant.tsx**: Adicionar imagem lateral
- **src/components/SocialProof.tsx**: Redesenhar com mais cor e imagens
- **src/components/ContentSection.tsx**: Adicionar imagem + layout visual
- **src/components/FAQ.tsx**: Estilo mais limpo
- **src/components/FinalCTA.tsx**: Secao com imagem de fundo ou lateral
- **src/components/Footer.tsx**: Redesenhar com newsletter + redes sociais

### Novo Componente
- **src/components/TopBar.tsx**: Barra superior com contatos e redes sociais

### Imagens (Unsplash placeholders)
- Hero: equipe de escritorio trabalhando juntos
- Como Trabalhamos: profissionais em reuniao
- Facilitar sua vida: escritorio moderno
- Todas com formato circular ou arredondado

### Abordagem
Todas as copys/textos do PRD original serao mantidos. A mudanca e puramente visual: mais imagens, mais verde, mais espacamento, layouts split (texto + imagem), barras de progresso, cards mais coloridos e vivos.
