import style from './communismPage.module.scss'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'



export default function CommunismPage() {



  return (
    <div className={style['page-container']}>
      <Header />
      <div className={style['communism-wrapper']}>
        <h1 className={style['communism-title']}>что такое Коммунизм 2.0 ?</h1>
        <p className={style['communism-about']}>
          Это шутеечное название доски объявлений
        </p>
        <p className={style['communism-about']}>
          Здесь можно предложить свои услуги
        </p>
        <p className={style['communism-about']}>
          В замен на другие услуги или живой обмен на необходимое
        </p>
      </div>
      <Footer />
    </div>
  )
}
