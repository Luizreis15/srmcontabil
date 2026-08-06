# Plano: Compactar Hero da Roda de Conversa

## Objetivo
Deixar a hero da `/roda-de-conversa` mais enxuta, visual e acima da primeira dobra, priorizando a imagem da Sueli e os CTAs.

## Mudanças no `src/pages/roda/RodaHub.tsx`

### 1. Reduzir texto
- Remover o badge "Iniciativa permanente da SMR Assessoria Contábil".
- Remover o parágrafo "Um espaço criado para empresários que querem compreender as mudanças, antecipar impactos e tomar decisões com mais clareza.".
- Remover o parágrafo "50 empresários participaram da nossa primeira conversa. E esse foi apenas o começo.".
- Manter o título "Roda de Conversa SMR" e a assinatura curta (`rodaConfig.assinatura`).

### 2. Reposicionar elementos
- Inverter o layout: imagem da Sueli à esquerda, texto à direita (ou manter a imagem como elemento dominante, conforme melhor encaixe visual).
- Colocar os botões abaixo da imagem da Sueli, não ao lado do texto.

### 3. Aumentar a imagem da Sueli
- Aumentar a proporção da imagem no grid para ocupar mais espaço vertical/horizontal.
- Garantir que a hero caiba na primeira dobra (`min-h-screen` ou `max-h-screen` com `object-cover`).

### 4. Ajustes responsivos
- Em mobile: empilhar imagem no topo, texto e botões abaixo.
- Reduzir paddings e tamanhos de fonte para evitar scroll excessivo.

## Critério de aceite
- Hero visível sem scroll em desktop e mobile (dentro do razoável, considerando headers fixos).
- Texto reduzido conforme solicitado.
- Botões posicionados abaixo da imagem da Sueli.
- Contraste e legibilidade preservados.
