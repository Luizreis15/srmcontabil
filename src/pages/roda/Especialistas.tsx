import { Seo } from "@/components/roda/Seo";
import { Reveal } from "@/components/roda/Reveal";
import { EspecialistaCard } from "@/components/roda/EspecialistaCard";
import { especialistas } from "@/data/roda/especialistas";

const Especialistas = () => (
  <>
    <Seo
      titulo="Especialistas convidados | Roda de Conversa SMR"
      descricao="Conheça os profissionais convidados que participam da Roda de Conversa SMR e ajudam empresários a entender temas complexos."
      path="/especialistas"
    />

    <section className="bg-navy-deep text-white px-5 md:px-8 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <span className="roda-script text-gold text-3xl">Roda de</span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold">
          Especialistas convidados
        </h1>
        <p className="mt-4 text-white/75 max-w-2xl">
          Profissionais que se sentam à mesa com a SMR e com os empresários para
          traduzir temas complexos em decisões práticas.
        </p>
      </div>
    </section>

    <section className="roda-section">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {especialistas.map((esp, i) => (
          <Reveal key={esp.slug} delay={i * 80}>
            <EspecialistaCard especialista={esp} />
          </Reveal>
        ))}
      </div>
    </section>
  </>
);

export default Especialistas;
