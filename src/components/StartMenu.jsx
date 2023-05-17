import { PrimaryButton } from "./PrimaryButton";

import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
export function StartMenu({ changeDifficulty }) {
  return (
    <section>
      <h2>Don't click on the same colour!</h2>
      <p>Ready to Play?</p>
      <div>
        <PrimaryButton
          onClick={changeDifficulty}
          text='Easy'
          icon={<BsStar />}
        />
        <PrimaryButton
          onClick={changeDifficulty}
          text='Medium'
          icon={<BsStarHalf />}
        />
        <PrimaryButton
          onClick={changeDifficulty}
          text='Hard'
          icon={<BsStarFill />}
        />
      </div>
    </section>
  );
}
