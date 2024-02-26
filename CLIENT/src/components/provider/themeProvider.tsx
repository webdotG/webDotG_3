import { createContext, useState, ReactNode } from "react";
import {changeCssVariables} from '../../services/changeCssVariables'

type ThemeContextType = {
  theme: string;
  change: (name: string) => void;
};


export const THEME_WEBDOTG = 'webdotg'
export const THEME_DOTG = 'dotg'
export const THEME_UNICORNG = 'unicorng'



export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ( { children }: ThemeProviderProps, {...props} ) => {

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

