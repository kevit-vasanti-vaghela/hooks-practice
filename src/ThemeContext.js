import React, { useState, createContext } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [darkTheme, setdarkTheme] = useState(true)

    function toggleTheme() {
        setdarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    const values = {
        darkTheme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;