import { Seo } from "@/components/roda/Seo";
import { rodaConfig } from "@/data/roda/config";

const bloco = "mt-8";

const Privacidade = () => (
  <>
    <Seo
      titulo="Política de privacidade | SMR Assessoria Contábil"
      descricao="Como a SMR Assessoria Contábil trata os dados coletados na Roda de Conversa e nos formulários do site."
      path="/privacidade"
    />

    <section className="bg-navy-deep text-white px-5 md:px-8 py-14">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-extrabold">
          Política de privacidade
        </h1>
        <p className="mt-3 text-white/85">
          Como tratamos os dados coletados nas páginas da Roda de Conversa SMR.
        </p>
      </div>
    </section>

    <section className="roda-section">
      <div className="max-w-3xl mx-auto text-foreground/85 leading-relaxed">
        <div className={bloco}>
          <h2 className="font-display text-xl font-bold text-foreground">
            Quais dados coletamos
          </h2>
          <p className="mt-3">
            Coletamos apenas os dados que você informa voluntariamente nos
            formulários da Roda de Conversa: avaliação das edições, sugestão de
            temas, pesquisa de disponibilidade e inscrição em próximos encontros.
            Em geral, isso inclui nome, empresa e, quando você quiser informar,
            e-mail ou telefone.
          </p>
        </div>

        <div className={bloco}>
          <h2 className="font-display text-xl font-bold text-foreground">
            Para que usamos
          </h2>
          <p className="mt-3">
            Usamos essas informações para melhorar os encontros, definir os
            próximos temas e horários, responder às suas dúvidas e, quando você
            solicitar, enviar convites e conteúdos. Não vendemos nem
            compartilhamos seus dados com terceiros para fins comerciais.
          </p>
        </div>

        <div className={bloco}>
          <h2 className="font-display text-xl font-bold text-foreground">
            Consentimento e comunicações
          </h2>
          <p className="mt-3">
            Você não é incluído em nenhuma lista de comunicação automaticamente.
            O envio de convites e conteúdos só acontece após a sua solicitação
            expressa e pode ser interrompido a qualquer momento — basta pedir
            pelo WhatsApp ou por e-mail.
          </p>
        </div>

        <div className={bloco}>
          <h2 className="font-display text-xl font-bold text-foreground">
            Depoimentos
          </h2>
          <p className="mt-3">
            Comentários enviados nos formulários só são publicados como
            depoimento com a sua autorização específica, marcada no próprio
            formulário.
          </p>
        </div>

        <div className={bloco}>
          <h2 className="font-display text-xl font-bold text-foreground">
            Serviços externos
          </h2>
          <p className="mt-3">
            Os formulários são hospedados pelo Typeform e as gravações são
            exibidas pelo YouTube. Esses serviços possuem políticas próprias de
            privacidade. O vídeo do YouTube só é carregado depois que você clica
            para assistir.
          </p>
        </div>

        <div className={bloco}>
          <h2 className="font-display text-xl font-bold text-foreground">
            Dados dos convidados
          </h2>
          <p className="mt-3">
            Contatos profissionais de especialistas convidados só são publicados
            após autorização expressa do próprio convidado.
          </p>
        </div>

        <div className={bloco}>
          <h2 className="font-display text-xl font-bold text-foreground">
            Seus direitos
          </h2>
          <p className="mt-3">
            Você pode solicitar acesso, correção ou exclusão dos seus dados a
            qualquer momento pelo e-mail{" "}
            <a
              href={`mailto:${rodaConfig.email}`}
              className="text-primary underline hover:text-gold-ink"
            >
              {rodaConfig.email}
            </a>{" "}
            ou pelo WhatsApp (11) 4436-0780.
          </p>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          SMR Assessoria Contábil — Rua Coronel Fernando Prestes, 350, Sala 131,
          Centro, Santo André/SP, CEP 09020-110.
        </p>
      </div>
    </section>
  </>
);

export default Privacidade;
