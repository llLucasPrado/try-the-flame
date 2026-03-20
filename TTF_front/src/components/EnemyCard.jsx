export default function EnemyCard({ enemy, isSelected, onClick }) {
  return (
    <button
      className={`enemy-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      type="button"
    >
      <img src={enemy.image} alt={enemy.name} className="enemy-card-image" />
    </button>
  );
}
