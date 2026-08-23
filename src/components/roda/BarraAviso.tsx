import { useState } from "react";
import { Megaphone, X } from "lucide-react";
import { proximaEdicao, formatarData } from "@/data/roda/edicoes";
import { getEspecialista } from "@/data/roda/especialistas";
import { useFormularioModal } from "@/components/roda/FormularioProvider";

export function BarraAviso() {
  const [visivel, setVisivel] = useState(true);
  const { abrirFormulario } = useFormularioModal();
  const edicao = proximaEdicao;

  if (!visivel || !edicao) return null;

  const convidado = getEspecialista(edicao.convidados[0])?.nome;
  const data = formatarData(edicao.dataISO, edicao.dataTexto);

  return (
    <div className="bg-navy-deep text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 py-2 flex items-center gap-3">
        <Megaphone className="w-4 h-4 text-gold shrink-0" aria-hidden />
        <p className="flex-1 leading-snug">
          <strong className="font-semibold">Próxima edição:</strong> {data}
          {convidado ? ` · ${convidado}` : ""} — {edicao.tema}.{" "}
          <button
            onClick={() =>
              abrirFormulario({
                tipo: "inscricao",
                edicaoSlug: edicao.slug,
                titulo: `Garantir minha vaga — ${edicao.tema}`,
                descricao: "Participação gratuita. Vagas limitadas.",
                evento: "next_event_interest",
              })
            }
            className="font-semibold text-gold underline underline-offset-2 hover:text-white transition-colors"
          >
            Inscrever-se grátis
          </button>
        </p>
        <button
          onClick={() => setVisivel(false)}
          aria-label="Fechar aviso"
          className="p-1 text-white/70 hover:text-white transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
