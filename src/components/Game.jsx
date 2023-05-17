export function Game({ colours }) {
  return (
    <div>
      {colours.map((colour) => (
        <p key={colour.id}>{colour.name}</p>
      ))}
    </div>
  );
}
