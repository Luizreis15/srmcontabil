# 6ª Roda de Conversa SMR — O Fim da Escala 6x1 na Prática

## Dados do encontro (fornecidos)
- Data: quinta-feira, 22 de outubro de 2026, 16h (São Paulo), online
- Tema: "O Fim da Escala 6x1 na Prática: O que Muda, quais Impactos e como se Preparar?"
- Convidado: Dr. Giuliano Tovo Di Ramo — OAB/SP nº 444.024, advogado e sócio do escritório Marinho Advogados Associados
- Minicurrículo resumido a partir do material enviado: Direito do Trabalho Empresarial, Processo do Trabalho, pós-graduações (Damásio, Legale), mestrando em Direito (UNIMAR), professor universitário, coautor de "Descomplicando o Direito para Empreendedores", Controller Jurídico da Marinho Advogados
- Foto: retrato enviado (terno azul, fundo branco) — combina com a paleta azul

## O que muda no site
1. **Nova edição em destaque** na página principal e na página própria da edição, com contador até 22/10 16h.
2. **Edição "Da Empresa ao Legado" vai para o acervo** como card de edição realizada ("Direito e sucessão"). Sem link do YouTube enviado, o card mostra "Gravação em preparação" até você mandar o link.
3. **Abertura premium (banner)**: headline do tema em destaque, foto do Dr. Giuliano recortada sobre camadas translúcidas em azul, brilho de luz e entrada suave em movimento. Ordem no celular: headline → subheadline → foto → botão "Garantir minha vaga" → nome, data, horário, online e contador.
4. **Seções da página (copy curta e direta)**:
   - "O que muda": 3 cards com ícones (jornada, custos, escalas e contratos)
   - "Impactos na sua empresa": blocos com efeito de entrada ao rolar
   - "Como se preparar": passo a passo em 4 etapas
   - Convidado: foto, OAB, minicurrículo
   - Formulário de inscrição (o mesmo atual: nome, e-mail, WhatsApp, empresa; com validação e mensagem de sucesso)
   - FAQ (gratuito? online? haverá gravação? para quem é? preciso ter CNPJ?)
   - Acervo com as edições anteriores
5. **Barra de aviso, botão fixo no celular, agenda (.ics/Google) e compartilhamento** apontando para a nova edição.
6. **Depois do encontro** (a partir de 23/10 em São Paulo): passa para "Encontro realizado · Gravação em preparação".

## Visual
- Paleta azul e branco atual (#071C39, #0867B8, #FFFFFF, #F3F8FC) com transparências, Syne nos títulos e Plus Jakarta Sans no texto — mesma família visual da 5ª edição, com composição nova.
- Efeitos no estilo 21st.dev: grade/feixes de luz animados ao fundo, cards com brilho que segue o cursor, entradas ao rolar, contador animado; tudo desligado para quem prefere menos movimento.
- Sem dourado, sem texto inventado sobre o tema jurídico além de títulos de pauta genéricos.

## Detalhes técnicos
- `edicoes.ts`: nova edição `fim-escala-6x1-na-pratica` (numero 6, `2026-10-22T16:00:00-03:00`, `inscricoes-abertas`); `da-empresa-ao-legado` → `realizado`; `edicaoAtualSlug` e `RODA_EVENTO_FIM_ISO` (`2026-10-23T00:00:00-03:00`) atualizados.
- `especialistas.ts`: `giuliano-di-ramo` com foto local (recorte do upload, sem fundo, via imagegen edit).
- Novo `EscalaPraticaHero.tsx` compartilhado hub/edição; generalizar `RodaLayout`/`FormularioProvider`/`RodaMobileCTA` para o escopo da nova edição; FAQ via `perguntasFrequentes`.
- Atualizar `src/test/roda-event-state.test.ts` (antes/depois de 22/10), `AGENTS.md`, `roadmap.md`.
- Validar em Playwright 320/393/1280: ordem, foto, contador, formulário, card do Legado no acervo.
