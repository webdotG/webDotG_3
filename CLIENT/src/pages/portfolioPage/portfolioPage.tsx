
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import ForCoders from '../../components/forCoders/forCoders'
import style from './portfolioPage.module.scss'


function PortfolioPage() {

  return (
    <div className={style['page-container']}>
      <Header />
      <ForCoders />
      <section className={style["portfolio"]}>
        <h2>Работы</h2>
        <ul className={style["portfolio-list"]}>
          <li className={style["portfolio-item"]}>
            <img src="#" alt="Работа 1" />
            <h3>Rental</h3>
            <p>Сайт аренды сторительной техники</p>
            <h4>Реализованные задачи</h4>
            <ul className={style['task-list']}>
                <li className={style['task-item']}>
                  <p className={style['task-item-text']}>
                      1
                  </p>
                </li>
                <li className={style['task-item']}>
                  <p className={style['task-item-text']}>
                    2
                  </p>
                </li>
                <li className={style['task-item']}>
                  <p className={style['task-item-text']}>
                    3
                  </p>
                </li>
            </ul>
            <a href='#'>ссылка на проект</a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default PortfolioPage