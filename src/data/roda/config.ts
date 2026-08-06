// Configuração central do hub Roda de Conversa SMR.
// Para trocar um formulário, um vídeo ou um contato, basta editar aqui.

export const rodaConfig = {
  nomeProjeto: "Roda de Conversa SMR",
  assinatura: "Conhecimento prático para decisões empresariais mais seguras.",
  siteUrl: "https://smrcontabil.com.br",

  // WhatsApp oficial da SMR (somente números, com DDI)
  whatsapp: "551144360780",
  email: "contato@smrcontabil.com.br",

  mensagensWhatsapp: {
    convites:
      "Olá, equipe SMR. Gostaria de receber informações sobre as próximas edições da Roda de Conversa.",
    falarComSmr:
      "Olá, equipe SMR. Gostaria de falar com vocês sobre a Roda de Conversa.",
    proximoEncontro:
      "Olá, equipe SMR. Quero participar do próximo encontro da Roda de Conversa.",
  },

  // Typeforms — cole a URL completa. Vazio exibe o estado "formulário em preparação".
  typeforms: {
    avaliacao: "",
    sugestaoTema: "",
    disponibilidade: "",
    inscricao: "",
  },
} as const;

export const whatsappUrl = (mensagem: string) =>
  `https://wa.me/${rodaConfig.whatsapp}?text=${encodeURIComponent(mensagem)}`;
