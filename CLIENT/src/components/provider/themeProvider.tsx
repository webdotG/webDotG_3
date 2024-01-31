import { Dispatch, SetStateAction, createContext, useState, ReactNode, useContext } from "react";
import {changeCssVariables} from '../../services/changeCssVariables'


export const THEME_WEBDOTG = 'webdotg'
export const THEME_UNICORNG = 'unicorng'
export const THEME_DOTG = 'dotg'


export const ThemeContext = createContext()

const ThemeProvider = ({ children, ...props }) => {

  const [theme, setTheme] = useState(THEME_WEBDOTG)

  const change = (name) => {
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