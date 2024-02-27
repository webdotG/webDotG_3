import style from './sliderKenny.module.scss'
import CheesingKenny from '../../img/sliderPhotoBack/Kenny-cheesing.png'
import BatmanKenny from '../../img/sliderPhotoBack/Batman_Kenny.png'
import PrincesseKenny from '../../img/sliderPhotoBack/Princess_Kenny.png'
import MysterionKenny from '../../img/sliderPhotoBack/Mysterion_Kenny.png'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const images = [
  CheesingKenny,
  BatmanKenny,
  PrincesseKenny,
  MysterionKenny
]

console.log(images)

export default function SliderKenny() {

  const ref = useRef<HTMLElement>(null)

  return (
    <section ref={ref} className={style['sliderKenny-wrapper']} >
      <div className={style['sliderKenny']}>

        <button className={style['slider-btn--prev']}>
          <svg width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="icomoon-ignore">
            </g>
            <path  d="M16 15.999l14.928 8.531v-17.060l-14.928 8.529zM29.861 22.693l-11.712-6.693 11.712-6.692v13.385z" >
            </path>
            <path  d="M1.073 15.999l14.928 8.531v-17.060l-14.928 8.529zM14.934 22.693l-11.712-6.693 11.712-6.692v13.385z" >
            </path>
          </svg>
        </button>

        <ul className={style['sliderKenny-list']}>
          <li className={style['sliderKenny-item-chees']} >
            <h2>WEB</h2>
            <div className={style["web_container"]}>
              <div className={style["LOGO"]}>WEB Logo</div>
              <div className={style["lending"]}>Lending</div>
              <div className={style["portfolio"]}>Portfolio</div>
              <div className={style["shop"]}>Shop</div>
              <div className={style["base"]}>Base</div>
              <div className={style["individual"]}>15 000 р</div>
              <div className={style["price1"]}>45 000 р</div>
              <div className={style["price2"]}>120 000р</div>
              <div className={style["price3"]}>9 Indi</div>
              <div className={style["price4"]}>30 000 р</div>
              <div className={style["price5"]}>60 000 р</div>
              <div className={style["price6"]}>180 000 р</div>
            </div>
            <img src={CheesingKenny} alt='CheesingKenny' />
            <Link to='/shop' className={style["btn-toShop"]}>shop</Link>
          </li>
          <li className={style['sliderKenny-item-batman']} >
            <h2>Bot</h2>
            <div className={style['bot_container']}>
              <div className={style['чат']}>BOT Logo</div>
              <div className={style['магазин']}>Chat</div>
              <div className={style['']}>Shop</div>
              <div className={style['шаблон']}>Base </div>
              <div className={style['инди']}>price 1</div>
              <div className={style['цена1']}>price 2</div>
              <div className={style['цена2']}>Indi</div>
              <div className={style['цена3']}>Price 3</div>
              <div className={style['цена3']}>Price 4</div>
            </div>
            <Link to='/shop' className={style["btn-toShop"]}>shop</Link>
            <motion.img src={BatmanKenny} alt='BatmanKenny' />
          </li>
          <li className={style['sliderKenny-item-princess']} >
            <h2>App</h2>
            <div className={style['bot_container']}>
              <div className={style['чат']}>APP Logo</div>
              <div className={style['магазин']}>Ios | Android</div>
              <div className={style['']}>VK</div>
              <div className={style['шаблон']}>Base </div>
              <div className={style['инди']}>price 1</div>
              <div className={style['цена1']}>price 2</div>
              <div className={style['цена2']}>Indi</div>
              <div className={style['цена3']}>Price 3</div>
              <div className={style['цена3']}>Price 4</div>
            </div>
            <Link to='/shop' className={style["btn-toShop"]}>shop</Link>
            <img src={PrincesseKenny} alt='PrincesseKenny' />
          </li>
          <li className={style['sliderKenny-item-mysterion']} >
            <h2>NPM</h2>
            <div className={style["npm_container"]}>
              <div className={style["цена1"]}>DEV/TEACH Logo</div>
              <div className={style["npmPackejes"]}>JS lesson, css animation</div>
              <div className={style["price"]}>Open Source</div>
              <div className={style["free"]}>Free</div>
            </div>
            <Link to='/shop' className={style["btn-toShop"]}>shop</Link>
            <img src={MysterionKenny} alt='MysterionKenny' />
          </li>
        </ul>

        <button className={style['slider-btn--next']}>
          <svg width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="icomoon-ignore">
            </g>
            <path d="M16 15.999l14.928 8.531v-17.060l-14.928 8.529zM29.861 22.693l-11.712-6.693 11.712-6.692v13.385z" >
            </path>
            <path d="M1.073 15.999l14.928 8.531v-17.060l-14.928 8.529zM14.934 22.693l-11.712-6.693 11.712-6.692v13.385z" >
            </path>
          </svg>
        </button>
      <section className={style['slider-pagination']}>
      <svg width="30px" height="30px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="icomoon-ignore">
</g>
<path d="M12.8 3.2c-7.093 0-12.8 5.707-12.8 12.8s5.707 12.8 12.8 12.8c7.093 0 12.8-5.707 12.8-12.8s-5.707-12.8-12.8-12.8zM12.8 27.733c-6.453 0-11.733-5.28-11.733-11.733s5.28-11.733 11.733-11.733c6.453 0 11.733 5.28 11.733 11.733s-5.28 11.733-11.733 11.733z">

</path>
<path  d="M19.467 19.040c-0.267-0.107-0.587-0.053-0.693 0.213-1.173 2.293-3.467 3.68-5.973 3.68-2.56 0-4.8-1.387-5.973-3.68-0.107-0.267-0.427-0.373-0.693-0.213-0.267 0.107-0.373 0.427-0.267 0.693 1.333 2.613 3.947 4.267 6.933 4.267 2.933 0 5.6-1.653 6.88-4.267 0.16-0.267 0.053-0.587-0.213-0.693z">

</path>
<path  d="M10.133 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">

</path>
<path  d="M18.667 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">

</path>
</svg>
<svg width="30px" height="30px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="icomoon-ignore">
</g>
<path d="M12.8 3.2c-7.093 0-12.8 5.707-12.8 12.8s5.707 12.8 12.8 12.8c7.093 0 12.8-5.707 12.8-12.8s-5.707-12.8-12.8-12.8zM12.8 27.733c-6.453 0-11.733-5.28-11.733-11.733s5.28-11.733 11.733-11.733c6.453 0 11.733 5.28 11.733 11.733s-5.28 11.733-11.733 11.733z">

</path>
<path  d="M19.467 19.040c-0.267-0.107-0.587-0.053-0.693 0.213-1.173 2.293-3.467 3.68-5.973 3.68-2.56 0-4.8-1.387-5.973-3.68-0.107-0.267-0.427-0.373-0.693-0.213-0.267 0.107-0.373 0.427-0.267 0.693 1.333 2.613 3.947 4.267 6.933 4.267 2.933 0 5.6-1.653 6.88-4.267 0.16-0.267 0.053-0.587-0.213-0.693z">

</path>
<path  d="M10.133 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">

</path>
<path  d="M18.667 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">

</path>
</svg>
<svg width="30px" height="30px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="icomoon-ignore">
</g>
<path d="M12.8 3.2c-7.093 0-12.8 5.707-12.8 12.8s5.707 12.8 12.8 12.8c7.093 0 12.8-5.707 12.8-12.8s-5.707-12.8-12.8-12.8zM12.8 27.733c-6.453 0-11.733-5.28-11.733-11.733s5.28-11.733 11.733-11.733c6.453 0 11.733 5.28 11.733 11.733s-5.28 11.733-11.733 11.733z">

</path>
<path  d="M19.467 19.040c-0.267-0.107-0.587-0.053-0.693 0.213-1.173 2.293-3.467 3.68-5.973 3.68-2.56 0-4.8-1.387-5.973-3.68-0.107-0.267-0.427-0.373-0.693-0.213-0.267 0.107-0.373 0.427-0.267 0.693 1.333 2.613 3.947 4.267 6.933 4.267 2.933 0 5.6-1.653 6.88-4.267 0.16-0.267 0.053-0.587-0.213-0.693z">

</path>
<path  d="M10.133 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">

</path>
<path  d="M18.667 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">

</path>
</svg>
<svg width="30px" height="30px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="icomoon-ignore">
</g>
<path d="M12.8 3.2c-7.093 0-12.8 5.707-12.8 12.8s5.707 12.8 12.8 12.8c7.093 0 12.8-5.707 12.8-12.8s-5.707-12.8-12.8-12.8zM12.8 27.733c-6.453 0-11.733-5.28-11.733-11.733s5.28-11.733 11.733-11.733c6.453 0 11.733 5.28 11.733 11.733s-5.28 11.733-11.733 11.733z">

</path>
<path  d="M19.467 19.040c-0.267-0.107-0.587-0.053-0.693 0.213-1.173 2.293-3.467 3.68-5.973 3.68-2.56 0-4.8-1.387-5.973-3.68-0.107-0.267-0.427-0.373-0.693-0.213-0.267 0.107-0.373 0.427-0.267 0.693 1.333 2.613 3.947 4.267 6.933 4.267 2.933 0 5.6-1.653 6.88-4.267 0.16-0.267 0.053-0.587-0.213-0.693z">

</path>
<path  d="M10.133 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">

</path>
<path  d="M18.667 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">

</path>
</svg>
      </section>
      </div>
    </section>
  )
}
