import { Link } from "react-router-dom"
import style from '../confirmationToCart/confirmation.module.scss'

function ConfirmationOrder() {

  return (
    <>
      <div className={style['confirmation-wrapper']}>
     
        <div className={style['confirmation']}>
        <div className={style['planet']}>
            <div className={style["star1"]}></div>
            <div className={style["star2"]}></div>
            <div className={style["star3"]}></div>
          </div>
          <h2 className={style['confirmation-title']}>заказ сформирован</h2>
          <p className={style['confirmation-text']}>мы скоро свяжемся с вами для оплаты</p>
          <ul className={style['confirmation-list-link']}>
            <li>
              <Link to='/'>
                <p className={style['home-link']}>вернуться на главную</p>
              </Link>
            </li>
            {/* <li>
              <Link to='/communism2.0'>
                <p className={style['confirmation-link']}>узнать что такое коммунизм 2.0</p>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* <canvas id="confettiCanvas"></canvas> */}
    </>
  )
}

export default ConfirmationOrder
