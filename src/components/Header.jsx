import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';

export function Header({darkMode, toggleDarkMode}) {
    return (
        <header>
            <h1>Memory Card Game</h1>

            <button onClick={toggleDarkMode}>
                {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
            </button>
        </header>
    )
}