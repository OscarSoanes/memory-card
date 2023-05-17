import { useState } from "react";
import ColourDat from "../colours.json";

import { StartMenu } from "./StartMenu";
import { Game } from "./Game";

export function Main() {
  const [difficulty, setDifficulty] = useState(undefined);
  const [colours, setColours] = useState(undefined);
  const [pressed, setPressed] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);

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
      setGameLost(true);
      return;
    }
    setScore(score + 1);

    if (
      (difficulty === "Easy" && score >= 7) ||
      (difficulty === "Medium" && score >= 11) ||
      (difficulty === "Hard" && score >= 15)
    ) {
      setGameWon(true);
      return;
    }

    const temp = pressed.concat(id);

    setPressed(temp);
  }

  function shuffleTheColours() {
    setColours(shuffleArray([...colours]));
  }

  return (
    <main>
      {!difficulty && <StartMenu changeDifficulty={changeDifficulty} />}
      {colours && <p>Current Score: {score}. Best Score: 10</p>}
      {colours && !gameLost && !gameWon && (
        <Game
          colours={colours}
          cellClick={handleCellClick}
          pressed={pressed}
          shuffleTheColours={shuffleTheColours}
        />
      )}
      {gameLost && <div>U LOST</div>}
      {gameWon && <div>U WON WOO</div>}
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
