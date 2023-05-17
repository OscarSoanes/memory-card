export function Cell({ colour }) {
  return (
    <section
      className={"aspect-square rounded-md"}
      style={{ backgroundColor: colour.hex }}
    >
      <h2>{colour.hex}</h2>
      <p>{colour.name}</p>
    </section>
  );
}
