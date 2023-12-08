import { Link } from 'react-router-dom';
import { useState } from 'react';
import style from './header.module.scss'
import { CustomButton } from '../customAntd/buttonCustom';


export default function Header() {

  const [onClickBtn, setOnCliclBtn] = useState(false)
  const [isAuth, setIsAuth] = useState(false)

  console.log(onClickBtn)

  return (
    <header className={style.header}>

      <section className={style.header_logo__wrapper}>
        <Link className={style.header_logo} to="/webDotG_2/">
          Kirill Grant
        </Link>
        <CustomButton
          customType='burger_btn'
          onClick={() => setOnCliclBtn(!onClickBtn)}
        >{onClickBtn
          ? (<p>закрыть</p>)
          : (<p>меню</p>)
          }
        </CustomButton>
        
      </section>

      <div className={onClickBtn ? style.nav__wrapper : style.display_none}>
        <nav className={style.header_navigation}>
          <ul className={style.header_nav_list}>
            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/webDotG_2/portfolio">
                портфолио
              </Link>
            </li>
            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/webDotG_2/shop">
                магазин
              </Link>
            </li>
            <li className={style.header_nav__item}>
              {/* <section className={style.cart_iem}>0</section> */}
              <Link className={style.header_nav__link} to="/webDotG_2/cart">
                корзина
              </Link>
            </li>
            <li className={style.header_nav__item}>
              {!isAuth
                ? (<Link className={style.header_nav__link} to="/webDotG_2/login">
                  войти
                </Link>)
                : (<Link className={`style.header_nav__link ${style.display_none}`} to="#">
                  войти
                </Link>
                )
              }
            </li>
            <li className={style.header_nav__item}>
              {!isAuth
                ? (<Link className={style.header_nav__link} to="/webDotG_2/register">
                  регистрация
                </Link>)
                : (<Link className={`style.header_nav__link  ${style.display_none}`} to="#">
                  регистрация
                </Link>
                )
              }
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.auth_wrapper}>
        {isAuth &&
          <Link className={style.check_auth_link} to='#'>
            перейти в личный кабинет
          </Link>
        }
        <button className={style.check_auth_btn} onClick={() => setIsAuth(!isAuth)}>toggle auth test</button>
      </div>
    </header>
  )
}


