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

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };
  const handleTagsChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
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
        // console.log('ADDPOST USEEFFECT AXIOS.GET RES : ', data)
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

        <form className={style['form']}
          onSubmit={onSubmit}
        >
          <label className={style['label']}>
            Что предлагаете
            <textarea className={style['title-input']}
              placeholder="научу готвить"
              rows={2}
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          <label className={style['label']}>
            Описание и что взамен
            <textarea className={style['text-input']}
              placeholder="более детальное описание предложения и хотите ли что ни будь за это или достаточно простого спаибо ?))"
              rows={8}
              value={text}
              onChange={handleTextChange}
            />
          </label>
          <label className={style['label']}>
            # Тэги
            <textarea className={style['tags-input']}
              placeholder="приготовление еды, хачапури, массаж, погуляю с вашей собакой, посмотреть все части властелина колец "
              rows={4}
              value={tags}
              onChange={handleTagsChange}
            />
          </label>
          <button className={style['btn-submit']}
          type='submit'>
            {isEditing ? 'сохранить' : 'опубликовать'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
