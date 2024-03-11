import style from './communismPage.module.scss'
import Post from '../../components/Post/Post'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchPosts, fetchTags } from '../../slices/posts/postsSlice'
import { typeUserData } from '../../types'
import { Link } from 'react-router-dom'


export default function CommunismPage() {
  const dispatch = useAppDispatch()
  const { posts } = useAppSelector(state => state.posts) //, tags
  // console.log('COMMUNISM PAGE POSTS ! ')
  // console.log('COMMUNISM PAGE TAGS ! ')
  const userData: typeUserData | null = useAppSelector((state) => state.auth.data)
  // console.log('COMMUNISM PAGE USERDATA ! ');
  const isPostsLoading = posts.status === 'loading'

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])

  return (

    <div className={style['communism-wrapper']}>
      <div className={style['background-star']}>
        <div className={style['communism-about-wrapper']}>
          <h1 className={style['communism-title']}>Коммунизм 2.0</h1>
          <p className={style['communism-about']}>
            доска объявлений
          </p>
        </div>
        <div className={style['link-wrapper']}>
        <Link className={style['add-post-link']} to='/addPost'>
          написать
        </Link>
        <Link className={style['add-post-link2']} to='/addPost'>
          не<br/>
          писать
        </Link>
        </div>
        <section className={style['communism']}>
          {(isPostsLoading ? [...Array(3)] : posts.items).map((obj, index) =>
            isPostsLoading
              ? (<div key={index}>
                .
              </div>)
              : (
                <div className={style['post-wrapper']} key={obj.id} >
                  <h2 className={style['post-title']} >{obj.title}</h2>
                  <Post
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    text={obj.text}
                    tags={obj.tags}
                    user_name={obj.user_name}
                    user_email={obj.user_email}
                    created_at={obj.created_at}
                    updated_at={obj.updated_at}
                    isEditable={userData?.email === obj.user_email}
                    confirmUser={userData?.email}
                  />
                  <Link className={style['link-to-post']} to={`/communism2.0/${obj.id}`}>
                    перейти к
                  </Link>
                </div>
              )
          )}
        </section>
      </div>
    </div>
  )
}
