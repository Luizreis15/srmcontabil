# Atualização da 4ª Roda de Conversa

## Resultado esperado
Atualizar a página `/roda-de-conversa` para promover a 4ª edição em 17/09/2026, às 16h, com Dr. Leandro Jesuíno, mantendo o acervo atual e a integração existente de inscrições.

## Implementação

### 1. Dados e alternância do evento
- Substituir a 4ª edição atual pelos dados definitivos de “Escala 6x1 e redução da jornada”, vinculando o perfil e a foto já cadastrados de Dr. Leandro Jesuíno.
- Centralizar os horários do evento e da troca de estado em ISO com fuso `-03:00`.
- Antes de 17/09 às 17h30: tratar a edição como próxima, com inscrições abertas.
- Depois de 17/09 às 17h30: mover automaticamente a edição ao acervo como realizada e exibir “Gravação em preparação”, conforme decidido. O banner retorna ao estado de próxima edição a confirmar.
- Adicionar as quatro tags solicitadas à edição sem alterar as anteriores.

### 2. Banner e área principal de inscrição
- Atualizar o banner superior com versões completas e compactas para desktop e celular.
- Reconstruir a seção principal em navy, com data, título em duas linhas, destaque dourado, convidado, subtítulo e contador regressivo.
- Posicionar um card branco de inscrição sobre a transição entre a área escura e a seção clara.
- Usar a hierarquia definida no PRD: data, benefício e formulário; sem elementos concorrendo com o CTA.
- Reaproveitar os tokens atuais e acrescentar apenas os papéis semânticos ausentes para navy suave, cream e divisores.

### 3. Contador e pauta
- Adaptar o contador para mostrar somente dias, horas e minutos.
- Usar `2026-09-17T16:00:00-03:00`, independente do fuso do visitante.
- Trocar “Faltam” por “Começa em” nas últimas 24 horas e destacar o estado em dourado.
- Criar “O que será discutido” com os seis textos fornecidos em cards de mesma altura, grade 3/2/1 e movimentos discretos já usados pela página.

### 4. Formulário e confirmação
- Manter os quatro campos e o envio atual.
- Adicionar validação em tempo real para e-mail e WhatsApp, máscara `(00) 00000-0000` e preservação dos dados em caso de erro.
- Exibir spinner e bloquear o botão durante o envio, com o CTA “Garantir minha vaga em 17/09”.
- Substituir o card por uma confirmação acessível após o sucesso, com os textos definidos.
- Incluir “Adicionar à agenda”, gerando `.ics` de 90 minutos com horário UTC equivalente e dados do evento, e “Compartilhar no WhatsApp” com texto codificado.
- Manter o aviso de privacidade e seu link.

### 5. Imagem, SEO e compartilhamento
- Criar uma arte 1200×630 com fundo navy, logo fornecido, data dourada, título e uma das novas fotos do Dr. Leandro, com tratamento editorial e leitura segura em miniatura.
- Armazenar a arte e as imagens escolhidas como assets do projeto.
- Aplicar title, description, canonical, OG/Twitter e schema.org `Event`, incluindo modalidade online, organizador, convidado e oferta gratuita.
- Manter a imagem no conteúdo visual da página de forma discreta ou apenas na arte social, conforme a composição final, sem transformar o hero em um banner fotográfico.

### 6. Estado pós-evento
- Trocar a área de inscrição por um estado de gravação em preparação após 17h30.
- Manter o título da 4ª edição e disponibilizar sua página no acervo.
- Quando o link do YouTube for cadastrado futuramente, o componente existente passa a exibir o player sem nova reformulação.
- Remover todas as menções visíveis a “data a confirmar” e Dr. Juliano desta página e de seus CTAs associados.

## Detalhes técnicos
- A seleção entre próxima edição e acervo será derivada do horário absoluto, sem depender do fuso configurado no navegador.
- A página principal deixará de depender do vídeo e dos textos fixos da 3ª edição.
- O `.ics` continuará usando datas UTC, preservando 16h de Brasília na agenda do participante.
- A imagem social será servida por URL absoluta no domínio oficial.
- Como o site atual é uma aplicação Vite no navegador, os metadados por rota funcionam para buscadores que executam JavaScript; prévias sociais por rota podem depender do fallback estático da hospedagem. Não será alterada a aparência social da página institucional inteira para contornar essa limitação.

## Validação
- Conferir desktop, tablet e celular, inclusive banner compacto, título em duas linhas, grade 3/2/1 e card flutuante.
- Testar contador em estado normal, últimas 24 horas, horário do evento e pós-evento.
- Testar validações, máscara, envio, erro preservando campos, sucesso, download do `.ics` e compartilhamento.
- Confirmar contraste AA do dourado sobre navy e navegação por teclado.
- Verificar que as três edições anteriores continuam intactas no acervo.
- Executar testes seletivos e auditoria mobile de desempenho e acessibilidade, corrigindo problemas dentro do escopo até atingir ou se aproximar do critério acima de 90.
