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
              <input className={style['radio']} id='websites' type='radio' name='first-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='telegramBot'>телеграм бот</label>
              <input className={style['radio']} id='telegramBot' type='radio' name='first-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='applications'>приложения</label>
              <input className={style['radio']} id='applications' type='radio' name='first-radio' />
            </span>
          </div>

          <div className={style['seconde-radio-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='pattern'>шаблон</label>
              <input className={style['radio']} id='pattern' type='radio' name='seconde-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='custom'>индивидуальный</label>
              <input className={style['radio']} id='custom' type='radio' name='second-radio' />
            </span>
          </div>

          <div className={style['first-site-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='lending'>лендинг</label>
              <input className={style['radio']} id='lending' type='radio' name='first-site-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='multipage'>многостраничный</label>
              <input className={style['radio']} id='multipage' type='radio' name='first-site-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='shop'>магазин</label>
              <input className={style['radio']} id='shop' type='radio' name='first-site-radio' />
            </span>
          </div>

          <div className={style['first-telegram-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='chat-bot'>чат бот</label>
              <input className={style['radio']} id='chat-bot' type='radio' name='first-telegram-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='shop-bot'>магазин бот</label>
              <input className={style['radio']} id='shop-bot' type='radio' name='first-telegram-radio' />
            </span>
          </div>

          <div className={style['first-app-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='i&a'>IOS & Android</label>
              <input className={style['radio']} id='i&a' type='radio' name='first-app-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='vkapp'>VK App</label>
              <input className={style['radio']} id='vkapp' type='radio' name='first-app-radio' />
            </span>
          </div>

          <div className={style['additional-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='lending'>хочу графику от иллюстратора</label>
              <input className={style['checkbox']} id='lending' type='checkbox' name='first-site-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='lending'>хочу супер крутые иконки</label>
              <input className={style['checkbox']} id='lending' type='checkbox' name='first-site-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='lending'>нужны крутые фотографии</label>
              <input className={style['checkbox']} id='lending' type='checkbox' name='first-site-radio' />
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='multipage'>срочно! нужно было еще вчера </label>
              <input className={style['checkbox']} id='multipage' type='checkbox' name='first-site-radio' />
            </span>

          </div>

        </form>
      </div>
      <Footer />
    </>
  )
}
