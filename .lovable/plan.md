

## Plano: Adicionar resumos descritivos nos links "Conheça a SMR"

Atualmente os botões "Nossos Serviços", "Trocar de Contador" e "Sobre a SMR" na seção "Conheça a SMR" são links simples sem contexto. Vamos transformá-los em cards com resumo extraído do conteúdo que já existe no site.

### O que muda

**`src/pages/Links.tsx`** — Substituir os 3 `LinkButton` da seção "Conheça a SMR" por cards expandidos com:

1. **Nossos Serviços** — Ícone + título + resumo:
   - *"Assessoria contábil, fiscal, folha, planejamento tributário e regularização. Do operacional ao estratégico."*
   - Link → `/preview#servicos`

2. **Trocar de Contador** — Ícone + título + resumo:
   - *"Migração guiada em 4 passos: diagnóstico, checklist, transição e primeira competência revisada com você."*
   - Link → `/preview#troca`

3. **Sobre a SMR** — Ícone + título + resumo:
   - *"Desde 1998 facilitando a vida empresarial no ABC. Suporte humano, rotina clara e zero sustos."*
   - Link → `/preview#sobre`

### Como implementar

**`src/components/links/LinkButton.tsx`** — Adicionar prop opcional `description?: string`. Quando presente, renderizar o texto abaixo do título em `text-xs text-muted-foreground`, mantendo o layout existente para botões sem descrição.

**`src/pages/Links.tsx`** — Passar a prop `description` nos 3 links institucionais. Manter tudo o mais igual.

### Visual

Cada card fica com altura um pouco maior, ícone à esquerda, título em bold e descrição em texto menor abaixo — tudo clicável como link. Mobile-first mantido.

