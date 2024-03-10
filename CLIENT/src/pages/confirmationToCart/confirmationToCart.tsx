import { Link } from "react-router-dom"
import style from './confirmation.module.scss'


function ConfirmationToCart() {

  return (
    <>
      <div className={style['confirmation-wrapper']}>

        <div className={style['confirmation']}>
          <div className={style['planet']}>
            <div className={style["star1"]}></div>
            <div className={style["star2"]}></div>
            <div className={style["star3"]}></div>
          </div>
          <h2 className={style['confirmation-title']}>заказ сохранён</h2>
          <ul className={style['confirmation-list-link']}>
            <li>
              <Link to='/cart'>
                <p className={style['confirmation-link']}>подтвердить и оформить</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <p className={style['home-link']}>вернуться на главную</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <canvas id="confettiCanvas"></canvas> */}
    </>
  )
}

export default ConfirmationToCart
