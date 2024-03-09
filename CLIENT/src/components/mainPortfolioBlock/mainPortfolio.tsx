import style from './mainPortfolio.module.scss'
import home from '../../img/booking/bookingHome.png'
import listing from '../../img/booking/bookingListing.png'
import profile from '../../img/booking/bookingProfile.png'
import telegramDesctop from '../../img/telegram/telegramSideNav.png'
import telegramCall from '../../img/telegram/telegramCall.png'
import telegramChat from '../../img/telegram/telegramChat.png'
import mobileLoginLight from '../../img/mobileApp/mobileLoginLight.png'
import mobileLoginDark from '../../img/mobileApp/mobileLoginDark.png'
import mobileHomeLight from '../../img/mobileApp/mobileHomeLight.png'
import mobileHomeDark from '../../img/mobileApp/mobileHomeDark.png'
import mobileChatLight from '../../img/mobileApp/mobileChatLight.png'
import mobileChatDark from '../../img/mobileApp/mobileChatDark.png'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'


export default function MainPortfolio() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const small = useTransform(scrollYProgress, [0, 1], [0, -50])
  const medium = useTransform(scrollYProgress, [0, 1], [0, -150])
  const large = useTransform(scrollYProgress, [0, 1], [0, -350])

  return (
    <section ref={ref} className={style['mainPortfolio-container']}>

      <div className={style['wrapper']}>
        <div className={style['word']}>
          <h3>WEB</h3>
          <p>Мобильная и Десктопная версии  </p>
          <p>Понятный интерфейс,<br/>
           тренды дизайна,<br/>
           анимация</p>
          <p>
            Лендинг,<br />
            Внутренняя программа,<br />
            Сайт бронирования,<br />
            Магазин.
          </p>
        </div>
        <div className={style['images']}>
          <motion.img style={{ y: medium }} className={style['booking-listing']} src={listing} alt='project image'  />
          <motion.img style={{ y: small }} className={style['booking-home']} src={home} alt='project image' />
          <motion.img style={{ y: large }} className={style['booking-profile']} src={profile} alt='project image' />
        </div>
      </div>

      <div className={style['wrapper']}>
        <div className={style['images']}>
          <motion.img style={{ y: large }} className={style['telegram-chat']} src={telegramChat} alt='project image' />
          <motion.img style={{ y: small }} className={style['telegram-desctop']} src={telegramDesctop} alt='project image' />
          <motion.img style={{ y: medium }} className={style['telegram-call']} src={telegramCall} alt='project image'  />
        </div>
        <div className={style['word']}>
          <h3>Bot</h3>
          <p>Telegram бот- удобство коммуникаций </p>
          <p>мгновенные ответы,<br/>
          выигрывание времени на<br/>
          поддержке клиентов и<br/>
          скорости продаж.</p>
          <p>Магазин-бот, Чат-бот ... </p>
        </div>
      </div>

      <div className={style['wrapper']}>
        <div className={style['word']}>
          <h3>App</h3>
          <p>Чат, магазин, ежедневник ...</p>
          <p>Встраивается в телефон</p>
          <p>Доступ к геолокации,<br/>
          камере,<br/>
          ко всем функциям телефона.</p>
        </div>
        <div className={style['images']}>
          <motion.img style={{ y: small }} className={style['mobile-loginLight']} src={mobileLoginLight} alt='project image' />
          <motion.img style={{ y: small }} className={style['mobile-LoginDark']} src={mobileLoginDark} alt='project image' />
          <motion.img style={{ y: large }} className={style['mobile-homeLight']} src={mobileHomeLight} alt='project image' />
          <motion.img style={{ y: large }} className={style['mobile-homeDark']} src={mobileHomeDark} alt='project image' />
          <motion.img style={{ y: medium }} className={style['mobile-chatLight']} src={mobileChatLight} alt='project image' />
          <motion.img style={{ y: medium }} className={style['mobile-chatDark']} src={mobileChatDark} alt='project image' />
        </div>
      </div>

    </section>
  )
}
