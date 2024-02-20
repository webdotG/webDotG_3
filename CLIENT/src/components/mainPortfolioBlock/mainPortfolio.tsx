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
          <p>Добро пожаловать в мир беззаботных путешествий! Наш сайт бронирования отелей - это ваш надежный компаньон в мире удовольствий и комфорта. Забудьте о сложностях в поиске и бронировании жилья – с нами все проще, чем кажется!</p>
          <p>🌍 Глобальное покрытие: Благодаря нашей мировой платформе вы можете выбирать и бронировать отели в любой точке земного шара. Будь то загадочные уголки старого Европейского континента, сказочные пляжи тропиков или пульсирующие мегаполисы – мы поможем вам найти идеальное место для проживания.</p>
          <p>💼 Удобство в бронировании: Наш интуитивно понятный интерфейс позволяет вам легко выбирать отели, сравнивать цены и находить оптимальные варианты. Просто введите даты вашего пребывания, выберите предпочтительные удобства и наслаждайтесь мгновенным подтверждением брони.</p>
          <p>💳 Безопасная оплата: Заботимся о вашей безопасности! Мы предоставляем различные варианты оплаты, используя современные технологии шифрования, чтобы ваши финансовые данные были на самом высоком уровне защищены.</p>
          <p>Не откладывайте свои мечты в долгий ящик – сделайте свое путешествие незабываемым, начиная с удобного бронирования на нашем сайте! Путешествуйте с удовольствием, выбирайте лучшие отели мира с нами.</p>
        
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
          <motion.img style={{y: small}} className={style['telegram-desctop']} src={telegramDesctop} alt='project image' height='350px' width='500px' />
          <motion.img style={{y: medium}} className={style['telegram-call']} src={telegramCall} alt='project image' height='250px' width='175px'/>
        </div>
        <div className={style['word']}>
          <h3>Телеграм Бот</h3>
          <p>Добро пожаловать в будущее коммуникаций с нашим инновационным Telegram ботом! Независимо от того, ищете ли вы динамичный чат-бот для быстрой связи или умное решение для вашего интернет-магазина, у нас есть именно то, что вам нужно.</p>
          <p>🤖 Чат-бот: Умная связь, мгновенные ответы! С нашим чат-ботом вы не только экономите время, но и получаете мгновенные ответы на все ваши вопросы. От поддержки клиентов до заказа услуг - чат-бот готов помочь в любой ситуации. Интуитивный интерфейс и функциональность чата делают общение максимально удобным.</p>
          <p>🛒 Магазин-бот: Персонализированное онлайн-пространство для вас! Увлекательное онлайн-шопинг-путешествие начинается здесь. Наш магазин-бот предлагает вам уникальные предложения, персональные рекомендации и простой процесс заказа. Он создан, чтобы сделать ваш опыт покупок в Telegram не только удобным, но и увлекательным.</p>
          <p>🚀 Преимущества:
            Мгновенность: Чат-бот отвечает на ваши вопросы моментально, а магазин-бот предоставляет доступ к продуктам в один клик.
            Персонализация: Магазин-бот адаптируется к вашим предпочтениям, предлагая индивидуальные предложения, в то время как чат-бот ориентирован на ваши потребности в общении.
            Простота использования: Оба бота созданы с упором на интуитивность, чтобы вы могли наслаждаться своим опытом без лишних сложностей.
          </p>
          <p>Выберите свой бот и вперед к удобству и инновациям в Telegram! 🚀</p>
        </div>
      </div>
      
      <div className={style['wrapper']}>
      <div className={style['word']}>
          <h3>Мобильное приложение</h3>
          <p>Добро пожаловать в новый этап мобильных технологий с нашим инновационным мобильным приложением! Независимо от того, ищете ли вы удобный чат-интерфейс для своих общений или мощное приложение для онлайн-шопинга, у нас есть все необходимое для комфорта в вашем мобильном опыте.</p>
          <p>📱 Чат-приложение: Где бы вы ни были, всегда на связи! С нашим чат-приложением вы можете общаться с вашими близкими и коллегами в любой точке мира. Стильный интерфейс и возможность мгновенных сообщений сделают ваше общение максимально эффективным.</p>
          <p>🛍️ Приложение для шопинга: Магазин на вашем пальце! Онлайн-шопинг становится еще проще с нашим мобильным приложением. Получайте персональные рекомендации, легко находите интересующие вас товары и совершайте заказы где угодно и когда угодно. Весь магазин у вас в кармане!</p>
          <p>🚀 Преимущества:
            Мобильность: Ваши общение и шопинг всегда под рукой, где бы вы ни находились.
            Персонализация: Приложение адаптируется к вашим предпочтениям, предлагая персональные функции и товары.
            Простота использования: Интуитивный дизайн приложения создан для максимального комфорта и удобства пользователя.
          </p>
         <p>Выберите свое мобильное приложение и переживите новый уровень удобства в каждом взаимодействии! 🚀</p>
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
