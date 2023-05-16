import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // On page load
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, [])

  function toggleDarkMode() {   
    localStorage.theme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "app dark bg-dBackground text-dPrimary" : "app"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
