
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import style from './portfolioPage.module.scss'


function PortfolioPage() {

  return (
    <div>
      <Header />
      <section className={style["portfolio"]}>
        <h2>Мои работы</h2>
        <ul className={style["portfolio-list"]}>
          <li className={style["portfolio-item"]}>
            <img src="work1.jpg" alt="Работа 1" />
            <h3>Название работы 1</h3>
            <p>Описание работы 1</p>
          </li>
          <li className={style["portfolio-item"]}>
            <img src="work2.jpg" alt="Работа 2" />
            <h3>Название работы 2</h3>
            <p>Описание работы 2</p>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default PortfolioPage