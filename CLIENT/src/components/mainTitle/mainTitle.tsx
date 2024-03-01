import { motion } from 'framer-motion'
import style from './mainTitle.module.scss'

const textAnimation = {
  initial: {
    x: -250,
    opacity: 0,
  },
  animate: {
    x: 50,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}



export default function MainTitle() {
  return (

    <div className={style.mainTitleBlock}>
      <motion.div

        className={style.main_title__wrapp}>
        <motion.h1 className={style.main_title}
          variants={textAnimation}
          initial="initial"
          animate="animate"
        >
          webDot

          <motion.svg
            initial={{ opacity: 0, scale: 0.25 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            id="G_logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128" xmlSpace="preserve">
            <g>
              <path d="M10.4,38.9v53.5c0,7.4,3.7,11.3,10.6,11.3c9.4,0.1,18.6,0.1,28,0c6.7,0,10.5-4,10.5-11.1c0-6.3,0-21.2,0-21.2l-22.8,0.2
                V60.4c0,0,21.3,0,29.3,0c3.3,0.1,3.8,0.5,3.7,3.7c0,9.8,0.1,19.5,0,29.3c0,12.1-8.5,20.9-20.1,21c-9.8,0.1-19.7,0.1-29.5,0
                c-11.7,0-20.1-8.9-20.1-21.2V38.5c0.1-12,8.3-21,19.8-21.2C30,17,40.3,17,50.5,17.2c10.8,0.2,19.1,9.1,19.4,20.4c0,2,0,7.9,0,7.9
                H59.7c0,0,0-3.6-0.1-6.5C59.5,31.8,55.7,28,48.8,28h-28C14.3,28,10.4,31.9,10.4,38.9z"/>
              <path d="M128,128h-11L69.9,0h10.8L128,128z" />
            </g>
          </motion.svg>


        </motion.h1>
        <section className={style['main_title__text_wrapper']}>
          <motion.p variants={textAnimation} className={style.main_title_p}>WEB  UI  APP </motion.p>
          <motion.p variants={textAnimation} className={style.main_title_p2}>разработка и дизайн</motion.p>
        </section>
      </motion.div>

      {/* <motion.div className={style.slidingText}
        variants={{
          initial: { x: 0, y: 0, opacity: 0 },
          animate: {
            x: 100,
            y: 0,
            opacity: 1,
            transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              delay: 0,
              duration: 1,
            },
          },
        }}
        initial='initial'
        animate='animate'
      
      >
        <motion.svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
         strokeLinecap='round' strokeLinejoin='round'
        >
          <path d="M38.1874,27.6862C32.6951,33.6711,24,41.7029,24,41.7029s-3.5051-3.2377-7.47-7.1335m-3.1973-3.1929c-3.3451-3.4028-6.446-6.787-7.5147-8.638C3.1342,18.09,4.5874,10.7933,9.8293,7.7672S21.7745,6.5368,24,11.7787c2.2259-5.2419,8.9287-7.0379,14.1707-4.0115s6.6951,10.323,4.0115,14.9713a14.1045,14.1045,0,0,1-1.0132,1.47" />
        </motion.svg>

        <motion.svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path strokeWidth="0.25px" d="M13.75 10H11V5h-1v13h3.75A1.251 1.251 0 0 0 15 16.75v-5.5A1.251 1.251 0 0 0 13.75 10zm.25 6.75a.25.25 0 0 1-.25.25H11v-6h2.75a.25.25 0 0 1 .25.25zM7 10H3v1h4v2H4.25A1.251 1.251 0 0 0 3 14.25v2.5A1.251 1.251 0 0 0 4.25 18H8v-7a1.001 1.001 0 0 0-1-1zm0 7H4.25a.25.25 0 0 1-.25-.25v-2.5a.25.25 0 0 1 .25-.25H7zm11.25-7H22v1h-3.75a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25H22v1h-3.75A1.251 1.251 0 0 1 17 16.75v-5.5A1.251 1.251 0 0 1 18.25 10z">
            </path>
            <path strokeWidth="0.35px" fill="none" d="M0 0h24v24H0z">
            </path>
          </g>
        </motion.svg>


      </motion.div> */}
    </div >
  )
}
