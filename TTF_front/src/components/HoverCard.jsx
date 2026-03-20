export default function HoverCard({ label, image, className = "", onClick }) {
  return (
    <div
      className={`hover-card ${className}`}
      style={{ "--card-bg": `url(${image})` }}
      onClick={onClick}
    >
      <div className="hover-card-overlay">
        <span className="hover-card-title">{label}</span>
      </div>
    </div>
  );
}
