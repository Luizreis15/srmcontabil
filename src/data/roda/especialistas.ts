import type { Especialista } from "./types";
import danielaFoto from "@/assets/daniela-marinho.webp";
import leandroFoto from "@/assets/drleandro.jpg.asset.json";

export const especialistas: Especialista[] = [
  {
    nome: "Dra. Daniela Marinho",
    slug: "daniela-marinho",
    foto: danielaFoto,
    cargo: "Advogada tributarista e sócia fundadora",
    empresa: "Marinho Advogados Associados",
    minicurriculo:
      "Advogada tributarista, professora universitária e sócia fundadora do Marinho Advogados Associados. Atua em Direito Tributário e Empresarial nas esferas consultiva, administrativa e judicial, com ênfase em planejamento tributário, recuperação de tributos e redução da carga tributária. Mestre e Doutora em Direito, é também palestrante e autora de obras jurídicas voltadas a empresários.",
    formacao: [
      "Graduada em Direito pelo UNIVEM — Centro Universitário Eurípides de Marília",
      "Especialista em Direito Empresarial com ênfase em Direito Tributário (UEL)",
      "Mestre em Direito Negocial, com concentração em relações empresariais (UEL)",
      "Doutora em Direito pela UNIMAR — Relações Empresariais, Desenvolvimento e Demandas Sociais",
    ],
    experiencia: [
      "Sócia fundadora do Marinho Advogados Associados",
      "Professora universitária de Direito Empresarial, Tributário e Negócios Jurídicos",
      "Professora em cursos de especialização em Direito Tributário",
      "Vice-presidente da 31ª Subseção da OAB/SP, em Marília",
      "Assessora jurídica de sindicatos do comércio varejista e de bares e restaurantes",
      "Organizadora do livro “Descomplicando o Direito para Empreendedores”",
      "Coautora do livro “Atuação Empresarial no Estado Democrático de Direito”",
    ],
    areasAtuacao: [
      "Direito Tributário",
      "Direito Empresarial",
      "Planejamento tributário",
      "Recuperação de tributos",
      "Reforma Tributária",
    ],
    temas: [
      "Split Payment",
      "Impactos jurídicos da Reforma Tributária",
      "Planejamento tributário para empresas",
      "Recuperação e redução da carga tributária",
    ],
    autorizadoPublicarContatos: false,
    email: "",
    whatsapp: "",
    site: "",
    linkedin: "",
    instagram: "",
    edicoes: ["split-payment", "simples-nacional-reforma"],
    seoTitulo: "Dra. Daniela Marinho | Especialistas da Roda de Conversa SMR",
    seoDescricao:
      "Advogada tributarista, professora universitária e sócia fundadora do Marinho Advogados Associados, convidada da primeira Roda de Conversa SMR sobre Split Payment.",
  },
  {
    nome: "Dr. Leandro Jesuíno",
    slug: "leandro-jesuino",
    foto: leandroFoto.url,
    cargo: "Advogado empresarial trabalhista (atuação patronal)",
    empresa: "",
    minicurriculo:
      "Advogado empresarial com atuação trabalhista patronal, dedicado à prevenção de passivos e à estruturação de rotinas seguras de gestão de pessoas em empresas de pequeno e médio porte.",
    formacao: [],
    experiencia: [],
    areasAtuacao: [
      "Direito do Trabalho empresarial",
      "Prevenção de passivo trabalhista",
      "Compliance de gestão de pessoas",
    ],
    temas: [
      "eSocial",
      "PGR e saúde mental",
      "Contrato PJ x CLT",
      "Fiscalização do trabalho",
    ],
    autorizadoPublicarContatos: false,
    email: "",
    whatsapp: "",
    site: "",
    linkedin: "",
    instagram: "",
    edicoes: ["gestao-trabalhista"],
    seoTitulo: "Dr. Leandro Jesuíno | Especialistas da Roda de Conversa SMR",
    seoDescricao:
      "Advogado empresarial trabalhista, convidado da Roda de Conversa SMR sobre gestão trabalhista estratégica e proteção para empresas.",
  },
];

export const getEspecialista = (slug: string) =>
  especialistas.find((e) => e.slug === slug);
