import { Dispatch, SetStateAction, createContext, useState, ReactNode } from "react";

type typeSetState<T> = Dispatch<SetStateAction<T>>

interface Context {
  type: 'dotG' | 'unicorn' | 'hardG'
  setType: typeSetState<'dotG' | 'unicorn' | 'hardG'>
}
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<Context>({type: 'dotG', setType: () => {} })

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [type, setType] = useState<'dotG' | 'unicorn' | 'hardG'>('dotG')

  return <ThemeContext.Provider value={{type, setType}}>
    {children}
  </ThemeContext.Provider>
}