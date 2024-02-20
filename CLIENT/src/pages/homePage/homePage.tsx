import style from './homePage.module.scss'
import MainPriceBlokck from "../../components/mainPriceBlock/mainPriceBlokck";
import MainPortfolioBock from "../../components/mainPortfolioBlock/mainPortfolioBock";
import MainAboutBlok from "../../components/mainAboutBlok/mainAboutBlok";
import MainFeedback from "../../components/mainFeedback/mainFeedback";
import MainOrder from "../../components/mainOreder/mainOrder";
import MainTitle from '../../components/mainTitle/mainTitle';
import Paralax from '../../components/paralax/paralax';
// import ParalaxZoom from '../../components/paralax/paralaxZoom/paralaxZoom';

function HomePage() {

  return (
    <div className={style['main_page']}>
      <MainTitle />
      <Paralax type={'price'}/>
      <MainPriceBlokck/>
      {/* <ParalaxZoom /> */}
      <Paralax type={'portfolio'} />
      <MainPortfolioBock />
      <MainAboutBlok />
      {/* <MainFeedback /> */}
      {/* <MainOrder /> */}
    </div>
  )
}

export default HomePage
