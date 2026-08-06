import type { Edicao } from "./types";
import convite from "@/assets/convite-split-payment.jpg";


export const edicoes: Edicao[] = [
  {
    titulo: "Split Payment: os impactos no caixa e na rotina das empresas",
    slug: "split-payment",
    numero: 1,
    tema: "Split Payment",
    resumo:
      "Como a nova forma de recolhimento de tributos poderá impactar o fluxo de caixa, a operação financeira e a rotina das empresas.",
    descricao:
      "Uma conversa entre a SMR Assessoria Contábil, a Dra. Daniela Marinho e aproximadamente 50 empresários sobre uma das principais mudanças trazidas pela Reforma Tributária. O encontro foi marcado por perguntas, interação e troca de experiências sobre o que muda no dia a dia das empresas.",
    dataISO: "2026-08-06T16:00:00-03:00",
    horario: "16h",
    formato: "Híbrido",
    plataforma: "Transmissão ao vivo e presencial no escritório SMR",
    status: "realizado",
    participantes: 50,
    imagemCapa: convite,
    thumbnail: convite,

    youtubeId: "",
    statusVideo: "em-preparacao",
    linkInscricao: "",
    typeformAvaliacao: "",
    aprendizados: [
      {
        titulo: "Impacto no fluxo de caixa",
        descricao:
          "O Split Payment poderá alterar o momento em que parte dos tributos sai do caixa da empresa.",
      },
      {
        titulo: "Processos financeiros",
        descricao:
          "Empresas precisarão revisar sistemas, recebimentos, conciliações e rotinas administrativas.",
      },
      {
        titulo: "Preparação antecipada",
        descricao:
          "Entender as mudanças antes da implantação ajuda a reduzir riscos e decisões de última hora.",
      },
      {
        titulo: "Visão contábil e jurídica",
        descricao:
          "A integração entre contabilidade, gestão e orientação jurídica será essencial durante a transição.",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "O que é o Split Payment?",
        resposta:
          "É uma forma de recolhimento em que parte do valor pago em uma operação é direcionada diretamente ao pagamento dos tributos, em vez de transitar integralmente pelo caixa da empresa.",
      },
      {
        pergunta: "Isso muda alguma coisa hoje na minha empresa?",
        resposta:
          "A mudança acontece de forma gradual, junto com a implantação da Reforma Tributária. O que já vale a pena fazer agora é revisar sistemas, prazos de recebimento e projeções de caixa.",
      },
      {
        pergunta: "Como a SMR pode ajudar nessa transição?",
        resposta:
          "Acompanhando as mudanças, traduzindo o que afeta a sua operação e ajustando rotinas contábeis e financeiras antes que a mudança chegue.",
      },
    ],
    materiais: [],
    convidados: ["daniela-marinho"],
    categoria: "Tributário",
    seoTitulo: "Split Payment: veja a primeira Roda de Conversa SMR",
    seoDescricao:
      "Assista à conversa da SMR com a Dra. Daniela Marinho sobre os impactos do Split Payment no caixa e na rotina das empresas.",
    publicadoEm: "2026-08-06",
  },
];

export const getEdicao = (slug: string) => edicoes.find((e) => e.slug === slug);

const statusRealizados: Edicao["status"][] = [
  "realizado",
  "gravacao-disponivel",
];

export const edicoesRealizadas = edicoes.filter((e) =>
  statusRealizados.includes(e.status)
);

export const proximasEdicoes = edicoes.filter(
  (e) => !statusRealizados.includes(e.status)
);

export const edicaoMaisRecente = edicoesRealizadas[0] ?? null;

export const rotuloStatus: Record<Edicao["status"], string> = {
  "inscricoes-abertas": "Inscrições abertas",
  "data-confirmada": "Data confirmada",
  "convidado-confirmado": "Convidado confirmado",
  "em-breve": "Em breve",
  "tema-em-votacao": "Tema em votação",
  "acontecendo-agora": "Acontecendo agora",
  realizado: "Encontro realizado",
  "gravacao-disponivel": "Gravação disponível",
};

export const formatarData = (iso: string | null, texto?: string) => {
  if (!iso) return texto ?? "Data a definir";
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  });
};
