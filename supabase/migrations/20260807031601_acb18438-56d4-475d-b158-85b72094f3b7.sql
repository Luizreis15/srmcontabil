CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Usuarios veem seus proprios papeis"
ON public.user_roles FOR SELECT TO authenticated
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.roda_avaliacoes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  edicao_slug text,
  nota smallint NOT NULL,
  mais_util text,
  o_que_faltou text,
  nome text NOT NULL,
  email text NOT NULL,
  empresa text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.roda_avaliacoes TO anon, authenticated;
GRANT SELECT ON public.roda_avaliacoes TO authenticated;
GRANT ALL ON public.roda_avaliacoes TO service_role;
ALTER TABLE public.roda_avaliacoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode enviar avaliacao"
ON public.roda_avaliacoes FOR INSERT TO anon, authenticated
WITH CHECK (
  nota BETWEEN 1 AND 5
  AND length(nome) BETWEEN 2 AND 120
  AND length(email) BETWEEN 5 AND 255
  AND email LIKE '%@%'
  AND (mais_util IS NULL OR length(mais_util) <= 1000)
  AND (o_que_faltou IS NULL OR length(o_que_faltou) <= 1000)
  AND (empresa IS NULL OR length(empresa) <= 160)
);

CREATE POLICY "Admins leem avaliacoes"
ON public.roda_avaliacoes FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.roda_sugestoes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tema text NOT NULL,
  motivo text,
  formato text,
  melhor_momento text,
  nome text NOT NULL,
  email text NOT NULL,
  whatsapp text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.roda_sugestoes TO anon, authenticated;
GRANT SELECT ON public.roda_sugestoes TO authenticated;
GRANT ALL ON public.roda_sugestoes TO service_role;
ALTER TABLE public.roda_sugestoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode sugerir tema"
ON public.roda_sugestoes FOR INSERT TO anon, authenticated
WITH CHECK (
  length(tema) BETWEEN 3 AND 300
  AND length(nome) BETWEEN 2 AND 120
  AND length(email) BETWEEN 5 AND 255
  AND email LIKE '%@%'
  AND (motivo IS NULL OR length(motivo) <= 1000)
  AND (formato IS NULL OR length(formato) <= 60)
  AND (melhor_momento IS NULL OR length(melhor_momento) <= 200)
  AND (whatsapp IS NULL OR length(whatsapp) <= 40)
);

CREATE POLICY "Admins leem sugestoes"
ON public.roda_sugestoes FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));