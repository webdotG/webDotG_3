import { Dispatch, SetStateAction, createContext, useState, ReactNode, useContext } from "react";

// type typeSetState<T> = Dispatch<SetStateAction<T>>

// interface Context {
  // theme: 'webDotG' | 'unicornG' | 'dotG' | undefined;
  // setTheme: typeSetState<'webDotG' | 'unicornG' | 'dotG'>;
// }

// interface ThemeProviderProps {
  // children: ReactNode;
// }

export const THEME_WEBDOTG = 'neitral'
export const THEME_UNICORNG = 'light'
export const THEME_DOTG = 'dark'


export const ThemeContext = createContext()

const ThemeProvider = ({ children, ...props }) => {

  const [theme, setTheme] = useState(THEME_WEBDOTG)

  const change = (name) => {
    setTheme(name)
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