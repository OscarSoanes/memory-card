import { PrimaryButton } from "./PrimaryButton";

export function GameOver({ result, onClick }) {
  return (
    <section className='mx-auto w-fit p-8 mt-8 rounded-md drop-shadow-md bg-lSecondaryButton dark:bg-dSecondaryButton flex flex-col items-center'>
      <h2 className='text-xl sm:text-2xl'>You {result}!</h2>
      <p className='mt-1 mb-4 sm:text-xl'>Want to play again?</p>
      <PrimaryButton
        text='Play Again?'
        onClick={onClick}
        title='Play the Game Again?'
      />
    </section>
  );
}
