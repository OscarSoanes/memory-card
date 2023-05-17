import { useState } from "react";

import { StartMenu } from "./StartMenu";

export function Main() {
  const [difficulty, setDifficulty] = useState(undefined);

  function changeDifficulty(event) {
    setDifficulty(event.target.value);
  }

  return (
    <main>
      {!difficulty && <StartMenu changeDifficulty={changeDifficulty} />}
    </main>
  );
}
