export default function HoverCard({ label, image, className = "" }) {
  return (
    <div
      className={`hover-card ${className}`}
      style={{ "--card-bg": `url(${image})` }}
    >
      <div className="hover-card-overlay">
        <span className="hover-card-title">{label}</span>
      </div>
    </div>
  );
}
