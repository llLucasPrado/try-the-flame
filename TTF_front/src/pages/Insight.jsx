import { useNavigate } from "react-router-dom";
import HoverCard from "../components/HoverCard";
import "../styles/Insight.css";

import worldImg from "../assets/cards/world.jpeg";
import enemiesImg from "../assets/cards/enemies.jpeg";
import mapsImg from "../assets/cards/maps.jpeg";
import heroesImg from "../assets/cards/heroes.jpeg";

export default function Insight() {
  const navigate = useNavigate();

  return (
    <div className="insight-page">
      <div className="insight-content">
        <div className="insight-title-box">
          <h1 className="insight-title">Want to try it?</h1>
        </div>

        <div className="insight-grid">
          <HoverCard
            label="World"
            image={worldImg}
            className="world-card"
            onClick={() => navigate("/world")}
          />

          <div className="right-cards">
            <HoverCard
              label="Enemies"
              image={enemiesImg}
              onClick={() => navigate("/enemies")}
            />
            <HoverCard label="Maps" image={mapsImg} onClick={() => navigate("/maps")} />
            <HoverCard label="Heroes" image={heroesImg} onClick={() => navigate("/heroes")} />
          </div>
        </div>

        <button className="go-back-button" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
}
