import { PrimaryButton } from "./PrimaryButton";

import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
export function StartMenu({ changeDifficulty }) {
  return (
    <section className='mx-auto block w-fit p-4 mt-8 rounded-xl drop-shadow-md bg-lSecondaryButton dark:bg-dSecondaryButton text-center'>
      <h2 className='text-xl sm:text-2xl'>Don't click on the same colour!</h2>
      <p className='mt-1 sm:text-xl'>Ready to Play?</p>
      <div className='flex flex-col justify-center gap-4 mt-8 items-center sm:flex-row'>
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
