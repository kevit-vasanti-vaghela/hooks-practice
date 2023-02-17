import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function FunctionalContextComponent() {
    const { darkTheme, toggleTheme} = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem',
        width: '100px',

    }
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>Function Theme</div>
        </>
        
    )
}