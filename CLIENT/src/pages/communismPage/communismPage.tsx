import style from './communismPage.module.scss'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchPosts, fetchTags } from '../../slices/posts/postsSlice'
import Post from '../../components/Post/Post'


export default function CommunismPage() {
  const dispatch = useAppDispatch()
  const { posts, tags } = useAppSelector(state => state.posts)
  // console.log('COMMUNISM PAGE POSTS : ', posts)
  // console.log('COMMUNISM PAGE TAGS : ', tags)
  const isPostsLoading = posts.status === 'loading'

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])

  return (
    <div className={style['page-container']}>
      <Header />
      <div className={style['communism-wrapper']}>

        <h1 className={style['communism-title']}>что такое Коммунизм 2.0 ?</h1>
        <p className={style['communism-about']}>
          Это шутеечное название доски объявлений
        </p>
        <p className={style['communism-about']}>
          Здесь можно предложить свои услуги
        </p>
        <p className={style['communism-about']}>
          В замен получить другие услуги или обмен на необходимое
        </p>

        <section className={style['communism']}>
          {(isPostsLoading ? [...Array(3)] : posts.items).map((obj, index) =>
            //так как при рендере сперва будет фэковый массив из трёх undefined
            //а посты получаем позже так как запросу нужно время и сразу не получится взять данные из obj
            //надо сделать дополнительную проверку
            //и если грузятся 3 фейковых undefined то грузить скелетон но пока временно строку ЗАГРУЖАЮ
            //а если данные получены то уже рендерить нормальные посты
            isPostsLoading
              ? 'ЗАГРУЖАЮ ЗДЕСЬ НАДО НАРИСОВАТЬ СКЕЛЕТОН КОТОРЫЙ НАРИСУЕТСЯ 3 РАЗА [ARRAY(3)]'
              : (
                <Post
                  key={index}
                  id={obj.id}
                  title={obj.title}
                  text={obj.text}
                  tags={obj.tags}
                  user_name={obj.user_name}
                  user_email={obj.user_email}
                  created_at={obj.created_at}
                  updated_at={obj.updated_at}
                />
              )
          )}

        </section>

        <div className={style['tags-component']}> {tags.items} </div>
      </div>
      <Footer />
    </div>
  )
}
