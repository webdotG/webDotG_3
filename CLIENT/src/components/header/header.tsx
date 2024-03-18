import { Link } from 'react-router-dom'
import SideBar from '../sideBar/sideBar'
import style from './header.module.scss'

export default function Header() {

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
        </ul>
      </section>
      <SideBar />
    </header>
  )
}
