import { useState } from "react";
import ColourDat from "../colours.json";

import { StartMenu } from "./StartMenu";
import { Game } from "./Game";

export function Main() {
  const [difficulty, setDifficulty] = useState(undefined);
  const [colours, setColours] = useState(undefined);
  const [pressed, setPressed] = useState([]);
  const [score, setScore] = useState(0);

  function changeDifficulty(event) {
    setDifficulty(event.target.value);

    let colourSet = shuffleArray([...ColourDat]);

    if (event.target.value === "Easy") {
      colourSet = colourSet.slice(0, 8);
    } else if (event.target.value === "Medium") {
      colourSet = colourSet.slice(0, 12);
    } else {
      colourSet = colourSet.slice(0, 16);
    }

    setColours(colourSet);
  }

  function handleCellClick(id) {
    if (pressed.includes(id)) {
      console.log("Game Over!");
    }
    setScore(score + 1);

    // Handle Win

    const temp = pressed.concat(id);

    setPressed(temp);
  }

  function shuffleTheColours() {
    setColours(shuffleArray([...colours]));
  }

  return (
    <main>
      {!difficulty && <StartMenu changeDifficulty={changeDifficulty} />}
      {colours && <p>Current Score: 0. Best Score: 10</p>}
      {colours && (
        <Game
          colours={colours}
          cellClick={handleCellClick}
          pressed={pressed}
          shuffleTheColours={shuffleTheColours}
        />
      )}
    </main>
  );
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
