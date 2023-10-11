import {createContext, useState} from 'react';

export const ThemeContext = createContext("Light");

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("Light");

    return (
        <ThemeContext.Provider value = {{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;