import React, { createContext, useState, useContext } from "react"
import PropTypes from "prop-types"
import { lightTheme, darkTheme } from "../styles/theme";
import {ThemeProvider as StyledThemeProvider} from 'styled-components'

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {  
    const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  const retreviedUserPrefferedTheme = (profile) => {
    if (!profile?.preferredTheme) return;
    
    if (profile.preferredTheme === "lightTheme") {
      setTheme(lightTheme);
    } else if (profile.preferredTheme === "darkTheme") {
      setTheme(darkTheme);
    } else {
      console.warn("Unknown preferredTheme value:", profile.preferredTheme);
    }
  };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, retreviedUserPrefferedTheme }}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    )
        
}

export const useTheme = () => {return useContext(ThemeContext)} //example of 'custom hooks'

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}