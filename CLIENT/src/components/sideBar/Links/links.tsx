import style from './links.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { logOut, selectIsAuth } from '../../../slices/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  }
}

interface LinksProps {
  closeSidebar: () => void;
}

export default function Links({ closeSidebar }: LinksProps) {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth)


  const onClickLogOut = () => {
    if (window.confirm('уверен что надо ? ')) {
      dispatch(logOut())
      window.localStorage.removeItem('token')
    }
    closeSidebar()
    navigate('/login')
  }

  return (
    <section className={style['links']} >
      <nav className={style.header_navigation}>
        <motion.ul className={style.header_nav_list} variants={variants}>

          <motion.li className={style.header_nav__item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            <Link className={style.header_nav__link} to="/" onClick={closeSidebar}>
              главная
            </Link>
          </motion.li>
          <motion.li className={style.header_nav__item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            <Link className={style.header_nav__link} to="/portfolio" onClick={closeSidebar}>
              портфолио
            </Link>
          </motion.li>
          <motion.li className={style.header_nav__item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            <Link className={style.header_nav__link} to="/shop" onClick={closeSidebar}>
              магазин
            </Link>
          </motion.li>
          <motion.li className={style.header_nav__item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            <Link className={style.header_nav__link} to="/cart" onClick={closeSidebar}>
              корзина
            </Link>
          </motion.li>
          
          <motion.li className={style.header_nav__item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            {!isAuth
              ? (<Link className={style.header_nav__link}
                to="/login" onClick={closeSidebar}>
                войти
              </Link>)
              : (null)
            }
          </motion.li>

          <motion.li className={style.header_nav__item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            {!isAuth
              ? (<Link className={style.header_nav__link} to="/register" onClick={closeSidebar}>
                регистрация
              </Link>)
              : (null)
            }
          </motion.li>

          <motion.li className={style.header_nav__item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            {isAuth &&
              <span className={style.auth_wrapper}>
                <Link className={style.check_auth_link} to='/myPage' onClick={closeSidebar}>
                  <svg width="55px" height="55px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke={'black'} strokeLinecap="round" strokeLinejoin="round" d="M13 9H18M13 11H16M10.5 9.5C10.5 10.3284 9.82843 11 9 11C8.17157 11 7.5 10.3284 7.5 9.5C7.5 8.67157 8.17157 8 9 8C9.82843 8 10.5 8.67157 10.5 9.5ZM7.65882 13H10.3412C10.5824 13 10.7031 13 10.811 13.0154C11.1844 13.0685 11.5074 13.2554 11.6883 13.523C11.7405 13.6003 11.7787 13.6922 11.855 13.8759C11.9467 14.0967 11.9925 14.2071 11.9987 14.2961C12.0206 14.6103 11.7659 14.8939 11.3878 14.9766C11.2806 15 11.1357 15 10.8458 15H7.15422C6.86432 15 6.71937 15 6.61221 14.9766C6.23409 14.8939 5.97944 14.6103 6.00131 14.2961C6.0075 14.2071 6.05334 14.0967 6.14502 13.8759C6.22131 13.6922 6.25945 13.6003 6.31173 13.523C6.49265 13.2554 6.81558 13.0685 7.18903 13.0154C7.29693 13 7.41756 13 7.65882 13ZM6 17H18C18.9428 17 19.4142 17 19.7071 16.7071C20 16.4142 20 15.9428 20 15V8C20 7.05719 20 6.58579 19.7071 6.29289C19.4142 6 18.9428 6 18 6H6C5.05719 6 4.58579 6 4.29289 6.29289C4 6.58579 4 7.05719 4 8V15C4 15.9428 4 16.4142 4.29289 16.7071C4.58579 17 5.05719 17 6 17Z" />
                  </svg>
                  кабинет
                </Link>
              </span>
            }
          </motion.li>

          <motion.li className={style.header_nav__item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            {isAuth &&
              <span className={style.auth_btn_logout__wrapper}>
                <button className={style['btn-logout']}
                  onClick={onClickLogOut}>
                  <svg height="35px" width="35px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512.001 512.001" xmlSpace="preserve">
                    <path fill='rgba(34, 41, 50, 1.0'
                      d="M488.001,472.001h-304c-13.254,0-24-10.746-24-24V352c0-13.256,10.746-24,24-24s24,10.744,24,24
                        v72.002h256V88h-256v72c0,13.254-10.746,24-24,24s-24-10.746-24-24V64c0-13.256,10.746-24,24-24h304c13.254,0,24,10.744,24,24
                        v384.002C512.001,461.256,501.256,472.001,488.001,472.001z"/>
                    <path fill='#64C37D'
                      d="M359.995,232.001H81.939l31.03-31.03c9.373-9.373,9.373-24.568,0-33.941
                          c-9.371-9.373-24.57-9.373-33.941,0l-72,72c-0.005,0.005-0.008,0.01-0.014,0.014c-0.554,0.555-1.078,1.138-1.574,1.744
                          c-0.23,0.282-0.43,0.578-0.648,0.867c-0.251,0.338-0.514,0.667-0.749,1.018c-0.232,0.347-0.432,0.706-0.645,1.062
                          c-0.189,0.317-0.387,0.626-0.562,0.952c-0.195,0.363-0.36,0.736-0.534,1.107c-0.16,0.339-0.33,0.672-0.474,1.019
                          c-0.15,0.363-0.272,0.733-0.403,1.101c-0.133,0.371-0.275,0.736-0.389,1.115c-0.112,0.371-0.197,0.749-0.291,1.125
                          c-0.096,0.384-0.203,0.762-0.282,1.152c-0.088,0.438-0.139,0.88-0.202,1.322c-0.046,0.334-0.11,0.662-0.146,1.002
                          c-0.155,1.578-0.155,3.166,0,4.744c0.034,0.342,0.099,0.675,0.147,1.013c0.062,0.437,0.114,0.875,0.2,1.309
                          c0.078,0.395,0.187,0.778,0.285,1.165c0.094,0.371,0.174,0.744,0.286,1.112c0.117,0.382,0.261,0.754,0.395,1.128
                          c0.13,0.365,0.25,0.73,0.397,1.088c0.147,0.352,0.318,0.69,0.482,1.032c0.171,0.366,0.334,0.736,0.525,1.094
                          c0.178,0.331,0.381,0.646,0.571,0.968c0.21,0.35,0.408,0.704,0.635,1.045c0.242,0.362,0.509,0.701,0.768,1.046
                          c0.211,0.28,0.405,0.566,0.627,0.838c0.504,0.613,1.034,1.205,1.597,1.765l71.995,71.998c4.686,4.686,10.829,7.03,16.97,7.03
                          c6.141-0.002,12.285-2.344,16.971-7.03c9.373-9.373,9.373-24.568,0-33.941l-31.03-31.032h278.056c13.254,0,24-10.746,24-24
                          C383.995,242.745,373.251,232.001,359.995,232.001z"/>
                  </svg>
                  выход
                </button>
              </span>
            }
          </motion.li>

          <motion.li className={style.header_nav__item__develop_blur}
          >
            <Link className={style.header_nav__link} to="/communism2.0" onClick={closeSidebar}>
              <motion.p className={style.header_nav__link__blur}
               variants={itemVariants}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.75 }}>
                коммунизм 2.0
              </motion.p>
            </Link>
            <Link className={style.header_nav__link} to="/communism2.0" onClick={closeSidebar}>
              <motion.p className={style.header_nav__link__blur}
               variants={itemVariants}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.75 }}>
                сны 1.0
              </motion.p>
            </Link>
          </motion.li>

          {/* <motion.li className={style.header_nav__item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            <Link className={style.header_nav__link} to="/communism2.0" onClick={closeSidebar}>
              <p className={style.header_nav__link__blur}>
                сны 1.0
              </p>
            </Link>
          </motion.li> */}


        </motion.ul>
      </nav>
    </section>
  )
}
