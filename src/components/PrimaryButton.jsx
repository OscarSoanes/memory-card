export function PrimaryButton({ text, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      value={text}
      className='flex gap-2 items-center p-3 bg-button rounded  text-dPrimary'
    >
      {icon}
      {text}
    </button>
  );
}
