import { useNavigate } from "react-router-dom";
import "../styles/World.css";

export default function World() {
  const navigate = useNavigate();

  return (
    <div className="world-page">
      <div className="world-overlay" />

      <div className="world-content">
        <div className="world-title-box">
          <h1 className="world-title">Discovering the Flame</h1>
        </div>

        <div className="world-lore-box">
          <p className="world-lore-text">
            Antes de qualquer reino existir… antes da própria morte ter nome… havia apenas o fogo.
            <br />
            <br />
            Não um fogo comum, mas três chamas primordiais.
            Elas não aqueciam… não iluminavam…
            Elas definiam o que era existir.
            <br />
            <br />
            Da primeira, nasceu a vida.
            Da segunda, a morte.
            Da terceira… a vontade.
            <br />
            <br />
            E para protegê-las, surgiram três irmãos.
            <br />
            <br />
            Eles não eram deuses.
            Mas também já não eram humanos.
            <br />
            <br />
            Com o passar das eras, eles se isolaram.
            Cada um levou sua chama para um lugar onde nenhum homem ousaria permanecer.
            <br />
            <br />
            Um se perdeu entre túmulos esquecidos, onde os mortos jamais descansam.
            Outro afundou em uma vila tomada pelo pântano, onde a vida apodrece sem morrer.
            E o último ergueu seu domínio em um castelo imponente, onde a vontade se tornou tirania.
            <br />
            <br />
            Assim nasceu a lenda.
            <br />
            <br />
            Dizem que aquele que reunir as três chamas alcançará vida eterna.
            Outros falam em riquezas incontáveis… poder infinito… domínio sobre todas as coisas.
            <br />
            <br />
            Mas lendas… raramente contam a verdade por completo.
            <br />
            <br />
            Pois as chamas não são apenas poder.
            Elas são fragmentos de uma chave.
            <br />
            <br />
            E essa chave… não foi feita para abrir um tesouro.
            <br />
            <br />
            Muito antes de tudo isso, havia um quarto irmão.
            <br />
            <br />
            Seu nome foi apagado.
            Sua história… enterrada.
            Sua existência… negada.
            <br />
            <br />
            Ele não foi derrotado.
            <br />
            <br />
            Foi banido.
            <br />
            <br />
            Arrancado do mundo… e aprisionado em uma dimensão esquecida pelo tempo.
            <br />
            <br />
            As três chamas restantes não são apenas relíquias.
            São selos.
            <br />
            <br />
            E cada chama reacendida… enfraquece sua prisão.
            <br />
            <br />
            Quando os três irmãos caírem…
            Quando suas chamas forem reunidas…
            <br />
            <br />
            o mundo começará a se distorcer.
            <br />
            <br />
            O castelo deixará de ser apenas pedra e muralha…
            e revelará sua verdadeira forma.
            <br />
            <br />
            Um reflexo corrompido.
            Um abismo.
            <br />
            <br />
            O Castelo Abismal.
            <br />
            <br />
            Um lugar onde o tempo se desfaz…
            e a realidade… deixa de obedecer.
            <br />
            <br />
            Você não é o primeiro a buscar as chamas.
            <br />
            <br />
            Mas pode ser o primeiro a entender.
            <br />
            <br />
            No fim… não se trata de poder.
            Nem de glória.
            <br />
            <br />
            Mas de escolha.
            <br />
            <br />
            Manter o selo…
            <br />
            <br />
            Ou libertar aquilo que nunca deveria ter sido esquecido.

          </p>
        </div>

        <button
          className="world-back-button"
          onClick={() => navigate("/insight")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
