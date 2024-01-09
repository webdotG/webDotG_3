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
  const [errorTitleMessage, setErrorTitleMesage] = useState<string>('')
  const [errorTagsMessage, setErrorTagsMesage] = useState<string>('')

  const MIN_TITLE_LENGTH = 5;
  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const inputValue = e.target.value;
    if (inputValue.length < MIN_TITLE_LENGTH) {
      setErrorTitleMesage('Минимальная длина текста должна быть не менее 5 символов!')
    } else {
      setErrorTitleMesage('')
    }
    setTitle(inputValue);
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };
  const handleTagsChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTags(e.target.value);
  };

  const validateTags = (inputTags: string): boolean => {
    const regex = /^(\s*,\s*\w{3,})*(\s*,\s*\w{3,}\s*)?$/;

    if (!regex.test(inputTags)) {
      setErrorTagsMesage('Необходимо поставить запятую перед пробелом между тегами и теги должны состоять минимум из трёх букв!')
      return false;
    } else {
      setErrorTagsMesage('')
      return true;
    }
  };

  const handleTagsKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === ' ' && tags[tags.length - 1] !== ',') {
      alert('Необходимо поставить запятую перед пробелом между тегами!');
      e.preventDefault();
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    // Останавливаю отправку формы, если теги не прошли валидацию
    if (!validateTags(tags)) {
      alert('теги не валидны проверьте запятые перед пробелами и убедитесть что написали хотя бы один тег минимум из трёх ь=букв!');
      return;
    }
    if (!tags.trim()) {
      alert('необходимо указать хотя бы один тег!');
      return;
    }
    if (title.trim().length < MIN_TITLE_LENGTH) {
      alert('минимальная длина текста должна быть не менее 5 символов!');
      return;
    }
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

  // if (!isAuth) {
  //   navigate('/login')
  // }

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
            <span>{errorTitleMessage}</span>
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
              onKeyDown={handleTagsKeyDown}
            />
            <span>{errorTagsMessage}</span>
          </label>

          {isAuth
            ? (<button className={style['btn-submit']}
              type='submit'>
              {isEditing ? 'сохранить' : 'опубликовать'}
            </button>)
            : (<button className={style['btn-submit']}
              type='submit'
              disabled>
                надо залогиниться что бы отправить
            </button>

            )
          }


        </form>
      </div>
      <Footer />
    </div>
  )
}
