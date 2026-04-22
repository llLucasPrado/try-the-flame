import { useNavigate, useParams } from "react-router-dom";
import "../styles/HeroDetail.css";

const heroesData = {
  guerreiro: {
    name: "Aldric",
    image: "/heroes/guerreiro.png",
    description:
      "Aldric não se lembra de quando começou. Apenas de que… não podia falhar. Outrora, foi um cavaleiro. Jurou proteger um reino que hoje já não existe. Jurou manter a ordem… custe o que custar. Quando encontrou a chama da vontade, ele entendeu. O mundo era caótico. Fraco. Instável. E alguém precisava impor direção. Aldric tomou para si esse fardo. Ergueu muralhas. Criou leis. Eliminou tudo que ameaçasse sua visão de ordem. E, pouco a pouco… deixou de proteger. Passou a controlar. Ele não busca poder. Ele acredita que já o possui. O que Aldric busca… é um mundo onde nada mais possa desafiar sua vontade. E para isso, ele guarda a chama como um rei guarda sua coroa. Inabalável. Inquestionável. Eterno. Ele não luta por ambição. Ele luta porque acredita… que sem ele, tudo desmorona.",
  },
  arqueira: {
    name: "Lyra",
    image: "/heroes/arqueira.png",
    description:
      "Lyra nunca acreditou nas lendas. Mas aprendeu a sobreviver com elas. Cresceu entre ruínas e mentiras… ouvindo histórias sobre as chamas. Sobre poder. Sobre eternidade. Ela não acreditava. Até ver a morte de perto. Não como fim… mas como ausência. Vazio. Quando encontrou a chama, ela entendeu algo que poucos compreendem. A morte não é o inimigo. O esquecimento é. Lyra não busca poder. Ela busca significado. Cada flecha disparada… cada passo nas sombras… é um esforço para não desaparecer como tantos outros. Ela guarda a chama não por devoção… mas por escolha. Porque, para ela, controlar a morte… é a única forma de garantir que sua existência não será apagada. Silenciosa. Precisa. Lyra não luta por glória. Ela luta para ser lembrada.",
  },
  anao: {
    name: "Brom",
    image: "/heroes/anao.png",
    description:
      "Brom já perdeu tudo. Seu povo. Seu lar. Seu nome… quase esquecido pelo tempo. Ele cavou fundo demais. Nas profundezas, encontrou algo que pulsava. Algo vivo. A chama. Mas não era uma chama comum. Ela não queimava. Ela crescia. Se espalhava. Consumindo… e ao mesmo tempo criando. Brom acreditou ter encontrado uma forma de restaurar o que havia sido perdido. Trazer de volta sua linhagem. Reerguer seu povo. Mas a vida que a chama oferece… não é a mesma que foi levada. Ela distorce. Ela mantém… mas nunca devolve. Ainda assim, Brom se recusa a aceitar. Ele protege a chama com tudo que lhe resta. Pois, no fundo, ele ainda acredita… Que pode trazer de volta aquilo que o mundo tomou dele. Mesmo que, para isso… precise ignorar no que essas coisas se tornaram.",
  },
};

export default function HeroDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const hero = heroesData[id];

  if (!hero) {
    return (
      <div className="hero-detail-page">
        <div className="hero-detail-overlay" />
        <div className="hero-detail-content">
          <button
            className="hero-detail-back"
            onClick={() => navigate("/heroes")}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-detail-page">
      <div className="hero-detail-overlay" />

      <div className="hero-detail-content">
        <div className="hero-detail-panels">
          <div className="hero-detail-image-box">
            <img
              src={hero.image}
              alt={hero.name}
              className="hero-detail-image"
            />
          </div>

          <div className="hero-detail-text-box">
            <p>{hero.description}</p>
          </div>
        </div>

        <button
          className="hero-detail-back"
          onClick={() => navigate("/heroes")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
