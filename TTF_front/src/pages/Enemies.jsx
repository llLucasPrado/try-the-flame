import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EnemyCard from "../components/EnemyCard";
import "../styles/Enemies.css";

export default function Enemies() {
  const navigate = useNavigate();
  const [selectedEnemyId, setSelectedEnemyId] = useState(null);
  const [enemies, setEnemies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEnemies() {
      try {
        const response = await fetch("http://localhost:3001/api/enemies");
        const data = await response.json();

        const formattedEnemies = data.map((enemy) => ({
          ...enemy,
          image: `/enemies/${enemy.image}`,
        }));

        setEnemies(formattedEnemies);
      } catch (error) {
        console.error("Erro ao buscar inimigos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEnemies();
  }, []);

  const selectedEnemy = enemies.find((enemy) => enemy._id === selectedEnemyId);

  const closeSelected = () => {
    setSelectedEnemyId(null);
  };

  if (loading) {
    return <div style={{ color: "white" }}>Carregando...</div>;
  }

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
                  key={enemy._id}
                  enemy={enemy}
                  isSelected={selectedEnemyId === enemy._id}
                  onClick={() => setSelectedEnemyId(enemy._id)}
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
