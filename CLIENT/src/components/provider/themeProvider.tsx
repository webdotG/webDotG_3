import { createContext, useState, useContext } from "react";
import {changeCssVariables} from '../../services/changeCssVariables'


export const THEME_WEBDOTG = 'webdotg'
export const THEME_UNICORNG = 'unicorng'
export const THEME_DOTG = 'dotg'


export const ThemeContext = createContext('webdotg')

const ThemeProvider = ({ children, ...props }) => {

  const [theme, setTheme] = useState(THEME_WEBDOTG)

  const change = (name: string) => {
    setTheme(name)
    changeCssVariables(name)
  }

  return (
    <ThemeContext.Provider
      value={{ 
        theme: theme, 
        change: change }}
        {...props}
        >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)