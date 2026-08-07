# Roda de Conversa: copy enxuta + formulários próprios

## 1. Home do hub mais curta e focada na Roda

Hoje a home tem 12 seções e boa parte fala do evento de Split Payment. Reduzir para 7 blocos curtos, cada um com no máximo 2 linhas de texto:

1. **Hero** — mantém como está (imagem da Sueli + assinatura + CTAs), sem alterações estruturais.
2. **O que é a Roda** — 3 cartões curtos, uma frase cada: encontros online e gratuitos · temas escolhidos pelos empresários · especialistas convidados. Substitui a seção "Introdução" com dois parágrafos longos.
3. **Como funciona** — 3 passos em linha (você sugere o tema → a SMR convida o especialista → você participa e recebe a gravação). Bloco novo, texto de uma linha por passo.
4. **Última edição (discreto)** — faixa compacta: tema, data, convidada e dois botões ("Assistir à gravação" e "Ver todas as edições"). Remove da home o card grande, a seção de vídeo embutida, a seção de aprendizados e o card de especialista convidada — tudo isso continua existindo na página da edição.
5. **Próximos encontros** — mantém, com textos encurtados.
6. **Participe** — dois cartões: "Sugerir um tema" e "Avaliar o último encontro", cada um com uma frase. Absorve a seção de feedback (bloco navy) e o par sugestão/disponibilidade.
7. **Fique por perto** — WhatsApp + e-mail, com o parágrafo reduzido a uma frase.

Seções removidas da home (permanecem nas páginas dedicadas): indicadores (50 empresários etc.), especialistas em grade, conteúdos em grade e edições anteriores em carrossel — substituídas por links de texto no bloco 4 e no rodapé.

## 2. Rodapé enxuto

Reduzir `RodaFooter` de 3 colunas para uma faixa compacta: logo + WhatsApp + e-mail + links (Edições, Especialistas, Conteúdos, Site da SMR, Privacidade) em linha única, endereço em uma linha só, e a linha de copyright. Remove o parágrafo descritivo da Roda.

## 3. Formulários nativos (avaliação e sugestão de tema)

Substituir o modal de Typeform por formulários próprios, em etapas, com a identidade da Roda.

**Avaliar o encontro** — nota de 1 a 5, o que foi mais útil, o que faltou, nome, e-mail e empresa (opcional).

**Sugerir um tema** — tema/dúvida, por que é importante para a empresa, formato preferido (online/presencial), melhor dia e horário, nome, e-mail, WhatsApp (opcional).

Comportamento: validação com mensagens claras, envio sem sair da página, tela de agradecimento, e aviso de privacidade com link para a política.

Cada envio é gravado no banco e dispara um e-mail de aviso para contato@smrcontabil.com.br com o conteúdo da resposta.

## 4. Detalhes técnicos

- Ativar Lovable Cloud (banco + funções + e-mail).
- Tabelas `roda_avaliacoes` e `roda_sugestoes` com GRANTs e RLS: `INSERT` liberado para anônimos (formulário público), leitura restrita a administradores via tabela `user_roles` + função `has_role`.
- Validação com `zod` no cliente e novamente na função de envio.
- Envio de e-mail pela infraestrutura de e-mails da Lovable, exigindo verificação do domínio `smrcontabil.com.br` (as respostas ficam salvas no banco mesmo antes disso).
- `FormularioProvider` passa a renderizar os formulários internos em vez do iframe; `rodaConfig.typeforms` deixa de ser usado nesses dois fluxos (o campo continua disponível para inscrição/disponibilidade).
- Componentes novos: `FormAvaliacao.tsx`, `FormSugestaoTema.tsx` e um `RodaFormShell` compartilhado.
