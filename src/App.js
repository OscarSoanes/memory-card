import { useState } from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
