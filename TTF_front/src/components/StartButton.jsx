export default function StartButton({ text, onClick }) {
  return (
    <button className="start-button" onClick={onClick}>
      {text}
    </button>
  );
}
