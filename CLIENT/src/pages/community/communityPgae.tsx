import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import style from './communityPage.module.scss'

export default function CommunityPgae() {
  return (
    <div className={style['page-container']}>
      <Header />
      <div className={style['community']}>
        <h1 className={style['community-title']}>community</h1>

      </div>
      <Footer />
      </div>
  )
}
