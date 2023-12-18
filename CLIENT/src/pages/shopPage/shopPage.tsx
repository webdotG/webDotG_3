import style from './shopPage.module.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

export default function ShopPage() {
  return (
    <>
      <Header />
      <div className={style['form-wrapper']}>
        <h2 className={style['form-title']}>выберите желаемое</h2>
        <form className={style['shop-form']}>
          <div className={style['first-radio-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='websites'>сайты</label>
              <input className={style['radio']} id='websites' type='radio' name='first-rado' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='telegramBot'>телеграм бот</label>
              <input  className={style['radio']} id='telegramBot' type='radio' name='first-rado' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='applications'>приложения</label>
              <input  className={style['radio']} id='applications' type='radio' name='first-rado' />
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
