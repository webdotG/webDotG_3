import style from './shopPage.module.scss'
import { useState } from 'react';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'



export default function ShopPage() {

  // Состояния для управления видимостью блоков
  const [showSecondBlock, setShowSecondBlock] = useState(false); // Состояние для показа второго блока
  const [showThirdBlock, setShowThirdBlock] = useState(false); // Состояние для показа второго блока
  const [showFourthBlock, setShowFourthBlock] = useState(false); // Состояние для показа второго блока
  const [showFifthBlock, setShowFifthBlock] = useState(false); // Состояние для показа второго блока
  const [showSixthBlock, setShowSixthBlock] = useState(false); // Состояние для показа второго блока
  
  const [selectedSecondRadio, setSelectedSecondRadio] = useState(''); // Выбранная радиокнопка второго блока

  // Обработчик изменения первой группы радиокнопок
  const handleFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowSecondBlock(true); // Установка видимости второго блока
    setSelectedSecondRadio(event.target.id); // Установка выбранной радиокнопки
  };

  const handleSecondInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedRadio = event.target.id;
    if (selectedRadio === 'websites') {
      setShowThirdBlock(true) 
      setShowFourthBlock(false) 
      setShowFifthBlock(false)
    } else if (selectedRadio === 'telegramBot') {
      setShowThirdBlock(false) 
      setShowFourthBlock(true)
      setShowFifthBlock(false) 
    } else if (selectedRadio === 'applications') {
      setShowThirdBlock(false) 
      setShowFourthBlock(false)
      setShowFifthBlock(true) 
    }
  }

  const handleOtherInputChange = () => {
    setShowSixthBlock(true); // Показать шестой блок
  };

  return (
    <div className={style['wrapper']}>
      <Header />
      <div className={style['form-wrapper']}>
        <h2 className={style['form-title']}>выберите желаемое</h2>
        <form className={style['shop-form']}>

          <div className={style['first-radio-wrapper']}>
            <span className={style['first-wrapper']}>
              <label htmlFor='pattern'>шаблон
                <input className={style['radio']}
                  id='pattern'
                  type='radio'
                  name='first-radio'
                  onChange={handleFirstInputChange}
                />
                <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label htmlFor='custom'>индивидуальный
                <input className={style['radio']}
                  id='custom'
                  type='radio'
                  name='first-radio'
                  onChange={handleFirstInputChange}
                />
                <span className={style['custom-check']}></span>
              </label>
            </span>
          </div>

          {showSecondBlock && (
            <div className={style['seconde-radio-wrapper']}>
              <span className={style['first-wrapper']}>
                <label className={style['label']} htmlFor='websites'>сайты
                  <input className={style['radio']}
                    id='websites'
                    type='radio'
                    name='seconde-radio'
                    onChange={handleSecondInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label htmlFor='telegramBot'>боты
                  <input className={style['radio']}
                    id='telegramBot'
                    type='radio'
                    name='seconde-radio'
                    onChange={handleSecondInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label htmlFor='applications'>приложения
                  <input className={style['radio']}
                    id='applications'
                    type='radio'
                    name='seconde-radio'
                    onChange={handleSecondInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showThirdBlock && (
            <div className={style['first-site-wrapper']}>
              <span className={style['first-wrapper']}>
                <label htmlFor='lending'>лендинг
                  <input className={style['radio']}
                    id='lending'
                    type='radio'
                    name='site-radio'
                    onChange={handleOtherInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label htmlFor='multipage'>многостраничный
                  <input className={style['radio']}
                    id='multipage'
                    type='radio'
                    name='site-radio'
                    onChange={handleOtherInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label htmlFor='shop'>магазин
                  <input className={style['radio']}
                    id='shop'
                    type='radio'
                    name='site-radio'
                    onChange={handleOtherInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showFourthBlock && (
            <div className={style['first-telegram-wrapper']}>
              <span className={style['first-wrapper']}>
                <label htmlFor='chat-bot'>чат бот
                  <input className={style['radio']}
                    id='chat-bot'
                    type='radio'
                    name='telegram-radio'
                    onChange={handleOtherInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label htmlFor='shop-bot'>магазин бот
                  <input className={style['radio']}
                    id='shop-bot'
                    type='radio'
                    name='telegram-radio'
                    onChange={handleOtherInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showFifthBlock && (
            <div className={style['first-app-wrapper']}>
              <span className={style['first-wrapper']}>
                <label htmlFor='i&a'>IOS & Android
                  <input className={style['radio']}
                    id='i&a'
                    type='radio'
                    name='app-radio'
                    onChange={handleOtherInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label htmlFor='vkapp'>VK App
                  <input className={style['radio']}
                    id='vkapp'
                    type='radio'
                    name='app-radio'
                    onChange={handleOtherInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showSixthBlock && (
            <div className={style['additional-wrapper']}>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check1']}>графику от иллюстратора
                  <input className={style['checkbox']}
                    type='checkbox'
                    name='additional-first'
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check2']}>индивидуальные иконки
                  <input className={style['checkbox']}
                    type='checkbox'
                    name='additional-seconde'
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check3']}> фотографии
                  <input className={style['checkbox']}
                    type='checkbox'
                    name='additional-therd'
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check4']}>СРОЧНО !!!
                  <input className={style['checkbox']}
                    type='checkbox'
                    name='additional-fourth'
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

        </form>
      </div>
      <Footer />
    </div>
  )
}
