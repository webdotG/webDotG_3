import { Dispatch, SetStateAction, createContext, useState, ReactNode } from "react";

type typeSetState<T> = Dispatch<SetStateAction<T>>

interface Context {
  type: 'webDotG' | 'unicornG' | 'dotG' | undefined; 
  setType: typeSetState<'webDotG' | 'unicornG' | 'dotG'>;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<Context>({type: 'webDotG', setType: () => {} })

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  //состояние текущего типа темы
  const [type, setType] = useState<'webDotG' | 'unicornG' | 'dotG'>('webDotG')

  return <ThemeContext.Provider value={{type, setType}}>
    {children}
  </ThemeContext.Provider>
}