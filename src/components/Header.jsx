import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

export function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className='pt-8 flex justify-around gap-8 items-center'>
      <div>
        <h1 className='text-2xl sm:text-4xl mb-2'>Memory Card Game</h1>
        <p className='font-bold bg-gradient-to-r from-button to-accent inline-block text-transparent bg-clip-text sm:text-2xl'>
          Colour Edition
        </p>
      </div>
      <button
        onClick={toggleDarkMode}
        className='rounded bg-lSecondaryButton dark:bg-dSecondaryButton p-3 hover:brightness-90 hover:scale-110 dark:hover:brightness-110'
      >
        {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </header>
  );
}
