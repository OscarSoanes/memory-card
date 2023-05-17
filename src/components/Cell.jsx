export function Cell({ colour }) {
  return (
    <section>
      <h2>{colour.hex}</h2>
      <p>{colour.name}</p>
    </section>
  );
}
