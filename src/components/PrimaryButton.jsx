export function PrimaryButton({ text, onClick, icon }) {
  return (
    <button onClick={onClick} value={text}>
      {icon}
      {text}
    </button>
  );
}
