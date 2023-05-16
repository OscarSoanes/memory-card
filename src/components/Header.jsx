import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

export function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <div>
        <h1>Memory Card Game</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </div>

      <p className='font-bold bg-gradient-to-r from-button to-accent inline-block text-transparent bg-clip-text'>
        Colour Edition
      </p>
    </header>
  );
}
