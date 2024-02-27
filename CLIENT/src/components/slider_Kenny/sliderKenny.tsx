import style from './sliderKenny.module.scss'
import CheesingKenny from '../../img/sliderPhotoBack/Kenny-cheesing.png'
import BatmanKenny from '../../img/sliderPhotoBack/Batman_Kenny.png'
import PrincesseKenny from '../../img/sliderPhotoBack/Princess_Kenny.png'
import MysterionKenny from '../../img/sliderPhotoBack/Mysterion_Kenny.png'

const images = [
  CheesingKenny,
  BatmanKenny,
  PrincesseKenny,
  MysterionKenny
]

console.log(images)

export default function SliderKenny() {
  return (
    <section className={style['sliderKenny-wrapper']} >
      <div className={style['sliderKenny']}>

        <ul className={style['sliderKenny-list']}>
          <li className={style['sliderKenny-item-chees']} >
            <h2>WEB</h2>
            <div className={style["web_container"]}>
              <div className={style["LOGO"]}></div>
              <div className={style["lending"]}></div>
              <div className={style["portfolio"]}></div>
              <div className={style["shop"]}></div>
              <div className={style["base"]}></div>
              <div className={style["individual"]}></div>
              <div className={style["price1"]}></div>
              <div className={style["price2"]}></div>
              <div className={style["price3"]}></div>
              <div className={style["price4"]}></div>
              <div className={style["price5"]}></div>
              <div className={style["price6"]}></div>
            </div>
            
            <img src={CheesingKenny} alt='CheesingKenny' />
          </li>
          <li className={style['sliderKenny-item-batman']} >
            <h2>Bot</h2>
            <div className={style['bot_container']}>
              <div className={style['чат']}>шаблон</div>
              <div className={style['магазин']}>цена1</div>
              <div className={style['']}>чат</div>
              <div className={style['шаблон']}>магазин</div>
              <div className={style['инди']}>цена3</div>
              <div className={style['цена1']}>инди</div>
              <div className={style['цена2']}>цена2</div>
              <div className={style['цена3']}>цена4</div>
              <div className={style['цена3']}>цена4</div>
            </div>
            <img src={BatmanKenny} alt='BatmanKenny' />
          </li>
          <li className={style['sliderKenny-item-princess']} >
            <h2>App</h2>
            <div className={style['bot_container']}>
              <div className={style['чат']}>шаблон</div>
              <div className={style['магазин']}>цена1</div>
              <div className={style['']}>чат</div>
              <div className={style['шаблон']}>магазин</div>
              <div className={style['инди']}>цена3</div>
              <div className={style['цена1']}>инди</div>
              <div className={style['цена2']}>цена2</div>
              <div className={style['цена3']}>цена4</div>
              <div className={style['цена3']}>цена4</div>
            </div>
            <img src={PrincesseKenny} alt='PrincesseKenny' />
          </li>
          <li className={style['sliderKenny-item-mysterion']} >
            <h2>NPM</h2>
            <div className={style["npm_container"]}>
              <div className={style["цена1"]}></div>
              <div className={style["npmPackejes"]}></div>
              <div className={style["price"]}></div>
              <div className={style["free"]}></div>
            </div>
            <img src={MysterionKenny} alt='MysterionKenny' />
          </li>
        </ul>
      </div>
    </section>
  )
}
