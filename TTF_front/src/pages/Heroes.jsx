import { useNavigate } from "react-router-dom";
import "../styles/Heroes.css";

export default function Heroes() {
  const navigate = useNavigate();

  return (
    <div className="heroes-page">
      <div className="heroes-overlay" />

      <div className="heroes-content">
        <div className="heroes-container">
          <div className="hero-card" onClick={() => navigate("/heroes/guerreiro")}>
            <img src="/heroes/guerreiro.png" alt="Guerreiro" />
          </div>

          <div className="hero-card" onClick={() => navigate("/heroes/arqueira")}>
            <img src="/heroes/arqueira.png" alt="Arqueira" />
          </div>

          <div className="hero-card" onClick={() => navigate("/heroes/anao")}>
            <img src="/heroes/anao.png" alt="Anão" />
          </div>
        </div>

        <button
          className="heroes-back-button"
          onClick={() => navigate("/insight")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
