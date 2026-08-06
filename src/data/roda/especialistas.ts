import type { Especialista } from "./types";

export const especialistas: Especialista[] = [
  {
    nome: "Dra. Daniela Marinho",
    slug: "daniela-marinho",
    foto: null,
    cargo: "Advogada",
    empresa: "Marinho Advogados Associados",
    minicurriculo:
      "Advogada da Marinho Advogados Associados e convidada da primeira edição da Roda de Conversa SMR. Nesta edição, contribuiu com uma visão jurídica e empresarial sobre o Split Payment e os impactos da Reforma Tributária na rotina das empresas.",
    formacao: [],
    experiencia: [],
    areasAtuacao: ["Direito empresarial", "Reforma Tributária"],
    temas: ["Split Payment", "Impactos jurídicos da Reforma Tributária"],
    autorizadoPublicarContatos: false,
    email: "",
    whatsapp: "",
    site: "",
    linkedin: "",
    instagram: "",
    edicoes: ["split-payment"],
    seoTitulo: "Dra. Daniela Marinho | Especialistas da Roda de Conversa SMR",
    seoDescricao:
      "Conheça a Dra. Daniela Marinho, advogada da Marinho Advogados Associados e convidada da primeira edição da Roda de Conversa SMR sobre Split Payment.",
  },
];

export const getEspecialista = (slug: string) =>
  especialistas.find((e) => e.slug === slug);
