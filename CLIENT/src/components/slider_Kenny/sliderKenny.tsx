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
              <li className={style['sliderKenny-item']} >
                <img src={CheesingKenny} alt='CheesingKenny' />
              </li>
              <li className={style['sliderKenny-item']} >
                <img src={BatmanKenny} alt='BatmanKenny' />
              </li>
              <li className={style['sliderKenny-item']} >
                <img src={PrincesseKenny} alt='PrincesseKenny' />
              </li>
              <li className={style['sliderKenny-item']} >
                <img src={MysterionKenny} alt='MysterionKenny' />
              </li>
        </ul>
      </div>
    </section>
  )
}
