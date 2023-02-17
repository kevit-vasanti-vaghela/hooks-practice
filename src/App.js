import React  from "react";
import FunctionalContextComponent from "./FunctionalContextComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
      <ThemeProvider>
        <h2 style={{ textAlign: 'center' }}>useContext Hook</h2>
        <FunctionalContextComponent  />
      </ThemeProvider>
  );
}

export default App;
