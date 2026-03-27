import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/MapDetail.css";

export default function MapDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [map, setMap] = useState(null);

  useEffect(() => {
    async function fetchMap() {
      try {
        const res = await fetch(`http://localhost:3001/api/maps/${id}`);
        const data = await res.json();

        setMap({
          ...data,
          image: `/maps/${data.image}`,
        });
      } catch (error) {
        console.error("Erro ao buscar mapa:", error);
      }
    }

    fetchMap();
  }, [id]);

  if (!map) {
    return <div style={{ color: "white" }}>Carregando...</div>;
  }

  return (
    <div
      className="map-detail-page"
      style={{ backgroundImage: `url(${map.image})` }}
    >
      <div className="map-detail-overlay" />

      <div className="map-detail-content">
        <h1 className="map-detail-title">{map.title}</h1>

        <div className="map-detail-text-box">
          <p>{map.description}</p>
        </div>

        <button className="map-detail-back" onClick={() => navigate("/maps")}>
          Back
        </button>
      </div>
    </div>
  );
}
