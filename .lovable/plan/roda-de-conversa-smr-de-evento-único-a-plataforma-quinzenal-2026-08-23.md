# Roda de Conversa SMR — de evento único a plataforma quinzenal

Redesenho da página `/roda-de-conversa` para comunicar recorrência (encontros a cada 15 dias, gratuitos e abertos ao público), destacar a próxima edição de 03/09 e transformar o acervo em prova de autoridade.

Identidade mantida: Navy + Dourado, tipografia atual, SMR Assessoria (nunca "SMR Contábil"), público PJ.

## Conteúdo novo

**Próxima edição — 03 de setembro, 16h, online**
Tema: As mudanças no Simples Nacional na Reforma Tributária, com Dra. Daniela Marinho.

**2ª edição — 19 de agosto, 16h (realizada)**
Gestão Trabalhista Estratégica e Proteção para Empresas, com Dr. Leandro Jesuíno (advogado empresarial trabalhista, patronal). Tags: eSocial, PGR (saúde mental), Contrato PJ vs CLT, Fiscalização do Trabalho. Sem gravação publicada ainda — o card mostra "gravação em preparação" até você enviar o link do YouTube e a foto/bio do convidado.

A 1ª edição (Split Payment, 06/08, gravação disponível) permanece. Nenhuma edição fictícia será criada.

## Nova estrutura da página

1. **Faixa de aviso** (topo, dispensável): "Próxima edição: 03/09 — Dra. Daniela Marinho | Vagas gratuitas limitadas" + link de inscrição.
2. **Hero** — badge "Encontros quinzenais gratuitos", headline focada em comunidade, subtítulo do novo formato aberto, foto da Sueli mantida, dois botões: "Garantir minha vaga" (primário) e "Ver gravações anteriores" (âncora).
3. **Próxima edição em destaque** — bloco bipartido: à esquerda data/hora, tema e 3 bullets de dor resolvida; à direita card da Dra. Daniela (foto circular + mini bio). Contador regressivo até 03/09 16h (fuso de São Paulo), com fallback "acontece hoje/encerrado".
4. **Como funciona** — 3 cards: quinzenal, aberto ao público, temas sob demanda.
5. **Acervo de edições** — abas de filtro (Todos / Tributário / Trabalhista / Gestão) sobre os cards reais; cada card com convidado, data, tags dos temas e botão "Assistir gravação" (ou estado "em preparação").
6. **Sugira o próximo tema** — formulário nativo já existente, exibido inline nesta seção (não só em modal), com mensagem de sucesso amigável.
7. **Rodapé** — mantém o atual (compacto, WhatsApp e endereço), acrescentando redes sociais.

## Inscrição

Modal de inscrição rápida com Nome, E-mail, WhatsApp e Segmento da empresa, disparado por todos os CTAs principais e pelo CTA fixo do mobile.

- Nova tabela `roda_inscricoes` no backend, com RLS (inserção pública, leitura restrita) e grants.
- A edge function `roda-formulario` passa a aceitar o tipo `inscricao`, validando com Zod e notificando a SMR por e-mail, no mesmo padrão dos formulários de avaliação e sugestão.

## Detalhes técnicos

- `src/data/roda/edicoes.ts`: adicionar edições 2 (19/08, realizada) e 3 (03/09, inscrições abertas) com `categoria` para os filtros; `src/data/roda/especialistas.ts`: novo perfil `leandro-jesuino` (sem foto por enquanto).
- Novos componentes em `src/components/roda/`: `BarraAviso.tsx`, `Countdown.tsx`, `ProximaEdicaoDestaque.tsx`, `AcervoEdicoes.tsx` (Tabs shadcn), `FormInscricao.tsx`.
- `RodaHub.tsx` reescrito na nova ordem de seções; `FormularioProvider` ganha o tipo `inscricao`; `RodaHeader` recebe âncoras (Próxima edição, Como funciona, Edições, Sugerir tema) e botão "Inscrever-se grátis"; `RodaMobileCTA` passa a abrir a inscrição.
- Estilo: tokens existentes (navy/gold/sand), `rounded-xl`, hover suave 150ms, glassmorphism sutil nos elementos flutuantes, e o tilt/brilho dos cards já implementado.
- SEO: JSON-LD `Event` para a edição de 03/09 no hub, além do `EventSeries` atual.

## O que fica pendente de você

Link da gravação e foto/mini-bio do Dr. Leandro Jesuíno, e o horário/plataforma definitivos do encontro de 03/09 caso não seja 16h.
