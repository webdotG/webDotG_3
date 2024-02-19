import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react';
import SideBar from '../sideBar/sideBar'
import style from './header.module.scss'


// import { useTheme } from '../provider/themeProvider';
// import { THEME_WEBDOTG, THEME_UNICORNG, THEME_DOTG } from '../provider/themeProvider'

// import LogoWebDotgG from '../../svg/colorThemeWebdotg.svg'
// import LogoUnicornG from '../../svg/colorThemeUnicornG.svg'
// import LogoDotG from '../../svg/colorThemeDotgG.svg'


export default function Header() {

  // const [icon, setIcon] = useState('')
  // const isTheme = useTheme()

  // useEffect(() => {
  //   switch (isTheme.theme) {
  //     case THEME_WEBDOTG: setIcon(LogoWebDotgG); break;
  //     case THEME_UNICORNG: setIcon(LogoUnicornG); break;
  //     case THEME_DOTG: setIcon(LogoDotG); break;
  //     default: setIcon(LogoWebDotgG)
  //   }
  // }, [isTheme]);

  // const toggleTheme = () => {
  // };

  return (
    <header className={style['header']}>
      <section className={style['wrapper']}>
        <Link to='/'><h1 className={style['name']} >Kirill Grant</h1></Link>
        <ul className={style['social-contacts']}>
          <li>
            <Link className={style['social-telegram']} to={'https://t.me/KirillGrant'}>
              <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM389.059,161.936,343.591,379a16.007,16.007,0,0,1-25.177,9.593l-66.136-48.861-40.068,37.8a5.429,5.429,0,0,1-7.74-.294l-.861-.946,6.962-67.375L336.055,194.266a3.358,3.358,0,0,0-4.061-5.317L171.515,290.519,102.4,267.307a9.393,9.393,0,0,1-.32-17.694L372.5,147.744A12.441,12.441,0,0,1,389.059,161.936Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link className={style['social-whatsup']} to={'https://wa.me/+79022888989'}>
              <svg id="Layer_1" version="1.1" viewBox="0 0 1000 1000" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g>
                  <path className={style['whatsup-path']} d="M500,1000L500,1000C223.9,1000,0,776.1,0,500v0C0,223.9,223.9,0,500,0h0c276.1,0,500,223.9,500,500v0   C1000,776.1,776.1,1000,500,1000z" />
                  <g>
                    <g id="WA_Logo">
                      <g><path strokeWidth='1' d="M733.9,267.2c-62-62.1-144.6-96.3-232.5-96.4c-181.1,0-328.6,147.4-328.6,328.6      c0,57.9,15.1,114.5,43.9,164.3L170.1,834l174.2-45.7c48,26.2,102,40,157,40h0.1c0,0,0,0,0,0c181.1,0,328.5-147.4,328.6-328.6      C830.1,411.9,796,329.3,733.9,267.2z M501.5,772.8h-0.1c-49,0-97.1-13.2-139-38.1l-10-5.9L249,755.9l27.6-100.8l-6.5-10.3      c-27.3-43.5-41.8-93.7-41.8-145.4c0.1-150.6,122.6-273.1,273.3-273.1c73,0,141.5,28.5,193.1,80.1c51.6,51.6,80,120.3,79.9,193.2      C774.6,650.3,652,772.8,501.5,772.8z M651.3,568.2c-8.2-4.1-48.6-24-56.1-26.7c-7.5-2.7-13-4.1-18.5,4.1      c-5.5,8.2-21.2,26.7-26,32.2c-4.8,5.5-9.6,6.2-17.8,2.1c-8.2-4.1-34.7-12.8-66-40.8c-24.4-21.8-40.9-48.7-45.7-56.9      c-4.8-8.2-0.5-12.7,3.6-16.8c3.7-3.7,8.2-9.6,12.3-14.4c4.1-4.8,5.5-8.2,8.2-13.7c2.7-5.5,1.4-10.3-0.7-14.4      c-2.1-4.1-18.5-44.5-25.3-61c-6.7-16-13.4-13.8-18.5-14.1c-4.8-0.2-10.3-0.3-15.7-0.3c-5.5,0-14.4,2.1-21.9,10.3      c-7.5,8.2-28.7,28.1-28.7,68.5c0,40.4,29.4,79.5,33.5,84.9c4.1,5.5,57.9,88.4,140.3,124c19.6,8.5,34.9,13.5,46.8,17.3      c19.7,6.3,37.6,5.4,51.7,3.3c15.8-2.4,48.6-19.9,55.4-39c6.8-19.2,6.8-35.6,4.8-39C665,574.4,659.5,572.4,651.3,568.2z" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </section>
      {/* <section className={style['color-theme']}>
      <button onClick={toggleTheme}>
          <img src={icon} alt="Theme Icon" />
        </button>
      </section> */}
      <SideBar />
    </header>
  )
}
