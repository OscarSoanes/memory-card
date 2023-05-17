export function Scoreboard({ message, value }) {
  return (
    <>
      <p>
        {message} Score: <span>{value}</span>
      </p>
    </>
  );
}
