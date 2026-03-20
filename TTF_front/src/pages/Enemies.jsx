import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import EnemyCard from "../components/EnemyCard";
import "../styles/Enemies.css";

import corvoPraga from "../assets/enemies/corvoPraga.jpeg";
import corvoVigia from "../assets/enemies/corvoVigia.jpeg";
import espiritoPerdicao from "../assets/enemies/espiritoPerdicao.jpeg";
import espiritoVigiado from "../assets/enemies/espiritoVigiado.jpeg";
import ratoCarnical from "../assets/enemies/ratoCarnical.jpeg";
import reiRato from "../assets/enemies/reiRato.jpeg";
import serpenteDevoradora from "../assets/enemies/serpenteDevoradora.jpeg";
import serpenteArquiveneno from "../assets/enemies/serpenteArquiveneno.jpeg";
import zumbiNegro from "../assets/enemies/zumbiNegro.jpeg";
import zumbiSPraga from "../assets/enemies/zumbiSPraga.jpeg";

export default function Enemies() {
  const navigate = useNavigate();
  const [selectedEnemyId, setSelectedEnemyId] = useState(null);

  const enemies = useMemo(
    () => [
      {
        id: 1,
        name: "Enemy 01",
        image: corvoPraga,
        title: "The Fallen Sentinel",
        description:
          "A knight twisted by ancient fire, condemned to guard ruins long after his kingdom vanished.",
      },
      {
        id: 2,
        name: "Enemy 02",
        image: corvoVigia,
        title: "Ashen Beast",
        description:
          "A creature born from soot and bone, roaming grave paths where the dead still whisper.",
      },
      {
        id: 3,
        name: "Enemy 03",
        image: espiritoPerdicao,
        title: "Moon Hollow",
        description:
          "It appears only under pale light, drifting between trees like a memory that hunts.",
      },
      {
        id: 4,
        name: "Enemy 04",
        image: espiritoVigiado,
        title: "Crypt Watcher",
        description:
          "Guardian of sealed tombs, armed with rusted steel and an oath that death could not erase.",
      },
      {
        id: 5,
        name: "Enemy 05",
        image: ratoCarnical,
        title: "Blight Priest",
        description:
          "A preacher of ruin whose prayers summon decay across abandoned sanctuaries.",
      },
      {
        id: 6,
        name: "Enemy 06",
        image: reiRato,
        title: "Drowned Shade",
        description:
          "An apparition tied to drowned marshes, dragging echoes of forgotten souls behind it.",
      },
      {
        id: 7,
        name: "Enemy 07",
        image: serpenteDevoradora,
        title: "Cinder Wolf",
        description:
          "Fast and relentless, its body burns from within like a dying ember refusing to fade.",
      },
      {
        id: 8,
        name: "Enemy 08",
        image: serpenteArquiveneno,
        title: "Stone Mourner",
        description:
          "A heavy and silent presence, moving as though carved from an old cathedral wall.",
      },
      {
        id: 9,
        name: "Enemy 09",
        image: zumbiNegro,
        title: "Veil Stalker",
        description:
          "A lurking figure that hides in mist, striking only when fear has already taken hold.",
      },
      {
        id: 10,
        name: "Enemy 10",
        image: zumbiSPraga,
        title: "Gravebound Lord",
        description:
          "An ancient ruler sustained by cursed flame, feared even by the dead that follow him.",
      },
    ],
    [],
  );

  const selectedEnemy = enemies.find((enemy) => enemy.id === selectedEnemyId);

  const closeSelected = () => {
    setSelectedEnemyId(null);
  };

  return (
    <div
      className="enemies-page"
      onClick={selectedEnemy ? closeSelected : undefined}
    >
      <div className="enemies-overlay" />

      <div className="enemies-content" onClick={(e) => e.stopPropagation()}>
        <div className="enemies-title-box">
          <h1 className="enemies-title">Enemies</h1>
        </div>

        <div className={`enemies-panels ${selectedEnemy ? "is-open" : ""}`}>
          <div
            className={`enemies-grid-wrapper ${selectedEnemy ? "compact" : ""}`}
          >
            <div className="enemies-grid">
              {enemies.map((enemy) => (
                <EnemyCard
                  key={enemy.id}
                  enemy={enemy}
                  isSelected={selectedEnemyId === enemy.id}
                  onClick={() => setSelectedEnemyId(enemy.id)}
                />
              ))}
            </div>
          </div>

          {selectedEnemy && (
            <div
              className="enemy-details-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="enemy-close-button"
                onClick={closeSelected}
              >
                Close
              </button>

              <div className="enemy-preview">
                <img
                  src={selectedEnemy.image}
                  alt={selectedEnemy.name}
                  className="enemy-preview-image"
                />
              </div>

              <div className="enemy-description-box">
                <h2 className="enemy-description-title">
                  {selectedEnemy.title}
                </h2>
                <p className="enemy-description-text">
                  {selectedEnemy.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {!selectedEnemy && (
          <button
            className="enemies-back-button"
            onClick={() => navigate("/insight")}
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
}
