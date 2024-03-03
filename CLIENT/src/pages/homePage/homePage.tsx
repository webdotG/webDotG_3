import style from './homePage.module.scss'
import MainTitle from '../../components/mainTitle/mainTitle';
import Paralax from '../../components/paralax/paralax';
import MainPortfolio from '../../components/mainPortfolioBlock/mainPortfolio';
import MainAbout from '../../components/mainAboutBlok/mainAbout';
import MainContact from '../../components/mainContact/mainContact';
import SliderKenny from '../../components/slider_Kenny/sliderKenny';
// import MainFeedback from "../../components/mainFeedback/mainFeedback";
// import ParalaxZoom from '../../components/paralax/paralaxZoom/paralaxZoom';

function HomePage() {

  return (
    <div className={style['main_page']}>
      <MainTitle />
      {/* <Paralax type={'price'} /> */}
      {/* <SliderKenny /> */}
      {/* <Paralax type={'portfolio'} /> */}
      {/* <MainPortfolio /> */}
      {/* <MainAbout /> */}
      {/* <MainContact /> */}
      {/* <ParalaxZoom /> */}
      {/* <MainFeedback /> */}
    </div>
  )
}

export default HomePage
