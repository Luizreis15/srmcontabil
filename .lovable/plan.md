# Hub Digital "Roda de Conversa SMR" — Fase 1 (páginas públicas)

Um hub editorial próprio dentro do site da SMR, com header e rodapé dedicados, apresentando a Roda de Conversa como iniciativa permanente — não como evento isolado. A primeira edição (Split Payment, com a Dra. Daniela Marinho, 6/8/2026, ~50 empresários) entra como conteúdo inaugural.

Nesta fase todo o conteúdo fica em arquivos de dados editáveis (edições, especialistas, artigos, links de formulários, ID do vídeo). O banco de dados e o painel administrativo com login ficam para a Fase 2 — a estrutura dos dados já é desenhada agora para migrar sem retrabalho.

## Páginas

- `/roda-de-conversa` — página principal do hub
- `/roda-de-conversa/edicoes` — arquivo de todas as edições (realizadas e próximas)
- `/roda-de-conversa/split-payment` — página da 1ª edição
- `/especialistas` — todos os convidados
- `/especialistas/daniela-marinho` — perfil individual
- `/conteudos` — área editorial (artigos)
- `/conteudos/:slug` — artigo individual
- `/privacidade` — política de privacidade e uso de dados

Link discreto para `/roda-de-conversa` no header e rodapé do site principal.

## Página principal

1. Header fixo próprio: logo SMR, Roda de Conversa, Edições, Próximos encontros, Especialistas, Conteúdos + botão "Sugerir um tema". No mobile, menu compacto.
2. Hero: "Roda de Conversa SMR" / "Conhecimento prático para decisões empresariais mais seguras" + destaque da primeira edição. Botões: Assistir à primeira edição, Avaliar o encontro, Sugerir o próximo tema. Detalhe manuscrito apenas na expressão "Roda de".
3. Indicadores com contagem progressiva única: 50 empresários, 1 especialista convidada, 1 tema estratégico, muitas perguntas respondidas.
4. Card grande da edição mais recente (Split Payment) com elevação suave no hover e três CTAs.
5. Área do vídeo em estado "gravação em preparação". Quando o ID do YouTube for preenchido, vira thumbnail com play e o iframe só carrega após o clique, com compartilhamento WhatsApp/LinkedIn.
6. "O que ficou desta conversa" — 4 cards de aprendizados.
7. Card editorial da Dra. Daniela Marinho (sem inventar formação, títulos ou registros) com botão "Conhecer a especialista".
8. Formulário de satisfação: abre o Typeform em modal, sem tirar o usuário da página.
9. Próximos encontros com estados (inscrições abertas, data confirmada, em breve, realizado, gravação disponível). Sem evento confirmado, exibe o convite para sugerir tema.
10. Sugestão de temas + pesquisa de disponibilidade (Typeform em modal).
11. Carrossel de edições anteriores, com arraste no mobile.
12. Seção de conteúdos para empresários com categorias.
13. "Continue perto da SMR": WhatsApp com mensagem pré-preenchida, e-mail, falar com a SMR — sem inscrição automática em listas.
14. CTA fixo discreto no mobile: "Sugerir um tema".

## Página da 1ª edição

Roda de Conversa #01 — Split Payment: os impactos no caixa e na rotina das empresas. Traz resumo, estado do vídeo, aprendizados, perguntas frequentes, convidada, materiais, avaliação, conteúdos relacionados, próxima edição e compartilhamento. Marinho Advogados aparece aqui e no perfil da Dra. Daniela, nunca como marca do projeto.

## Perfil do convidado

Foto, nome, especialidade, escritório, minicurrículo, áreas de atuação, edições em que participou e conteúdos relacionados. Contatos (e-mail, WhatsApp, site, LinkedIn, Instagram) só aparecem quando marcados como autorizados no cadastro — o campo já nasce como "não autorizado".

## Identidade visual

Tokens próprios do hub: azul-marinho #052E55, azul profundo #031F3B, dourado #C78F2D, bege #F4EEE7, branco, cinza de texto #667085, preto azulado #152033. Tipografia Manrope para a interface; fonte manuscrita só no detalhe "Roda de". Cantos arredondados, sombras leves, espaçamento generoso, ícones lineares, dourado em uso pontual.

Movimento discreto: elevação no hover, entrada no scroll, contadores uma única vez, transições suaves. Nada pulsando, girando ou em loop.

## Conteúdo, integrações e conformidade

- Arquivos de dados com as entidades eventos, convidados e conteúdos, nos campos previstos no PRD, mais um arquivo central de configuração com os links de Typeform (avaliação, sugestão de temas, disponibilidade, inscrição), ID do YouTube e número de WhatsApp. Trocar qualquer um deles é editar um valor, sem mexer em componentes.
- Typeform: placeholders enquanto os links reais não chegam; o modal exibe estado "formulário em preparação" quando o link está vazio.
- Próximos eventos: adicionar ao Google Calendar, arquivo .ics e copiar data/horário.
- LGPD: aviso de dados e consentimento nos pontos de coleta, informação sobre Typeform e YouTube como serviços externos, página de privacidade, opção de não receber comunicações.
- SEO por rota: título, descrição, URL amigável, Open Graph e dados estruturados de evento, pessoa e artigo.
- Acessibilidade e performance: imagens em WebP com carregamento sob demanda, vídeo só após interação, contraste adequado, textos alternativos, navegação por teclado e respeito a `prefers-reduced-motion`.

## Detalhes técnicos

- Rotas novas em `src/App.tsx`; layout do hub em `src/components/roda/` com header, rodapé e CTA mobile próprios.
- Dados em `src/data/roda/` (`edicoes.ts`, `especialistas.ts`, `conteudos.ts`, `config.ts`) tipados, espelhando o schema futuro do banco.
- Tokens do hub adicionados como escopo em `index.css` + `tailwind.config.ts`, sem alterar o tema do site atual. Nenhuma cor fixa em componentes.
- `react-helmet-async` para head e JSON-LD por rota.
- Camada fina de eventos de analytics (`video_play`, `feedback_open`, `topic_suggestion_open`, `whatsapp_click`, `guest_profile_view`, `event_share`, etc.) pronta para plugar em GA4 depois.
- Placeholders neutros para imagens até o material real (Sueli Rocha, Dra. Daniela, arte da edição) ser enviado.

## Fase 2 (depois desta entrega)

Lovable Cloud com as tabelas eventos, convidados e conteúdos, login e painel `/admin` para cadastrar edições, convidados e artigos sem passar pelo código.
