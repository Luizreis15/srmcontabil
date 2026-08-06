import { Helmet } from "react-helmet-async";
import { rodaConfig } from "@/data/roda/config";

interface SeoProps {
  titulo: string;
  descricao: string;
  path: string;
  tipo?: "website" | "article";
  imagem?: string | null;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function Seo({
  titulo,
  descricao,
  path,
  tipo = "website",
  imagem,
  jsonLd,
}: SeoProps) {
  const url = `${rodaConfig.siteUrl}${path}`;
  return (
    <Helmet>
      <title>{titulo}</title>
      <meta name="description" content={descricao} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={titulo} />
      <meta property="og:description" content={descricao} />
      <meta property="og:type" content={tipo} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="pt_BR" />
      {imagem ? <meta property="og:image" content={imagem} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titulo} />
      <meta name="twitter:description" content={descricao} />
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
