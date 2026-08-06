import type { Especialista } from "./types";
import danielaFoto from "@/assets/daniela-marinho.webp";

export const especialistas: Especialista[] = [
  {
    nome: "Dra. Daniela Marinho",
    slug: "daniela-marinho",
    foto: danielaFoto.url,
    cargo: "Advogada tributarista e sócia fundadora",
    empresa: "Marinho Advogados Associados",
    minicurriculo:
      "Advogada tributarista, professora universitária e sócia fundadora do Marinho Advogados Associados. Atua em Direito Tributário e Empresarial nas esferas consultiva, administrativa e judicial, com ênfase em planejamento tributário, recuperação de tributos e redução da carga tributária. Mestre em Direito Negocial e doutoranda em Direito, é também palestrante e autora de obras jurídicas voltadas a empresários.",
    formacao: [
      "Graduada em Direito pelo UNIVEM — Centro Universitário Eurípides de Marília",
      "Especialista em Direito Empresarial com ênfase em Direito Tributário (UEL)",
      "Mestre em Direito Negocial, com concentração em relações empresariais (UEL)",
      "Doutoranda em Direito pela UNIMAR — Relações Empresariais, Desenvolvimento e Demandas Sociais",
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
    edicoes: ["split-payment"],
    seoTitulo: "Dra. Daniela Marinho | Especialistas da Roda de Conversa SMR",
    seoDescricao:
      "Advogada tributarista, professora universitária e sócia fundadora do Marinho Advogados Associados, convidada da primeira Roda de Conversa SMR sobre Split Payment.",
  },
];

export const getEspecialista = (slug: string) =>
  especialistas.find((e) => e.slug === slug);
