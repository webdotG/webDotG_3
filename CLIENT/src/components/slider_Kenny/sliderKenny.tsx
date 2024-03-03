import style from './sliderKenny.module.scss'
import CheesingKenny from '../../img/sliderPhotoBack/Kenny-cheesing.png'
import BatmanKenny from '../../img/sliderPhotoBack/Batman_Kenny.png'
import PrincesseKenny from '../../img/sliderPhotoBack/Princess_Kenny.png'
import MysterionKenny from '../../img/sliderPhotoBack/Mysterion_Kenny.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slide1 = () => (
  <li className={style['sliderKenny-item-chees']} key={0} >
    <div className={style["web_container"]}>
      <div className={style['super-title']}><p>WEB</p></div>
      <div className={style['title1']}><h3>1 стр.<br/><p>(лендинг)</p></h3></div>
      <div className={style['title1']} ><h3>2-5 стр.<br/><p>(портфолио)</p></h3></div>
      <div className={style['title1']} ><h3>7 стр.<br/><p>(магазин)</p></h3></div>
      <div className={style['title']} ><h3>Шаблон</h3></div>
      <div className={style['text']}><p>десять </p></div>
      <div className={style['text']}><p>тридцать</p></div>
      <div className={style['text']}><p>сто</p></div>
      <div className={style['title']} ><h3>Инди</h3></div>
      <div className={style['text']}><p>двадцать</p></div>
      <div className={style['text']}><p>шестьдесят</p></div>
      <div className={style['text']}><p>сто</p></div>
    </div>
    <img className={style['img-scheesing']} src={CheesingKenny} alt='CheesingKenny' />
    <Link to='/shop' className={style["btn-toShop"]}>
      магазин</Link>
  </li>
)

const slide2 = () => (
  <li className={style['sliderKenny-item-batman']} key={1}>
    <div className={style['bot_container']}>
      <div className={style['super-title']}><p>Bot</p></div>
      <div className={style['title']}>Чат</div>
      <div className={style['title']}>Магазин</div>
      <div className={style['title']}>Шаблон</div>
      <div className={style['text']}>пятнадцать</div>
      <div className={style['text']}>пятьдесят</div>
      <div className={style['title']}>Инди</div>
      <div className={style['text']}>тридцать</div>
      <div className={style['text']}>сто</div>
    </div>
    <Link to='/shop' className={style["btn-toShop"]}>магазин</Link>
    <img className={style['batman']} src={BatmanKenny} alt='BatmanKenny' />
  </li>
)

const slide3 = () => (
  <li className={style['sliderKenny-item-princess']} key={2}>
    <div className={style['bot_container']}>
      <div className={style['super-title']}><p>App</p></div>
      <div className={style['title']}>Ios  Android</div>
      <div className={style['title']}>VK</div>
      <div className={style['title']}>Шаблон </div>
      <div className={style['text']}><p>сто двадцать</p></div>
      <div className={style['text']}><p>сто</p></div>
      <div className={style['title']}>Инди</div>
      <div className={style['text']}><p>сто пятьдесят</p></div>
      <div className={style['text']}><p>сто</p></div>
    </div>
    <Link to='/shop' className={style["btn-toShop"]}>магазин</Link>
    <img className={style['princess']} src={PrincesseKenny} alt='PrincesseKenny' />
  </li>
)

const slide4 = () => (
  <li className={`${style['sliderKenny-item-mysterion']}`} key={3}>
    <div className={style["npm_container"]}>
      <div className={style['super-title']}><p>NPM</p></div>
      <div className={style['title']}>React, JS<br/>CSS, Animation</div>
      <div className={style['title']}>Open Source</div>
      <div className={style['text']}>бесплатно</div>
    </div>
    {/* <Link to='/shop' className={style["btn-toShop"]}>магазин</Link> */}
    <img className={style['mysterion']} src={MysterionKenny} alt='MysterionKenny' />
  </li>
)

const slides = [slide1, slide2, slide3, slide4]

export default function SliderKenny() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    console.log('nextSlide')
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    console.log('prevSlide')
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // const startSlideShow = () => {
  //   return setInterval(() => {
  //     nextSlide();
  //   }, 15500);
  // };

  // useEffect(() => {
  //   const intervalId = startSlideShow();

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);


  return (
    <section className={style['sliderKenny-wrapper']} >

      <div className={style['sliderKenny']}>

        <button className={style['slider-btn--prev']}
          onClick={prevSlide}
        >
          <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="icomoon-ignore">
            </g>
            <path d="M16 15.999l14.928 8.531v-17.060l-14.928 8.529zM29.861 22.693l-11.712-6.693 11.712-6.692v13.385z" >
            </path>
            <path d="M1.073 15.999l14.928 8.531v-17.060l-14.928 8.529zM14.934 22.693l-11.712-6.693 11.712-6.692v13.385z" >
            </path>
          </svg>
        </button>

        <motion.ul className={style['sliderKenny-list']}
          key={currentSlide}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >


          {slides.map((slide, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.25,
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              key={index}
              className={`${style[`item-${index}`]} ${index === currentSlide ? style['display-block'] : ''}`}
            >
              <div className={`${style['puls-container']} ${index === 0 ? ` ${style['puls-container']} ` : ` ${style['display-none']} `}`}>
                <div className={style["pulsating-div"]}></div>
                <div className={style["pulsating-div2"]}></div>
                <div className={style["pulsating-div3"]}></div>
                <div className={style["pulsating-div4"]}></div>
                <div className={style["pulsating-div5"]}></div>
              </div>

              <div className={`${style['planet']} ${index === 1 ? ` ${style['planet']} ` : ` ${style['display-none']} `}`}>
                <div className={style["star1"]}></div>
                <div className={style["star2"]}></div>
                <div className={style["star3"]}></div>
              </div>

              {slide()}
            </motion.div>
          ))}

        </motion.ul>

        <button
          onClick={nextSlide}
          className={style['slider-btn--next']}
        >
          <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="icomoon-ignore">
            </g>
            <path d="M16 15.999l14.928 8.531v-17.060l-14.928 8.529zM29.861 22.693l-11.712-6.693 11.712-6.692v13.385z" >
            </path>
            <path d="M1.073 15.999l14.928 8.531v-17.060l-14.928 8.529zM14.934 22.693l-11.712-6.693 11.712-6.692v13.385z" >
            </path>
          </svg>
        </button>

        <section className={style['slider-pagination']}>
          {slides.map((_, index) => (
            <svg
              key={`slide-${index}`}
              className={`${style['pagination-item']} ${index === currentSlide ? style['selected'] : ''}`}
              onClick={() => goToSlide(index)}
             viewBox="-3 0 32 32"
              version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M12.8 3.2c-7.093 0-12.8 5.707-12.8 12.8s5.707 12.8 12.8 12.8c7.093 0 12.8-5.707 12.8-12.8s-5.707-12.8-12.8-12.8zM12.8 27.733c-6.453 0-11.733-5.28-11.733-11.733s5.28-11.733 11.733-11.733c6.453 0 11.733 5.28 11.733 11.733s-5.28 11.733-11.733 11.733z">
              </path>
              <path d="M19.467 19.040c-0.267-0.107-0.587-0.053-0.693 0.213-1.173 2.293-3.467 3.68-5.973 3.68-2.56 0-4.8-1.387-5.973-3.68-0.107-0.267-0.427-0.373-0.693-0.213-0.267 0.107-0.373 0.427-0.267 0.693 1.333 2.613 3.947 4.267 6.933 4.267 2.933 0 5.6-1.653 6.88-4.267 0.16-0.267 0.053-0.587-0.213-0.693z">
              </path>
              <path d="M10.133 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">
              </path>
              <path d="M18.667 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6z">
              </path>
            </svg>
          ))}
        </section>

      </div>
    </section>
  )
}
