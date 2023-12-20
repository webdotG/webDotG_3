import style from './shopPage.module.scss'
import { useState } from 'react';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'



export default function ShopPage() {

  const [showSecondBlock, setShowSecondBlock] = useState(false);
  const [showThirdBlock, setShowThirdBlock] = useState(false);
  const [showFourthBlock, setShowFourthBlock] = useState(false);
  const [showFifthBlock, setShowFifthBlock] = useState(false);
  const [showSixthBlock, setShowSixthBlock] = useState(false);

  const [firstSelectedInputs, setFirstSelectedInputs] = useState<string[]>([]);
  const [secondSelectedInputs, setSecondSelectedInputs] = useState<string[]>([]);
  const [thirdSelectedInputs, setThirdSelectedInputs] = useState<string[]>([]);
  const [fourthSelectedInputs, setFourthSelectedInputs] = useState<string[]>([]);

  const handleFirstInputChange = () => {
    setShowSecondBlock(true);
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
    isSecondeInputChange(event)
  }
  const handleOtherInputChange = () => {
    setShowSixthBlock(true);
  };

  const isFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setFirstSelectedInputs([id]);
    }
  };
  const isSecondeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSecondSelectedInputs([id]);
    }
  };
  const isThirdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setThirdSelectedInputs([id]);
    }
  };
  const isFourdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;

    if (checked) {
      setFourthSelectedInputs(prevInputs => [...prevInputs, id]); // Добавить в массив, если чек установлен
    } else {
      setFourthSelectedInputs(prevInputs =>
        prevInputs.filter(input => input !== id) // Удалить из массива, если чек снят
      );
    }
  };



  function combineSelectedInputs(firstInputs: string[], secondInputs: string[], thirdInputs: string[], fourthInputs: string[]): string {
    // Объединяем все массивы в один с помощью оператора concat
    const combinedInputs: string[] = firstInputs.concat(secondInputs, thirdInputs, fourthInputs);
    // Используем метод join(',') для разделения элементов запятыми
    return combinedInputs.join(', ');
  }
  // Пример использования функции для создания строки с разделенными запятыми элементами массива
  const combinedString = combineSelectedInputs(firstSelectedInputs, secondSelectedInputs, thirdSelectedInputs, fourthSelectedInputs);




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
                  onClick={handleFirstInputChange}
                  onChange={isFirstInputChange}
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
                  onClick={handleFirstInputChange}
                  onChange={isFirstInputChange}
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
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
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
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
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
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
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
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
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
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
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
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
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
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
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
                    id="customImages"
                    type='checkbox'
                    name='additional-first'
                    onChange={isFourdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check2']}>индивидуальные иконки
                  <input className={style['checkbox']}
                    id="customIcons"
                    type='checkbox'
                    name='additional-seconde'
                    onChange={isFourdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check3']}> фотографии
                  <input className={style['checkbox']}
                    id="photos"
                    type='checkbox'
                    name='additional-therd'
                    onChange={isFourdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check4']}>СРОЧНО !!!
                  <input className={style['checkbox']}
                    id="now"
                    type='checkbox'
                    name='additional-fourth'
                    onChange={isFourdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}
          <div>
          {/* <h4>first radio:</h4>
          <ul>
            {firstSelectedInputs.map((input, index) => (
              <li key={index}>{input}</li>
            ))}
          </ul>
          <h4>seconde radio:</h4>
          <ul>
            {secondSelectedInputs.map((input, index) => (
              <li key={index}>{input}</li>
            ))}
          </ul>
          <h4>third radio:</h4>
          <ul>
            {thirdSelectedInputs.map((input, index) => (
              <li key={index}>{input}</li>
            ))}
          </ul>
          <h4>fourd checkbox:</h4>
          <ul>
            {fourthSelectedInputs.map((input, index) => (
              <li key={index}>{input}</li>
            ))}
          </ul> */}
          {<h3 className={style['total-select']}>ВЫБРАНО : <p>{combinedString}</p></h3>}
        </div>

          <button type='submit'>добавить в корзину</button>
        </form>

      </div>
      <Footer />
    </div>
  )
}
