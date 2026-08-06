// Tipos que espelham o schema futuro do banco (Fase 2).
// Enquanto isso, o conteúdo vive nos arquivos desta pasta.

export type StatusEdicao =
  | "inscricoes-abertas"
  | "data-confirmada"
  | "convidado-confirmado"
  | "em-breve"
  | "tema-em-votacao"
  | "acontecendo-agora"
  | "realizado"
  | "gravacao-disponivel";

export type StatusVideo = "sem-gravacao" | "em-preparacao" | "disponivel";

export interface Aprendizado {
  titulo: string;
  descricao: string;
}

export interface PerguntaFrequente {
  pergunta: string;
  resposta: string;
}

export interface Material {
  titulo: string;
  url: string;
}

export interface Edicao {
  titulo: string;
  slug: string;
  numero: number | null;
  tema: string;
  resumo: string;
  descricao: string;
  /** ISO 8601 — data e horário do encontro */
  dataISO: string | null;
  /** Texto exibido quando ainda não há data definida */
  dataTexto?: string;
  horario: string | null;
  formato: "Online" | "Presencial" | "Híbrido" | null;
  plataforma: string | null;
  status: StatusEdicao;
  participantes: number | null;
  imagemCapa: string | null;
  thumbnail: string | null;
  /** ID do vídeo do YouTube. Vazio = gravação em preparação. */
  youtubeId: string;
  statusVideo: StatusVideo;
  duracao?: string;
  linkInscricao: string;
  /** Typeform de avaliação desta edição. Vazio = formulário em preparação. */
  typeformAvaliacao: string;
  aprendizados: Aprendizado[];
  perguntasFrequentes: PerguntaFrequente[];
  materiais: Material[];
  convidados: string[]; // slugs de especialistas
  categoria: string;
  seoTitulo: string;
  seoDescricao: string;
  publicadoEm: string | null;
}

export interface Especialista {
  nome: string;
  slug: string;
  foto: string | null;
  cargo: string;
  empresa: string;
  minicurriculo: string;
  formacao: string[];
  experiencia: string[];
  areasAtuacao: string[];
  temas: string[];
  /** Contatos só são exibidos quando autorizadoPublicarContatos === true */
  autorizadoPublicarContatos: boolean;
  email: string;
  whatsapp: string;
  site: string;
  linkedin: string;
  instagram: string;
  edicoes: string[]; // slugs de edições
  seoTitulo: string;
  seoDescricao: string;
}

export interface Conteudo {
  titulo: string;
  slug: string;
  resumo: string;
  corpo: string[];
  imagem: string | null;
  autor: string;
  categoria: string;
  dataISO: string;
  tempoLeitura: string;
  edicaoRelacionada: string | null;
  convidadoRelacionado: string | null;
  seoTitulo: string;
  seoDescricao: string;
}
