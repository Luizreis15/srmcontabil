import { useState } from "react";
import { Seo } from "@/components/roda/Seo";
import { Reveal } from "@/components/roda/Reveal";
import { ConteudoCard } from "@/components/roda/ConteudoCard";
import { conteudos, categoriasConteudo } from "@/data/roda/conteudos";
import { cn } from "@/lib/utils";

const Conteudos = () => {
  const [categoria, setCategoria] = useState<string>("Todos");
  const lista =
    categoria === "Todos"
      ? conteudos
      : conteudos.filter((c) => c.categoria === categoria);

  return (
    <>
      <Seo
        titulo="Conteúdos para empresários | SMR Assessoria Contábil"
        descricao="Artigos, resumos e atualizações que ajudam empresários a entender mudanças tributárias, contábeis e de gestão."
        path="/conteudos"
      />

      <section className="bg-navy-deep text-white px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <span className="roda-script text-gold text-3xl">Roda de</span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold">
            Informação que ajuda sua empresa a decidir melhor
          </h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            Conteúdos práticos, em linguagem de empresário, ligados aos temas das
            nossas conversas.
          </p>
        </div>
      </section>

      <section className="roda-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {["Todos", ...categoriasConteudo].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  categoria === cat
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lista.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70}>
                <ConteudoCard conteudo={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Conteudos;
