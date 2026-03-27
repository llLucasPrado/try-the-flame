import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Maps.css";

const mapOrder = ["cemiterio.png", "pantano.png", "castelo.png"];

export default function Maps() {
  const navigate = useNavigate();
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMaps() {
      try {
        const response = await fetch("http://localhost:3001/api/maps");
        const data = await response.json();

        const formatted = data
          .map((map) => ({
            ...map,
            image: `/maps/${map.image}`,
          }))
          .sort(
            (a, b) =>
              mapOrder.indexOf(a.image.split("/").pop()) -
              mapOrder.indexOf(b.image.split("/").pop())
          );

        setMaps(formatted);
      } catch (err) {
        console.error("Erro ao buscar mapas:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMaps();
  }, []);

  if (loading) {
    return <div style={{ color: "white" }}>Carregando...</div>;
  }

  return (
    <div className="maps-page">
      <div className="maps-overlay" />

      <div className="maps-content">
        <div className="maps-container">
          {maps.map((map) => (
            <div
              key={map._id}
              className="map-card"
              onClick={() => navigate(`/maps/${map._id}`)}
            >
              <img src={map.image} alt={map.name} />
            </div>
          ))}
        </div>

        <button
          className="maps-back-button"
          onClick={() => navigate("/insight")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
