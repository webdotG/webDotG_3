import { ReactNode } from 'react'
import {useTheme, THEME_WEBDOTG,THEME_UNICORNG, THEME_DOTG } from '../provider/themeProvider'
import style from './layout.module.scss'
import Header from '../header/header'
import Footer from '../footer/footer'

type typeProps = {
  children: ReactNode
}

export default function Layout({children}: typeProps) {
  const isTheme = useTheme()
  
  console.log('LAYOUT useTHEME() = isTHEME : ',isTheme)
  return (
    <div className={style.layout}>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_WEBDOTG)}>webdotG</button>
      <button onClick={() => isTheme.change(THEME_UNICORNG)}>unicornG</button>
      <button onClick={() => isTheme.change(THEME_DOTG)}>dotG</button>
      <Header/>
      {children}
      <Footer />
    </div>
  )
}
