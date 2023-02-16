import React ,{ useState } from "react";
import FunctionalContextComponent from "./FunctionalContextComponent";


export const ThemeContext = React.createContext()

function App() {
const [darkTheme, setdarkTheme] = useState(true)

function toggleTheme() {
  setdarkTheme(prevDarkTheme => !prevDarkTheme)
}


  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <h2 style={{ textAlign: 'center' }}>useContext Hook</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionalContextComponent  />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
