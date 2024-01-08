import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import style from './addPost.module.scss'


export default function AddPostPage() {
  return (
    <div className={style['page-container']}>
      <Header />
      <div className={style['add-post']}>

      </div>
      <Footer />
    </div>
  )
}
