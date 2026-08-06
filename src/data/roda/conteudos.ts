import type { Conteudo } from "./types";

export const conteudos: Conteudo[] = [
  {
    titulo: "O que é Split Payment, em linguagem de empresário",
    slug: "o-que-e-split-payment",
    resumo:
      "Uma explicação direta sobre a nova forma de recolhimento de tributos e por que ela mexe com o caixa da sua empresa.",
    corpo: [
      "Split Payment é, na prática, a separação automática da parte do tributo no momento em que uma operação é paga. Em vez de o valor inteiro entrar no caixa da empresa e o imposto ser recolhido depois, parte do pagamento já segue direto para o tributo.",
      "Para o empresário, a pergunta que importa não é técnica: é quando o dinheiro entra e quando ele sai. Se parte do tributo sai antes, a projeção de caixa muda, mesmo que o valor total pago no ano seja parecido.",
      "O que dá para fazer agora: revisar prazos de recebimento, conversar com quem cuida do sistema financeiro e simular como ficaria o caixa com essa separação acontecendo na entrada.",
    ],
    imagem: null,
    autor: "SMR Assessoria Contábil",
    categoria: "Tributário",
    dataISO: "2026-08-06",
    tempoLeitura: "4 min de leitura",
    edicaoRelacionada: "split-payment",
    convidadoRelacionado: "daniela-marinho",
    seoTitulo: "O que é Split Payment | SMR Assessoria Contábil",
    seoDescricao:
      "Entenda em linguagem simples o que é o Split Payment e como a mudança pode afetar o caixa da sua empresa.",
  },
  {
    titulo: "Resumo da primeira Roda de Conversa SMR",
    slug: "resumo-primeira-roda-de-conversa",
    resumo:
      "Aproximadamente 50 empresários, uma convidada especialista e uma conversa prática sobre o que muda com a Reforma Tributária.",
    corpo: [
      "A primeira edição da Roda de Conversa SMR aconteceu em 6 de agosto de 2026, às 16h, pelo Google Meet, e reuniu cerca de 50 empresários.",
      "O tema de estreia foi o Split Payment, com a participação da Dra. Daniela Marinho, da Marinho Advogados Associados, trazendo a visão jurídica e empresarial da mudança.",
      "Ficaram quatro pontos centrais: impacto no fluxo de caixa, revisão de processos financeiros, preparação antecipada e a integração entre contabilidade, gestão e orientação jurídica durante a transição.",
      "O projeto continua. Os próximos temas serão construídos a partir das dúvidas dos empresários parceiros da SMR.",
    ],
    imagem: null,
    autor: "SMR Assessoria Contábil",
    categoria: "Atualizações da SMR",
    dataISO: "2026-08-07",
    tempoLeitura: "3 min de leitura",
    edicaoRelacionada: "split-payment",
    convidadoRelacionado: null,
    seoTitulo: "Resumo da primeira Roda de Conversa SMR",
    seoDescricao:
      "O que ficou da primeira edição da Roda de Conversa SMR sobre Split Payment, com a Dra. Daniela Marinho.",
  },
  {
    titulo: "O que o empresário precisa acompanhar na Reforma Tributária",
    slug: "o-que-acompanhar-na-reforma-tributaria",
    resumo:
      "Os pontos que merecem atenção agora, sem precisar dominar o vocabulário técnico da mudança.",
    corpo: [
      "A Reforma Tributária muda mais do que alíquotas: muda rotinas, sistemas, prazos e a forma como o tributo circula dentro da operação.",
      "Três frentes concentram a maior parte do impacto no dia a dia: como a empresa emite e registra suas operações, como recebe dos clientes e como projeta o caixa nos próximos meses.",
      "A recomendação prática é simples: acompanhe as mudanças com quem cuida da sua contabilidade, com antecedência, e trate cada ajuste como uma decisão de gestão — não apenas como uma obrigação acessória.",
    ],
    imagem: null,
    autor: "SMR Assessoria Contábil",
    categoria: "Gestão",
    dataISO: "2026-08-10",
    tempoLeitura: "5 min de leitura",
    edicaoRelacionada: "split-payment",
    convidadoRelacionado: null,
    seoTitulo:
      "Reforma Tributária: o que o empresário precisa acompanhar | SMR",
    seoDescricao:
      "Os pontos da Reforma Tributária que impactam a rotina, o caixa e as decisões da sua empresa.",
  },
];

export const getConteudo = (slug: string) =>
  conteudos.find((c) => c.slug === slug);

export const categoriasConteudo = Array.from(
  new Set(conteudos.map((c) => c.categoria))
);

export const formatarDataConteudo = (iso: string) =>
  new Date(`${iso}T12:00:00-03:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
