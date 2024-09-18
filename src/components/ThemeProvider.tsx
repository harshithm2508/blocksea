import React, { useState } from "react"
import { ThemeContext } from "../state/ThemeContext";

const ThemeProvider = ({children} : {children : React.ReactNode}) => {
    const [ theme, setTheme ] = useState('dark');

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;