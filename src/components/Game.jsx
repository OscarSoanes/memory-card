import { useEffect, useRef } from "react";
import { Cell } from "./Cell";

export function Game({ colours, cellClick, shuffleTheColours, pressed }) {
  const didMountRef = useRef(false);

  useEffect(() => {
    console.log("use effect");
    if (didMountRef.current) {
      console.log("run");
      return shuffleTheColours();
    }
    didMountRef.current = true;
  }, [pressed]);

  return (
    <div className='grid gap-4 game'>
      {colours.map((colour) => (
        <Cell key={colour.id} colour={colour} onClick={cellClick} />
      ))}
    </div>
  );
}
