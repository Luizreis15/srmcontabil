import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const DESTINO = "contato@smrcontabil.com.br";

const avaliacaoSchema = z.object({
  tipo: z.literal("avaliacao"),
  edicaoSlug: z.string().max(120).optional().nullable(),
  nota: z.number().int().min(1).max(5),
  maisUtil: z.string().trim().max(1000).optional().nullable(),
  oQueFaltou: z.string().trim().max(1000).optional().nullable(),
  nome: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  empresa: z.string().trim().max(160).optional().nullable(),
});

const sugestaoSchema = z.object({
  tipo: z.literal("sugestao"),
  tema: z.string().trim().min(3).max(300),
  motivo: z.string().trim().max(1000).optional().nullable(),
  formato: z.string().trim().max(60).optional().nullable(),
  melhorMomento: z.string().trim().max(200).optional().nullable(),
  nome: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().max(40).optional().nullable(),
});

const bodySchema = z.discriminatedUnion("tipo", [avaliacaoSchema, sugestaoSchema]);

const vazioParaNulo = (v?: string | null) => (v && v.length > 0 ? v : null);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const parsed = bodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const dados = parsed.data;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    let assunto: string;
    let linhas: [string, string][];

    if (dados.tipo === "avaliacao") {
      const { error } = await supabase.from("roda_avaliacoes").insert({
        edicao_slug: vazioParaNulo(dados.edicaoSlug),
        nota: dados.nota,
        mais_util: vazioParaNulo(dados.maisUtil),
        o_que_faltou: vazioParaNulo(dados.oQueFaltou),
        nome: dados.nome,
        email: dados.email,
        empresa: vazioParaNulo(dados.empresa),
      });
      if (error) throw new Error(error.message);

      assunto = `Nova avaliação da Roda de Conversa (nota ${dados.nota}/5)`;
      linhas = [
        ["Nota", `${dados.nota}/5`],
        ["Edição", dados.edicaoSlug ?? "—"],
        ["O que foi mais útil", dados.maisUtil ?? "—"],
        ["O que faltou", dados.oQueFaltou ?? "—"],
        ["Nome", dados.nome],
        ["E-mail", dados.email],
        ["Empresa", dados.empresa ?? "—"],
      ];
    } else {
      const { error } = await supabase.from("roda_sugestoes").insert({
        tema: dados.tema,
        motivo: vazioParaNulo(dados.motivo),
        formato: vazioParaNulo(dados.formato),
        melhor_momento: vazioParaNulo(dados.melhorMomento),
        nome: dados.nome,
        email: dados.email,
        whatsapp: vazioParaNulo(dados.whatsapp),
      });
      if (error) throw new Error(error.message);

      assunto = `Nova sugestão de tema: ${dados.tema}`;
      linhas = [
        ["Tema", dados.tema],
        ["Por que importa", dados.motivo ?? "—"],
        ["Formato preferido", dados.formato ?? "—"],
        ["Melhor momento", dados.melhorMomento ?? "—"],
        ["Nome", dados.nome],
        ["E-mail", dados.email],
        ["WhatsApp", dados.whatsapp ?? "—"],
      ];
    }

    // Aviso por e-mail — a resposta já está salva mesmo se o envio falhar.
    try {
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "roda-nova-resposta",
          recipientEmail: DESTINO,
          idempotencyKey: `roda-${dados.tipo}-${crypto.randomUUID()}`,
          templateData: { assunto, linhas },
        },
      });
    } catch (e) {
      console.error("Aviso por e-mail não enviado:", e);
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("roda-formulario falhou:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erro inesperado" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
