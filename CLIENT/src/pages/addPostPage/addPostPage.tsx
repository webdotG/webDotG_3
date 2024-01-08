import style from './addPost.module.scss'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import { Link, useNavigate } from 'react-router-dom'
// import { useAppSelector } from '../../hooks'
// import { selectIsAuth } from '../../slices/auth/authSlice'
import { useState, FormEvent, ChangeEvent } from 'react'
import axios from '../../axios'

interface PostFields {
  title: string;
  text: string;
  tags: string;
}


export default function AddPostPage(): JSX.Element  {
  // const isAuth = useAppSelector(selectIsAuth)
  const navigate = useNavigate()
  
  // if (!isAuth) {
  //   navigate('/login')
  // }

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [tags, setTags] = useState('')
  // console.log('ADD POST FIELDS TITLE TEXT TAGS : ', title, text, tags)

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    console.log('ONSUBMIT')
    try {
      
      const fields: PostFields  = {title, text, tags}
      // console.log('ADD POST FIELDS  : ', fields)
      const response = await axios.post('/api/posts', fields)
      // console.log('ADD POST AXIOS POST API/POSTS RESPONSE : ', response)

      const id: string = response.data.post.id
      // console.log('ADD POST RESPONSE DATA ID : ', id)
      navigate(`/communism2.0/${id}`)

    } catch (err) {
      console.error('ошибка при создании поста', err)
      alert('ошибка при создании поста')
    }
  }
  

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };

  const handleTagsChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTags(e.target.value);
  };

  return (
    <div className={style['page-container']}>
      <Header />
      <div className={style['add-post']}>

        <form
          onSubmit={onSubmit}
        >
          <input type='text'
            value={title}
            // onChange={(e) => setTitle(e.target.value)}
            onChange={handleTitleChange}
          />
          <textarea
            value={text}
            // onChange={(e) => setText(e.target.value)}
            onChange={handleTextChange}
          />
          <input type='text'
            value={tags}
            // onChange={(e) => setTags(e.target.value)}
            onChange={handleTagsChange}
          />
          <button type='submit'>опубликовать</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
