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
// import { useEffect, useState } from 'react';
// import axios from 'axios';


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
  // const [selectedUser, setSelectedUser] = useState(null);
  
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get('/api/user/current');
  //       setSelectedUser(response.data); 
  //       console.log("SET_SELECTED_USER AXIOS GET API?USER?CURRENT : ", selectedUser )
  //     } catch (error) {
  //       console.error('Ошибка при получении данных пользователя:', error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

    return (
    <>
      <Header />
      <div>
      
    </div>
      <div className={style.mainTitleBlock}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }}
          className={style.main_title__wrapp}>
          <motion.h1 variants={textAnimation} className={style.main_title}>
            webDot <span><LogoGMint /></span>
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

      <Footer />
    </>
  )
}

export default HomePage
