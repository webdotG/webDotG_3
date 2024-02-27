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
            
            <section>
              <table>
                <thead>
                  <>
                    <th>Лэндинг:</th>
                    <th>Плотфолио:</th>
                    <th>Магазин:</th>
                  </>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                  </tr>
                </tbody>
              </table>

            </section>
            <img src={CheesingKenny} alt='CheesingKenny' />
          </li>
          <li className={style['sliderKenny-item-batman']} >
            <h2>Bot</h2>
            <img src={BatmanKenny} alt='BatmanKenny' />
          </li>
          <li className={style['sliderKenny-item-princess']} >
            <h2>App</h2>
            <img src={PrincesseKenny} alt='PrincesseKenny' />
          </li>
          <li className={style['sliderKenny-item-mysterion']} >
            <h2>NPM</h2>
            <img src={MysterionKenny} alt='MysterionKenny' />
          </li>
        </ul>
      </div>
    </section>
  )
}
