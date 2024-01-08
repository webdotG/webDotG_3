import style from './addPost.module.scss'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { selectIsAuth } from '../../slices/auth/authSlice'
import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import axios from '../../axios'

interface PostFields {
  title: string;
  text: string;
  tags: string;
}


export default function AddPostPage(): JSX.Element {
  const { id } = useParams()
  const isEditing = Boolean(id)
  const isAuth = useAppSelector(selectIsAuth)
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [tags, setTags] = useState<string>('')
  // console.log('ADD POST FIELDS TITLE TEXT TAGS : ', title, text, tags)

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };
  const handleTagsChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTags(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      const fields: PostFields = { title, text, tags }
      // console.log('ADD POST FIELDS  : ', fields)
      const response = isEditing
      ? await axios.patch(`/api/posts/${id}`, fields)
      : await axios.post('/api/posts', fields)
      // console.log('ADD POST AXIOS POST API/POSTS RESPONSE : ', response)
      const id_Response: string = isEditing ? id : response.data.post.id
      // console.log('ADD POST RESPONSE DATA ID : ', id_Response)
      navigate(`/communism2.0/${id_Response}`)
    } catch (err) {
      console.error('ошибка при создании поста', err)
      alert('ошибка при создании поста')
    }
  }

  useEffect(() => {
    if (id) {
      axios.get(`/api/posts/${id}`).then(({ data }) => {
        console.log('ADDPOST USEEFFECT AXIOS.GET RES : ', data)
        setTitle(data.title)
        setText(data.text)
        setTags(data.tags)
      })
    }
  }, [])

  if (!isAuth) {
    navigate('/login')
  }

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
          <button type='submit'>
            {isEditing ? 'сохранить' : 'опубликовать'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
