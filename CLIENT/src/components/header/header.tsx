import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './header.module.scss'
import LogoG from '../../svg/logoG';



export default function Header() {

  const [onClickBtn, setOnCliclBtn] = useState(false)
  
  
  useEffect(() => {
    function handleResize() {
      setOnCliclBtn(window.innerWidth >= 780);
    }
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={style.header}>

      <section className={style.header_logo__wrapper}>
        <Link className={style.header_logo} to="/">
          <LogoG />
        </Link>
        <button
          onClick={() => setOnCliclBtn(!onClickBtn)}
          className={style.burger_btn}
        >
          {onClickBtn
            ? (<span>закрыть</span>)
            : (<span>меню</span>)
          }

        </button>
      </section>
      <div className={onClickBtn ? style.nav__wrapper : style.display_none}>
        <nav className={style.header_navigation}>
          <ul className={style.header_nav_list}>
            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/portfolio">
                портфолио
              </Link>
            </li>
            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/shop">
                магазин
              </Link>
            </li>
            <li className={style.header_nav__item}>
              <Link className={style.header_nav__link} to="/cart">
                корзина
              </Link>
            </li>
           
            {/* <li className={style.header_nav__item}>
              {!isAuth
                ? (<Link className={style.header_nav__link} to="/login">
                  войти
                </Link>)
                : (<Link className={`style.header_nav__link ${style.display_none}`} to="/login">
                  войти
                </Link>
                )}
            </li> */}
           
            {/* <li className={style.header_nav__item}>
              {!isAuth
                ? (<Link className={style.header_nav__link} to="/register">
                  регистрация
                </Link>)
                : (<Link className={`style.header_nav__link  ${style.display_none}`} to="#">
                  регистрация
                </Link>
                )
              }
            </li> */}
{/* 
            <li className={style.header_nav__item}>
              {!isAuth
                ? (<Link className={`style.header_nav__link  ${style.display_none}`} to="/my_page">
                  личный кабинет
                </Link>)
                : (<Link className={style.header_nav__link} to="/my_page">
                  личный кабинет
                </Link>)
              }
            </li> */}

          </ul>
        </nav>
      </div>
      <div className={style.auth_wrapper}>
        {/* {isAuth &&
          <Link className={style.check_auth_link} to='/myPage'>
            перейти в личный кабинет
          </Link>
        } */}
        {/* <button className={style.check_auth_btn} onClick={() => setIsAuth(!isAuth)}>toggle auth test</button> */}
      </div>
      <div>
      </div>
    </header>
  )
}


