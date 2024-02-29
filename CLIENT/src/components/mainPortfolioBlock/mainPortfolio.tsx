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

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const small = useTransform(scrollYProgress, [0,1], [0, -50])
  const medium = useTransform(scrollYProgress, [0,1], [0, -150])
  const large = useTransform(scrollYProgress, [0,1], [0, -350])

  return (
    <section ref={ref} className={style['mainPortfolio-container']}>
      
      <div className={style['wrapper']}>
        <div className={style['word']}>
          <h3>Сайт бронирования отелей</h3>
          <p>🌍 Глобальное покрытие: можете выбирать и бронировать отели в любой точке земного шара</p>
          <p>💼 Удобство в бронировании: интуитивно понятный интерфейс позволяет выбирать, сравнивать цены и отели</p>
          <p>💳 Безопасная оплата:различные варианты оплаты</p>
        </div>
        <div className={style['images']}>
          <motion.img style={{y: medium}} className={style['booking-listing']} src={listing} alt='project image' height='300px' width='100px' />
          <motion.img style={{y: small}} className={style['booking-home']} src={home} alt='project image' height='550px' width='225px' />
          <motion.img style={{y: large}} className={style['booking-profile']} src={profile} alt='project image' height='250px' width='200px'/>
        </div>
      </div>
    
      <div className={style['wrapper']}>
        <div className={style['images']}>
          <motion.img style={{y: large}} className={style['telegram-chat']} src={telegramChat} alt='project image' height='400px' width='200px' />
          <motion.img style={{y: small}} className={style['telegram-desctop']} src={telegramDesctop} alt='project image' height='300px' width='400px' />
          <motion.img style={{y: medium}} className={style['telegram-call']} src={telegramCall} alt='project image' height='250px' width='175px'/>
        </div>
        <div className={style['word']}>
          <h3>Бот</h3>
          <p>Telegram бот будущее коммуникаций </p>
          <p>🤖 Чат-бот: Умная связь, мгновенные ответы! экономите время От поддержки клиентов до заказа услуг</p>
          <p>🛒 Магазин-бот: онлайн-шопинг </p>
          <p>🚀 Преимущества:  Мгновенность  Персонализация Простота использования
          </p>
        </div>
      </div>
      
      <div className={style['wrapper']}>
      <div className={style['word']}>
          <h3>Мобильное приложение</h3>
          <p> чат-интерфейс для сообщений или приложение для онлайн-шопинга</p>
          <p>📱 Чат-приложение: Где бы вы ни были</p>
          <p>🛍️ Приложение для шопинга: Весь магазин у вас в кармане!</p>
          <p>🚀 Преимущества:  Мобильность  Персонализация  Простота использования
          </p>
         </div>
        <div className={style['images']}>
          <motion.img style={{y: small}} className={style['mobile-loginLight']} src={mobileLoginLight} alt='project image' height='250px' width='125px' />
          <motion.img style={{y: small}} className={style['mobile-LoginDark']} src={mobileLoginDark} alt='project image' height='250px' width='125px' />
          <motion.img style={{y: large}} className={style['mobile-homeLight']} src={mobileHomeLight} alt='project image' height='250px' width='125px'/>
          <motion.img style={{y: large}} className={style['mobile-homeDark']} src={mobileHomeDark} alt='project image' height='250px' width='125px' />
          <motion.img style={{y: medium}} className={style['mobile-chatLight']} src={mobileChatLight} alt='project image' height='250px' width='125px' />
          <motion.img style={{y: medium}} className={style['mobile-chatDark']} src={mobileChatDark} alt='project image' height='250px' width='125px'/>
        </div>
      </div>

    </section>
  )
}
