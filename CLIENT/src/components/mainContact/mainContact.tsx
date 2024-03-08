import { Link } from 'react-router-dom'
import style from './mainContact.module.scss'
import { motion } from 'framer-motion'
// import { useRef } from 'react'


const variants = {
  initial: {
    y: 250,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    },
  },
}

export default function MainContact() {

  // const ref = useRef<HTMLDivElement>(null)
  // const isInView = useInView(ref, { margin: '-50px' })


  return (
    <motion.section className={style['mainContact-wrapper']}
    >
      <motion.div className={style['mainContact']}
        variants={variants}
        initial='initial'
        whileInView='animate'
      >

        <motion.div className={style['text-container']}>
          <motion.h2 variants={variants}>Контакты</motion.h2>
          <motion.ul>
            <motion.li variants={variants}>
              {/* <h4>Телефон</h4> */}
              <Link className={style['contacts-link']} to=''>+79022888989</Link>
            </motion.li>
            <motion.li variants={variants}>
              {/* <h4>Адрес</h4> */}
              <Link className={style['contacts-link']} to=''>Санкт-Петербург,<br /> Невский Проспект 25</Link>
            </motion.li>
            {/* <motion.li variants={variants}>
              <h4>Порнхаб</h4>
              <Link className={style['contacts-link']} to=''>~ -- hard ...<br/>~ G\ ...</Link>
            </motion.li> */}
          </motion.ul>
        </motion.div>


        <motion.div className={style['form-container']}>
          <motion.div className={style['phoneSvg']}
            initial={{ opacity: 0.75 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >






             <motion.svg 
              version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve">
              <motion.path
              className={style['svg-dro-shadow']}
              fill="transparent"
              strokeWidth="0.2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="white"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.5 }}
                d="M26.2,8.5c-2.2-3.2-5.6-5.2-9.3-5.5c-0.3,0-0.6,0-0.9,0c-3.7,0-7.2,1.6-9.7,4.3c-2.5,2.7-3.6,6.4-3.2,10.1
                c0.7,6,5.5,10.8,11.5,11.4C15,29,15.5,29,16,29c2.6,0,5-0.7,7.2-2.2c0.5-0.3,0.6-0.9,0.3-1.4c-0.3-0.5-0.9-0.6-1.4-0.3
                c-2.2,1.4-4.7,2.1-7.3,1.8c-5.1-0.5-9.1-4.6-9.7-9.7C4.7,14.1,5.7,11,7.8,8.7c2.3-2.5,5.6-3.9,9-3.6c3.2,0.2,6,1.9,7.8,4.6
                c1.9,2.9,2.4,6.3,1.3,9.6l0,0.1c-0.3,1-1.3,1.7-2.4,1.7c-1.4,0-2.5-1.1-2.5-2.5V17v-2v-4c0-0.6-0.4-1-1-1s-1,0.4-1,1v0
                c-0.8-0.6-1.9-1-3-1c-2.8,0-5,2.2-5,5v2c0,2.8,2.2,5,5,5c1.4,0,2.6-0.6,3.5-1.4c0.7,1.4,2.2,2.4,4,2.4c1.9,0,3.6-1.2,4.3-3.1l0-0.1
                C29.1,16,28.5,11.9,26.2,8.5z M19,17c0,1.7-1.3,3-3,3s-3-1.3-3-3v-2c0-1.7,1.3-3,3-3s3,1.3,3,3V17z"
                />
           
            </motion.svg>
          </motion.div> 

          <motion.form
            variants={variants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <input type='text' required placeholder='Имя' />
            <input type='email' required placeholder='Мэйл' />
            <textarea rows={8} placeholder='Сообщение' />
            <button>Отправить</button>
          </motion.form>

        </motion.div>
    

        <motion.div className={style['map-container']}>
          <Link 
          to='https://yandex.ru/maps/?um=constructor%3A79af2e9c48ffa7c365f901bcd4cf6580e882b05e8a8e16db519791a987254baa&source=constructorLink'
          >

          </Link>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A79af2e9c48ffa7c365f901bcd4cf6580e882b05e8a8e16db519791a987254baa&amp;source=constructor" 
        frameBorder={0}>
        </iframe>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
