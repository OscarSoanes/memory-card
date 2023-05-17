import { Cell } from "./Cell";

export function Game({ colours }) {
  return (
    <div className='grid gap-4 game'>
      {colours.map((colour) => (
        <Cell key={colour.id} colour={colour} />
      ))}
    </div>
  );
}
