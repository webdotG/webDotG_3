import style from './shopPage.module.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

export default function ShopPage() {
  return (
    <div className={style['wrapper']}>
      <Header />
      <div className={style['form-wrapper']}>
        <h2 className={style['form-title']}>выберите желаемое</h2>
        <form className={style['shop-form']}>

          <div className={style['first-radio-wrapper']}>
            <span className={style['first-wrapper']}>
              <label className={style['label']} htmlFor='websites'>сайты
              <input className={style['radio']} id='websites' type='radio' name='first-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='telegramBot'>боты
              <input className={style['radio']} id='telegramBot' type='radio' name='first-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='applications'>приложения
              <input className={style['radio']} id='applications' type='radio' name='first-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
          </div>

          <div className={style['seconde-radio-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='pattern'>шаблон
              <input className={style['radio']} id='pattern' type='radio' name='seconde-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='custom'>индивидуальный
              <input className={style['radio']} id='custom' type='radio' name='seconde-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
          </div>

          <div className={style['first-site-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='lending'>лендинг
              <input className={style['radio']} id='lending' type='radio' name='site-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='multipage'>многостраничный
              <input className={style['radio']} id='multipage' type='radio' name='site-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='shop'>магазин
              <input className={style['radio']} id='shop' type='radio' name='site-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
          </div>

          <div className={style['first-telegram-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='chat-bot'>чат бот
              <input className={style['radio']} id='chat-bot' type='radio' name='telegram-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='shop-bot'>магазин бот
              <input className={style['radio']} id='shop-bot' type='radio' name='telegram-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
          </div>

          <div className={style['first-app-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='i&a'>IOS & Android
              <input className={style['radio']} id='i&a' type='radio' name='app-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='vkapp'>VK App
              <input className={style['radio']} id='vkapp' type='radio' name='app-radio' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
          </div>

          <div className={style['additional-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='additional-check1'>графику от иллюстратора
              <input className={style['checkbox']} id='additional-check1' type='checkbox' name='additional-first' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='additional-check2'>индивидуальные иконки
              <input className={style['checkbox']} id='additional-check2' type='checkbox' name='additional-seconde' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='additional-check3'>профессиональные фотографии
              <input className={style['checkbox']} id='additional-check3' type='checkbox' name='additional-therd' />
              <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='additional-check4'>СРОЧНО !!!
              <input className={style['checkbox']} id='additional-check4' type='checkbox' name='additional-fourth' />
              <span className={style['custom-check']}></span>
              </label>
            </span>

          </div>

        </form>
      </div>
      <Footer />
    </div>
  )
}
