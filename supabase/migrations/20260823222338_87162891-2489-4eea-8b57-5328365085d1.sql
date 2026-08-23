CREATE TABLE public.roda_inscricoes (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  edicao_slug text,
  nome text NOT NULL,
  email text NOT NULL,
  whatsapp text,
  segmento text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.roda_inscricoes TO anon, authenticated;
GRANT SELECT ON public.roda_inscricoes TO authenticated;
GRANT ALL ON public.roda_inscricoes TO service_role;

ALTER TABLE public.roda_inscricoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode se inscrever"
ON public.roda_inscricoes FOR INSERT TO anon, authenticated
WITH CHECK (
  length(nome) >= 2 AND length(nome) <= 120
  AND length(email) >= 5 AND length(email) <= 255 AND email LIKE '%@%'
  AND (whatsapp IS NULL OR length(whatsapp) <= 40)
  AND (segmento IS NULL OR length(segmento) <= 120)
  AND (edicao_slug IS NULL OR length(edicao_slug) <= 120)
);

CREATE POLICY "Admins leem inscricoes"
ON public.roda_inscricoes FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));