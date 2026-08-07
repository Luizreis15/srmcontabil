# Incluir gravação do YouTube na edição Split Payment

## Objetivo
Habilitar o player de vídeo da primeira Roda de Conversa (Split Payment) usando o link fornecido.

## Alterações previstas

### Dados da edição (`src/data/roda/edicoes.ts`)
- Extrair o ID do vídeo do link `https://www.youtube.com/watch?v=5FkBCk15g54` → `5FkBCk15g54`.
- Preencher `youtubeId` com esse ID.
- Alterar `status` de `"realizado"` para `"gravacao-disponivel"`.
- Alterar `statusVideo` de `"em-preparacao"` para `"disponivel"`.
- Manter `duracao` indefinida, já que a duração exata não foi informada.

### Impacto esperado
- A página `/roda-de-conversa/split-payment` passa a exibir o player do YouTube em vez do estado "A gravação está sendo preparada".
- O selo do card na listagem muda de "Encontro realizado" para "Gravação disponível".
- O componente `VideoEdicao` já está preparado para carregar a thumbnail e o iframe a partir do `youtubeId`.

### Validação
- Verificar se o build/typecheck passa.
- Verificar visualmente se o player aparece na página da edição e se o vídeo inicia ao clicar no play.
