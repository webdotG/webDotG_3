import style from './homePage.module.scss'
import MainPriceBlokck from "../../components/mainPriceBlock/mainPriceBlokck";
// import MainPortfolioBock from "../../components/mainPortfolioBlock/mainPortfolioBock";
import MainAboutBlok from "../../components/mainAboutBlok/mainAboutBlok";
import MainFeedback from "../../components/mainFeedback/mainFeedback";
import MainOrder from "../../components/mainOrder/mainOrder";
import MainTitle from '../../components/mainTitle/mainTitle';
import Paralax from '../../components/paralax/paralax';
import MainPortfolio from '../../components/mainPortfolioBlock/mainPortfolio';
import MainAbout from '../../components/mainAboutBlok/mainAbout';
import MainContact from '../../components/mainContact/mainContact';
// import ParalaxZoom from '../../components/paralax/paralaxZoom/paralaxZoom';

function HomePage() {

  return (
    <div className={style['main_page']}>
      <MainTitle />
      <Paralax type={'price'}/>
      <MainPriceBlokck/>
      {/* <ParalaxZoom /> */}
      <Paralax type={'portfolio'} />
      <MainPortfolio />
      {/* <MainPortfolioBock /> */}
      <MainAbout />
      {/* <MainAboutBlok /> */}
      {/* <MainFeedback /> */}
      <MainContact />
      {/* <MainOrder /> */}
    </div>
  )
}

export default HomePage
