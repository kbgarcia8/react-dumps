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

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    )
        
}

export const useTheme = () => {return useContext(ThemeContext)} //example of 'custom hooks'

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default {ThemeContextProvider, useTheme};