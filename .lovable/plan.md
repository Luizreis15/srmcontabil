

# Pagina "Em Construcao" + Rota de Desenvolvimento

## Objetivo
Criar uma pagina publica informando que o novo site esta em construcao, enquanto o site sendo desenvolvido fica acessivel em uma rota separada para preview.

## Mudancas

### 1. Nova pagina: `src/pages/UnderConstruction.tsx`
- Pagina bonita com fundo azul marinho (cores da SMR)
- Logo "S" da SMR no topo
- Titulo: "Novo site em construcao"
- Mensagem: "Estamos preparando algo incrivel para voce. Em breve, nosso novo site estara no ar."
- Icone de construcao animado (Hammer ou HardHat do Lucide)
- Links para WhatsApp e telefone para contato enquanto isso
- Icones de redes sociais (Instagram, Facebook)

### 2. Ajuste de rotas: `src/App.tsx`
- Rota `/` --> Pagina "Em Construcao" (o que visitantes veem)
- Rota `/preview` --> Site atual completo (Index com todas as secoes)
- Rota `*` --> 404

Assim voce acessa `/preview` para ver o site em desenvolvimento, e quando estiver pronto, basta trocar as rotas para publicar o definitivo.

## Detalhes Tecnicos

### Arquivo novo
- `src/pages/UnderConstruction.tsx`: Pagina responsiva com animacao sutil, logo, mensagem e contatos

### Arquivo modificado
- `src/App.tsx`: Adicionar import da nova pagina e ajustar rotas (/ para UnderConstruction, /preview para Index)

