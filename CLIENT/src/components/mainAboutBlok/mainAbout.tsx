import style from './mainAbout.module.scss'
import people from '../../img/people.webp'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const variants = {
  initial: {
    x: -500,
    y: -5,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.25,
    }
  },

}

export default function MainAbout() {

  const ref = useRef<HTMLDivElement>(null)
  // const inVew = useInView(ref, { margin: '-100px' })

  return (
    <motion.section className={style['mainAbout-wrapper']}>
      <motion.div className={style['mainAbout']}
        ref={ref}
        variants={variants}
        initial='initial'
        // animate='animate'
        whileInView='animate'
        // animate={inVew && 'animate'}
      >
        <motion.div className={style['text-container']} variants={variants}>
          <p>Я помогаю вам,<br />
            расти и развиваться</p>
          <hr />
        </motion.div>
        <motion.div className={style['title-container']} variants={variants}>
          <div className={style['title']}>
            <img src={people} alt='img working people' />
            <h2>
              <b>Уникальные</b> Идеи</h2>
          </div>
          <div className={style['title']}>
            <h2>
              <b>Для вашего</b> Бизнеса
            </h2>
            <Link to='/portfolio' className={style['button']} >Что Предлагаю ?</Link>
          </div>

        </motion.div>
        <motion.div className={style['list-container']} variants={variants}>
          <ul className={style['box']}>

            <motion.li>
              <svg version="1.1" id="task" width='125px' height='125px' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 128 128" xmlSpace="preserve">
                <g>
                  <path d="M105.26,7.9H73.72c-0.87-4.6-4.91-8.09-9.75-8.09c-4.85,0-8.89,3.49-9.75,8.09H22.59c-3.84,0-6.96,3.12-6.96,6.96v106.48
                      c0,3.84,3.12,6.96,6.96,6.96h82.67c3.84,0,6.96-3.12,6.96-6.96V14.86C112.22,11.02,109.1,7.9,105.26,7.9z M43.78,11.9h40v12.21h-40
                      V11.9z M63.97,3.81c2.63,0,4.86,1.72,5.63,4.09H58.34C59.11,5.53,61.34,3.81,63.97,3.81z M108.22,121.34
                      c0,1.63-1.33,2.96-2.96,2.96H22.59c-1.63,0-2.96-1.33-2.96-2.96V14.86c0-1.63,1.33-2.96,2.96-2.96h17.19v14.21c0,1.1,0.9,2,2,2h44
                      c1.1,0,2-0.9,2-2V11.9h17.48c1.63,0,2.96,1.33,2.96,2.96V121.34z"/>
                  <path d="M98,20.15h-6c-1.1,0-2,0.9-2,2s0.9,2,2,2h4V112H32.11V24.15h3.87c1.1,0,2-0.9,2-2s-0.9-2-2-2h-5.87c-1.1,0-2,0.9-2,2V114
                      c0,1.1,0.9,2,2,2H98c1.1,0,2-0.9,2-2V22.15C100,21.05,99.1,20.15,98,20.15z"/>
                  <path d="M66,48h22c1.1,0,2-0.9,2-2s-0.9-2-2-2H66c-1.1,0-2,0.9-2,2S64.9,48,66,48z" />
                  <path d="M66,60h15.89c1.1,0,2-0.9,2-2s-0.9-2-2-2H66c-1.1,0-2,0.9-2,2S64.9,60,66,60z" />
                  <path d="M66,76h22c1.1,0,2-0.9,2-2s-0.9-2-2-2H66c-1.1,0-2,0.9-2,2S64.9,76,66,76z" />
                  <path d="M66,88h15.89c1.1,0,2-0.9,2-2s-0.9-2-2-2H66c-1.1,0-2,0.9-2,2S64.9,88,66,88z" />
                  <path d="M56.67,72.07l-9.49,11.62l-6.21-6.21c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83l7.78,7.78
                    c0.38,0.38,0.88,0.59,1.41,0.59c0.03,0,0.07,0,0.1,0c0.56-0.03,1.09-0.29,1.45-0.73L59.77,74.6c0.7-0.86,0.57-2.12-0.28-2.81
                    C58.63,71.08,57.37,71.21,56.67,72.07z"/>
                  <path d="M38.14,52.32l7.78,7.78c0.38,0.38,0.88,0.59,1.41,0.59c0.03,0,0.07,0,0.1,0c0.56-0.03,1.09-0.29,1.45-0.73l10.89-13.33
                    c0.7-0.86,0.57-2.12-0.28-2.81c-0.86-0.7-2.12-0.57-2.81,0.28L47.18,55.7l-6.21-6.21c-0.78-0.78-2.05-0.78-2.83,0
                    C37.36,50.27,37.36,51.54,38.14,52.32z"/>
                </g>
              </svg>
              <h3>
                Задача
              </h3>
              <p>
                Изучаю задачу, взаимодействуя с заказчиком для понимания его потребностей.<br />
                На основе этого анализа составляю ТЗ.
              </p>
            </motion.li>

            <motion.li>
              <svg version="1.1" id="contract" width='125px' height='125px' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 128 128" xmlSpace="preserve">
                <g>
                  <path d="M92.18,1.38H9.96C6.12,1.38,3,4.51,3,8.35v111c0,3.84,3.12,6.96,6.96,6.96h82.21c3.84,0,6.96-3.12,6.96-6.96v-111
                      C99.14,4.51,96.01,1.38,92.18,1.38z M95.14,119.34c0,1.63-1.33,2.96-2.96,2.96H9.96c-1.63,0-2.96-1.33-2.96-2.96v-111
                      c0-1.63,1.33-2.96,2.96-2.96h82.21c1.63,0,2.96,1.33,2.96,2.96V119.34z"/>
                  <path d="M124.92,106.57c0.01-0.05,0.03-0.09,0.04-0.14c0-0.02,0-0.04,0.01-0.06c0.02-0.11,0.03-0.23,0.03-0.34c0,0,0,0,0-0.01V8.35
                      c0-3.84-3.12-6.96-6.96-6.96h-4.62c-3.84,0-6.96,3.12-6.96,6.96v97.68c0,0,0,0,0,0.01c0,0.11,0.01,0.23,0.03,0.34
                      c0,0.02,0,0.04,0.01,0.06c0.01,0.05,0.03,0.09,0.04,0.14c0.02,0.08,0.04,0.17,0.08,0.24c0,0,0,0.01,0,0.01l7.27,16.75
                      c0.32,0.73,1.04,1.2,1.83,1.2s1.52-0.47,1.83-1.2l7.27-16.75c0,0,0-0.01,0-0.01C124.87,106.74,124.89,106.65,124.92,106.57z
                      M110.45,17H121v87.03h-10.55V17z M113.41,5.38h4.62c1.63,0,2.96,1.33,2.96,2.96V13h-10.55V8.35
                      C110.45,6.71,111.78,5.38,113.41,5.38z M115.73,117.76l-4.22-9.73h8.45L115.73,117.76z"/>
                  <path d="M21.57,21.95h35.97c1.1,0,2-0.9,2-2s-0.9-2-2-2H21.57c-1.1,0-2,0.9-2,2S20.46,21.95,21.57,21.95z" />
                  <path d="M21.57,38.12h48.09c1.1,0,2-0.9,2-2s-0.9-2-2-2H21.57c-1.1,0-2,0.9-2,2S20.46,38.12,21.57,38.12z" />
                  <path d="M21.57,54.69h59c1.1,0,2-0.9,2-2s-0.9-2-2-2h-59c-1.1,0-2,0.9-2,2S20.46,54.69,21.57,54.69z" />
                  <path d="M21.57,71.25h59c1.1,0,2-0.9,2-2s-0.9-2-2-2h-59c-1.1,0-2,0.9-2,2S20.46,71.25,21.57,71.25z" />
                  <path d="M32.88,83.65c-7.21,0-13.08,5.87-13.08,13.08s5.87,13.08,13.08,13.08s13.08-5.87,13.08-13.08S40.1,83.65,32.88,83.65z
                    M32.88,105.82c-5.01,0-9.08-4.07-9.08-9.08s4.07-9.08,9.08-9.08c5.01,0,9.08,4.07,9.08,9.08S37.89,105.82,32.88,105.82z"/>
                  <path d="M69.66,83.65c-7.21,0-13.08,5.87-13.08,13.08s5.87,13.08,13.08,13.08s13.08-5.87,13.08-13.08S76.87,83.65,69.66,83.65z
                    M69.66,105.82c-5.01,0-9.08-4.07-9.08-9.08s4.07-9.08,9.08-9.08s9.08,4.07,9.08,9.08S74.67,105.82,69.66,105.82z"/>
                </g>
              </svg>
              <h3>
                Договор
              </h3>
              <p>
                Заключаем договор, определяющий обязательства и сроки.<br />
                Это обеспечивает прозрачность и взаимопонимание.
              </p>
            </motion.li>

            <motion.li>
              <svg version="1.1" id="design" width='125px' height='125px' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 128 128" xmlSpace="preserve">
                <g>
                  <path d="M120.92,2.19H7.52c-3.84,0-6.96,3.12-6.96,6.96v69.68c0,1.1,0.9,2,2,2s2-0.9,2-2V9.15c0-1.63,1.33-2.96,2.96-2.96h113.4
                      c1.63,0,2.96,1.33,2.96,2.96v8.24c0,1.1,0.9,2,2,2s2-0.9,2-2V9.15C127.88,5.31,124.76,2.19,120.92,2.19z"/>
                  <path d="M65.44,121.67H52c2.1-2.25,3.4-5.26,3.4-8.57v-8.96H64c1.1,0,2-0.9,2-2s-0.9-2-2-2H7.52c-1.63,0-2.96-1.33-2.96-2.96v-7.03
                      c0-1.63,1.33-2.96,2.96-2.96H64c1.1,0,2-0.9,2-2s-0.9-2-2-2H7.52c-3.84,0-6.96,3.12-6.96,6.96v7.03c0,3.84,3.12,6.96,6.96,6.96
                      h43.89v8.96c0,4.73-3.85,8.57-8.57,8.57h-4.26h-2.35c-1.1,0-2,0.9-2,2s0.9,2,2,2h2.35h4.26h22.61c1.1,0,2-0.9,2-2
                      S66.55,121.67,65.44,121.67z"/>
                  <path d="M120.92,20.19H74.11c-3.84,0-6.96,3.12-6.96,6.96v91.56c0,3.84,3.12,6.96,6.96,6.96h46.81c3.84,0,6.96-3.12,6.96-6.96
                      V27.15C127.88,23.31,124.76,20.19,120.92,20.19z M123.88,118.7c0,1.63-1.33,2.96-2.96,2.96H74.11c-1.63,0-2.96-1.33-2.96-2.96
                      V27.15c0-1.63,1.33-2.96,2.96-2.96h46.81c1.63,0,2.96,1.33,2.96,2.96V118.7z"/>
                  <path d="M109.15,28.1H86.63c-1.1,0-2,0.9-2,2s0.9,2,2,2h22.52c1.1,0,2-0.9,2-2S110.25,28.1,109.15,28.1z" />
                  <path d="M101,112.85h-5.93c-1.1,0-2,0.9-2,2s0.9,2,2,2H101c1.1,0,2-0.9,2-2S102.1,112.85,101,112.85z" />
                </g>
              </svg>
              <h3>
                Дизайн
              </h3>
              <p>
                Разрабатываю концепцию и дизайн. <br />
                Пользовательского опыта и визуальный дизайн<br />
                ключевые элементы этапа разработки.
              </p>
            </motion.li>

            <motion.li>
              <svg version="1.1" id="develop" width='125px' height='125px' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 128 128" xmlSpace="preserve">
                <g>
                  <path d="M93.26,71.65c-7.55,0-13.7,6.14-13.7,13.7s6.14,13.7,13.7,13.7s13.7-6.14,13.7-13.7S100.82,71.65,93.26,71.65z
		                  M93.26,95.04c-5.35,0-9.7-4.35-9.7-9.7s4.35-9.7,9.7-9.7s9.7,4.35,9.7,9.7S98.61,95.04,93.26,95.04z"/>
                  <path d="M127.32,77.19c-0.09-0.43-0.31-0.83-0.66-1.13c-0.32-0.27-0.7-0.43-1.1-0.47l-5.05-0.86c-1.3-3.38-3.25-6.52-5.71-9.21
                      l1.84-4.33c0.14-0.27,0.21-0.58,0.21-0.9c0-0.58-0.25-1.13-0.69-1.51c-1.74-1.51-3.66-2.87-5.72-4.03V9.49
                      c0-3.47-2.83-6.3-6.31-6.3H9.01c-3.48,0-6.31,2.83-6.31,6.3v71.48c0,3.48,2.83,6.31,6.31,6.31H43.1c0.87,1.07,2.63,3.7,2.84,7.58
                      c-6.54,2.03-12.33,5.83-16.78,11.12c-0.5,0.59-0.61,1.43-0.29,2.13c0.33,0.71,1.04,1.16,1.81,1.16H68.3
                      c0.08,0.41,0.29,0.8,0.6,1.09c3.56,3.46,7.72,6.07,12.36,7.76c0.86,0.32,1.82,0,2.33-0.75l2.89-3.73
                      c3.74,0.89,7.74,1.04,11.59,0.39l2.65,4.01c0.38,0.57,1.01,0.9,1.67,0.9c0.18,0,0.37-0.03,0.55-0.08c5.1-1.46,9.87-4.12,13.82-7.71
                      c0.26-0.23,0.46-0.53,0.58-0.87c0.16-0.47,0.13-0.96-0.05-1.4l-1.68-4.63c1.38-1.37,3.61-4.15,5.1-8.87l4.81-0.53
                      c0.35-0.03,0.7-0.15,1-0.37c0.45-0.32,0.73-0.8,0.81-1.31c0.61-2.58,0.92-5.26,0.92-7.96C128.26,82.5,127.94,79.8,127.32,77.19z
                      M9.01,7.19h95.13c1.27,0,2.31,1.03,2.31,2.3v43.33c-0.89-0.36-1.79-0.7-2.71-0.98c-0.76-0.24-1.62,0.01-2.13,0.62l-3.39,4
                      c-3.27-0.57-6.66-0.57-9.93,0l-3.39-4c-0.35-0.41-0.83-0.65-1.32-0.7c-0.27-0.03-0.54,0-0.81,0.08c-5.66,1.77-10.82,5-14.93,9.34
                      c-0.37,0.34-0.59,0.82-0.63,1.32H6.7V9.49C6.7,8.22,7.74,7.19,9.01,7.19z M6.7,80.97V66.5h61.62l0.75,2.38
                      c-1.38,2.02-2.49,4.21-3.31,6.53l-5.4,1.47c-0.29,0.08-0.55,0.22-0.76,0.4c-0.33,0.28-0.57,0.67-0.67,1.11
                      c-0.04,0.19-0.07,0.39-0.09,0.54c-0.27,1.41-0.44,2.87-0.52,4.35H9.01C7.74,83.28,6.7,82.24,6.7,80.97z M58.34,87.28
                      c0.07,1.22,0.2,2.44,0.4,3.64c0.06,0.43,0.25,0.83,0.57,1.16c0.25,0.25,0.55,0.42,0.88,0.51l4.75,1.64
                      c-4.94-1.17-10.07-1.3-15.06-0.36c-0.27-2.71-1.12-4.93-2.01-6.59H58.34z M48.46,98.27c5.32-1.39,10.94-1.39,16.24,0
                      c1,0.27,1.98,0.59,2.94,0.94c0.51,0.93,1.05,1.82,1.65,2.67l-0.51,3.38H35.41C39.14,101.94,43.58,99.56,48.46,98.27z M123.71,91.04
                      l-4.76,0.52c-0.82,0.09-1.5,0.68-1.72,1.48c-1.72,6.51-5.08,8.96-5.09,8.97c-0.76,0.51-1.07,1.48-0.75,2.33l1.71,4.71
                      c-2.92,2.43-6.28,4.32-9.86,5.54l-2.56-3.87c-0.19-0.29-0.46-0.53-0.78-0.69c-0.28-0.14-0.59-0.21-0.89-0.21
                      c-0.14,0-0.28,0.01-0.42,0.05c-4.03,0.87-8.3,0.73-12.2-0.38c-0.22-0.08-0.47-0.1-0.68-0.12c-0.61,0-1.19,0.29-1.57,0.78
                      l-2.85,3.68c-3.28-1.37-6.26-3.28-8.9-5.7l0.96-6.33c0.12-0.56-0.01-1.15-0.35-1.61c-1.13-1.52-2.1-3.21-2.88-5.01
                      c-0.41-0.96-0.75-1.9-1.01-2.8c-0.16-0.64-0.64-1.18-1.29-1.4l-5.29-1.82c-0.16-1.28-0.24-2.57-0.25-3.87c0-0.01,0-0.01,0-0.02
                      c0-0.01,0-0.02,0-0.03c0-0.01,0-0.01,0-0.02c0-1.65,0.13-3.27,0.38-4.83l5.07-1.38c0.71-0.14,1.29-0.66,1.51-1.36
                      c0.83-2.62,2.06-5.06,3.67-7.26c0.25-0.34,0.39-0.77,0.39-1.19c0-0.26-0.05-0.52-0.15-0.75l-1.67-5.26
                      c3.2-3.17,7.05-5.61,11.26-7.13l3.19,3.77c0.01,0.01,0.02,0.02,0.03,0.03c0.47,0.61,1.25,0.89,2,0.73c3.48-0.75,7.15-0.75,10.63,0
                      c0.74,0.17,1.5-0.12,1.97-0.69l3.24-3.84c1.52,0.55,3.01,1.22,4.44,2.01c1.49,0.83,2.89,1.76,4.2,2.79l-1.82,4.29
                      c-0.04,0.1-0.08,0.2-0.11,0.31c-0.19,0.75,0.07,1.5,0.62,1.98c2.71,2.73,4.79,6.08,6.01,9.69c0.24,0.7,0.83,1.21,1.56,1.33l5,0.85
                      c0.37,1.92,0.56,3.9,0.56,5.89C124.26,87.19,124.08,89.15,123.71,91.04z"/>
                  <path d="M51.32,45.2c0.31,0.17,0.65,0.26,0.98,0.26c0.7,0,1.38-0.37,1.75-1.02l8.49-15.11c0.54-0.96,0.2-2.18-0.76-2.72
		                c-0.97-0.54-2.18-0.2-2.72,0.76l-8.49,15.11C50.02,43.44,50.36,44.66,51.32,45.2z"/>
                  <path d="M67.33,46.31c0.39,0.38,0.89,0.57,1.4,0.57c0.52,0,1.04-0.2,1.43-0.6l8.68-8.91c0.76-0.78,0.76-2.01,0-2.79l-8.68-8.91
		                c-0.77-0.79-2.04-0.81-2.83-0.04c-0.79,0.77-0.81,2.04-0.04,2.83l7.32,7.51l-7.32,7.51C66.52,44.27,66.54,45.54,67.33,46.31z"/>
                  <path d="M43.39,46.63c0.39,0.4,0.91,0.6,1.43,0.6c0.5,0,1.01-0.19,1.4-0.57c0.79-0.77,0.8-2.04,0.03-2.83l-7.72-7.89l7.15-7.5
		                c0.76-0.8,0.73-2.07-0.07-2.83c-0.8-0.76-2.07-0.73-2.83,0.07l-8.48,8.89c-0.74,0.78-0.74,2.01,0.02,2.78L43.39,46.63z"/>
                  <circle cx="55.8" cy="74.25" r="2.47" />
                </g>
              </svg>
              <h3>
                Программирование
              </h3>
              <p>
                После утверждения дизайна приступаю к верстке и программированию<br />
                Код написана с учетом современных стандартов и требований.
              </p>
            </motion.li>

            <motion.li>
              <svg version="1.1" id="test" width='125px' height='125px' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 128 128" xmlSpace="preserve">
                <g>
                  <path d="M119.3,4.33H9.67c-3.84,0-6.96,3.12-6.96,6.96v82.37c0,3.84,3.12,6.96,6.96,6.96h39.42c1.01,1.22,3.25,4.43,3.45,9.25
                    c-7.49,2.28-14.25,6.66-19.42,12.79c-0.5,0.59-0.61,1.43-0.29,2.13c0.33,0.71,1.04,1.16,1.81,1.16h59.67
                    c0.78,0,1.49-0.45,1.81-1.16c0.33-0.71,0.22-1.54-0.29-2.13c-5.17-6.13-11.93-10.51-19.41-12.79c0.2-4.82,2.43-8.03,3.45-9.26
                    h39.41c3.84,0,6.96-3.12,6.96-6.96V11.29C126.26,7.46,123.14,4.33,119.3,4.33z M9.67,8.33H119.3c1.63,0,2.96,1.33,2.96,2.96v61.39
                    H6.7V11.29C6.7,9.66,8.03,8.33,9.67,8.33z M39.32,121.97c6.81-6.32,15.77-9.87,25.17-9.87c9.4,0,18.35,3.55,25.16,9.87H39.32z
                    M72.5,108.9c-2.61-0.52-5.29-0.8-8.01-0.8c-2.72,0-5.4,0.28-8.01,0.8c-0.29-3.5-1.42-6.29-2.56-8.27h21.14
                    C73.92,102.61,72.78,105.4,72.5,108.9z M119.3,96.63H9.67c-1.63,0-2.96-1.33-2.96-2.96V76.69h115.56v16.98
                    C122.26,95.3,120.93,96.63,119.3,96.63z"/>
                  <path d="M62.19,57.55c0.37,0.36,0.87,0.57,1.39,0.57c0.02,0,0.04,0,0.06,0c0.54-0.02,1.05-0.25,1.42-0.65l27.85-30.52
                    c0.74-0.82,0.69-2.08-0.13-2.83c-0.82-0.74-2.08-0.68-2.83,0.13l-26.46,29L49.27,39.42c-0.79-0.77-2.06-0.75-2.83,0.04
                    c-0.77,0.79-0.75,2.06,0.04,2.83L62.19,57.55z"/>
                  <path d="M63.59,83.08c-1.57,0-2.84,1.27-2.84,2.84s1.27,2.84,2.84,2.84c1.57,0,2.84-1.27,2.84-2.84S65.16,83.08,63.59,83.08z" />
                </g>
              </svg>
              <h3>
                Тестирование
              </h3>
              <p>
                Перед запуском проекта провожу тщательное тестирование<br />
                Этот этап гарантирует стабильность и безошибочную работу продукта.
              </p>
            </motion.li>

            <motion.li>
              <svg version="1.1" id="start" width='125px' height='125px' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 128 128" xmlSpace="preserve">
                <g>
                  <path d="M127.08,2.52c-0.06-1.01-0.87-1.82-1.88-1.87c-0.29-0.03-22.67-1.05-41.84,15.81c-8.33-3.73-18.06-2.03-24.6,4.46
                      c-0.38,0.38-0.59,0.89-0.59,1.42s0.21,1.05,0.59,1.42l10.45,10.35c-0.42,0.75-0.84,1.52-1.25,2.31
                      c-5.65-2.45-11.66-3.78-17.96-3.94c-0.23-0.03-0.37-0.02-0.37-0.03v0.02c-0.28-0.01-0.56-0.02-0.84-0.02
                      c-0.23,0-0.47,0.01-0.7,0.02c-0.09-0.01-0.17-0.02-0.26-0.01c-0.04,0-0.12,0.01-0.25,0.02C21.74,33.12,0.9,54.13,0.89,79.89
                      c0,0.01,0,0.02,0,0.02c0,0.01,0,0.02,0,0.03c0.02,26.16,21.5,47.43,47.9,47.43c26.41,0,47.89-21.28,47.9-47.45
                      c0-0.01,0-0.01,0-0.01c0,0,0-0.01,0-0.01c0-7.28-1.72-14.49-4.96-20.98c0.55-0.29,1.1-0.58,1.64-0.88l10.29,10.19
                      c0.39,0.39,0.9,0.58,1.41,0.58s1.02-0.19,1.41-0.58c6.46-6.4,8.23-15.94,4.62-24.14C128.18,25.07,127.1,2.82,127.08,2.52z
                      M88.11,56.28c-0.01,0.01-0.03,0.01-0.04,0.02c-0.01,0-0.01,0.01-0.02,0.01c-0.02,0.01-0.04,0.02-0.05,0.03l-8.52-8.37l-0.12-0.12
                      l-8.44-8.42c3.98-7.98,8.75-14.14,13.78-18.89c0.22-0.13,0.42-0.31,0.58-0.52c15-13.78,32.16-15.29,37.82-15.39
                      C122.89,12.13,119.95,40.65,88.11,56.28z M76.59,50.74c0,0,0.01,0.01,0.01,0.01l0.08,0.08l4.71,4.66l-5.2,8.33l-12.82-12.7
                      l1.81-1.11c0.04-0.03,0.09-0.05,0.13-0.08l6.47-3.96l4.75,4.7L76.59,50.74z M68.08,77.92H50.8V56.64c3.79-0.3,7.33-0.93,10.58-1.87
                      l4.18,4.14C66.89,64.39,67.73,70.77,68.08,77.92z M59.11,49.05c-0.52,0.32-0.87,0.86-0.94,1.47c-0.04,0.32,0.01,0.64,0.12,0.94
                      c-2.34,0.56-4.86,0.94-7.49,1.16V36.76c2.19,0.73,6.8,3.14,10.72,10.81L59.11,49.05z M67.08,41.24l1.81,1.81l-3.95,2.42
                      c-1.76-3.38-3.67-5.88-5.52-7.73c2.43,0.6,4.79,1.41,7.1,2.42C66.59,40.56,66.78,40.94,67.08,41.24z M46.8,36.79v16.05
                      c-4.77,0.04-8.88-0.63-12.32-1.64C38.66,40.72,44.28,37.66,46.8,36.79z M30.67,49.85c-3.89-1.62-6.59-3.52-8.1-4.77
                      c4.58-3.39,9.85-5.91,15.56-7.32C35.57,40.33,32.9,44.16,30.67,49.85z M46.29,56.85c0.17,0,0.34-0.01,0.51-0.01v21.08H29.51
                      c0.47-9.75,1.83-17.21,3.61-22.92C36.82,56.1,41.2,56.85,46.29,56.85z M46.8,81.92V103c-5.21-0.05-9.71,0.68-13.48,1.77
                      c-1.84-5.66-3.25-13.09-3.77-22.86H46.8z M46.8,107v15.38c-2.47-0.85-7.92-3.81-12.08-13.81C38.11,107.6,42.13,106.96,46.8,107z
                      M39.05,122.28c-6.06-1.37-11.65-3.96-16.48-7.53c1.54-1.27,4.32-3.23,8.33-4.86C33.36,115.93,36.31,119.8,39.05,122.28z
                      M50.8,122.38V107.2c4.67,0.41,8.51,1.3,11.64,2.39C58.34,118.77,53.18,121.56,50.8,122.38z M66.16,111.14
                      c3.57,1.74,5.81,3.63,7.04,4.88c-4.39,2.92-9.34,5.06-14.66,6.26C61.09,119.98,63.82,116.47,66.16,111.14z M50.8,103.19V81.92
                      h17.25c-0.55,10.4-2.12,18.16-4.13,23.94C60.38,104.6,56.05,103.61,50.8,103.19z M72.08,77.92c-0.24-5.02-0.71-9.68-1.43-13.95
                      l4.51,4.46C75.54,68.8,76.04,69,76.57,69c0.08,0,0.15,0,0.23-0.01c0.6-0.07,1.14-0.41,1.46-0.93l6.07-9.72l1.86,1.83
                      c0.38,0.38,0.89,0.57,1.4,0.57c0.18,0,0.36-0.03,0.54-0.09c2.68,5.36,4.22,11.26,4.5,17.26H72.08z M63.09,22.42
                      c4.84-3.83,11.25-4.92,17.07-2.93c-3.11,3.15-6.09,6.82-8.83,11.09L63.09,22.42z M19.41,47.66c1.65,1.47,4.94,3.98,9.92,6.01
                      c-1.92,6.14-3.35,14.04-3.82,24.24H4.95C5.5,65.93,10.97,55.2,19.41,47.66z M4.95,81.92h20.6c0.53,10.2,2.01,18.08,3.98,24.17
                      c-5.09,2.04-8.44,4.6-10.11,6.09C10.97,104.63,5.5,93.9,4.95,81.92z M76.46,113.63c-1.47-1.6-4.24-4.08-8.82-6.25
                      c2.18-6.25,3.85-14.52,4.41-25.46h20.6C92.06,94.7,85.87,106.05,76.46,113.63z M105,63.92l-8.06-7.98
                      c4.28-2.69,7.96-5.62,11.11-8.68C109.94,52.95,108.82,59.21,105,63.92z"/>
                  <path d="M101.36,36.53c2.66,0,5.33-1,7.36-3.01c1.97-1.95,3.06-4.55,3.06-7.31s-1.09-5.36-3.06-7.31c-4.06-4.02-10.65-4.02-14.71,0
                      c-1.97,1.95-3.06,4.55-3.06,7.31s1.08,5.36,3.06,7.31C96.03,35.53,98.69,36.53,101.36,36.53z M96.81,21.74
                      c1.25-1.24,2.9-1.86,4.54-1.86s3.29,0.62,4.54,1.86c1.21,1.2,1.87,2.78,1.87,4.47c0,1.69-0.66,3.28-1.87,4.47
                      c-2.5,2.48-6.58,2.48-9.08,0c-1.21-1.2-1.87-2.78-1.87-4.47C94.94,24.52,95.61,22.93,96.81,21.74z"/>
                </g>
              </svg>

              <h3>
                Запуск
              </h3>
              <p>
                После успешного завершения всех этапов проект готов к запуску.<br />
                Предоставляю полное сопровождение на начальном этапе эксплуатации.
              </p>
            </motion.li>

          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
