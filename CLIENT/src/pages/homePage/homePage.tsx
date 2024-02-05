import { motion } from 'framer-motion'
import style from './homePage.module.scss'
import Header from "../../components/header/header"
import MainPriceBlokck from "../../components/mainPriceBlock/mainPriceBlokck";
import MainPortfolioBock from "../../components/mainPortfolioBlock/mainPortfolioBock";
import MainAboutBlok from "../../components/mainAboutBlok/mainAboutBlok";
import LogoGMint from "../../svg/logoGMint";
import MainFeedback from "../../components/mainFeedback/mainFeedback";
import MainOrder from "../../components/mainOreder/mainOrder";
import Footer from "../../components/footer/footer";
// import ForCoders from '../../forCoders/forCoders';


const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 }
  })
}



function HomePage() {

  return (
    <>

      <div className={style.mainTitleBlock}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }}
          className={style.main_title__wrapp}>
          <motion.h1 variants={textAnimation} className={style.main_title}>
            webDot
            <svg id="G_logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128" xmlSpace="preserve">
              <g>
                <path d="M10.4,38.9v53.5c0,7.4,3.7,11.3,10.6,11.3c9.4,0.1,18.6,0.1,28,0c6.7,0,10.5-4,10.5-11.1c0-6.3,0-21.2,0-21.2l-22.8,0.2
		                V60.4c0,0,21.3,0,29.3,0c3.3,0.1,3.8,0.5,3.7,3.7c0,9.8,0.1,19.5,0,29.3c0,12.1-8.5,20.9-20.1,21c-9.8,0.1-19.7,0.1-29.5,0
		                c-11.7,0-20.1-8.9-20.1-21.2V38.5c0.1-12,8.3-21,19.8-21.2C30,17,40.3,17,50.5,17.2c10.8,0.2,19.1,9.1,19.4,20.4c0,2,0,7.9,0,7.9
		                H59.7c0,0,0-3.6-0.1-6.5C59.5,31.8,55.7,28,48.8,28h-28C14.3,28,10.4,31.9,10.4,38.9z"/>
                <path d="M128,128h-11L69.9,0h10.8L128,128z" />
              </g>
            </svg>


          </motion.h1>
          <motion.p custom={2} variants={textAnimation} className={style.main_title_p}>разрабатываю и улучшаю</motion.p>
        </motion.div>
        <ul className={style.main_title_list}>
          <li className={style.main_title__text}>сайты</li>
          <li className={style.main_title__text}>чат боты</li>
          <li className={style.main_title__text}>приложения</li>
        </ul>
      </div>
      <MainPriceBlokck />
      <MainPortfolioBock />
      <MainAboutBlok />
      <MainFeedback />
      <MainOrder />
    </>
  )
}

export default HomePage
