import { Cell } from "./Cell";

export function Game({ colours }) {
  return (
    <div>
      {colours.map((colour) => (
        <Cell key={colour.id} colour={colour} />
      ))}
    </div>
  );
}
