import style from './fullPost.module.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from '../../axios'
import Post from '../../components/Post/Post'

type PostData = {
  id: number;
  title: string;
  text: string;
  tags: string | null; 
  user_name: string;
  user_email: string;
  created_at: string;
  updated_at: string;
};

export default function FullPost() {
  const { id } = useParams()
  // console.log('FULL POST USEPARAMS PARAMS : ', id)
  const [postData, setPostData] = useState<PostData>({id: 0,title: '',text: '',tags: '',user_name: '',user_email: '',created_at: '',updated_at: '',});
  // console.log('FULLPOST SETDATAPOST POSTDATA : ', postData)
  
  useEffect(() => {
    axios.get(`/api/posts/${id}`)
      .then(res => {
        // console.log('FULLPOST AXIOS GET /POSTS/:ID RES.DATA : ', res.data)
        setPostData(res.data)
      })
      .catch((err) => {
        console.log('ошибка при попытке получения конкретной статьи')
        console.warn(err)
        alert('ошибка при попытке получения конкретной статьи')
      })
  }, [])

  return (
    <div className={style['page-container']}>
      <h2>FullPost</h2>
      <Post
        id={postData.id}
        title={postData.title}
        text={postData.text}
        tags={postData.tags}
        user_name={postData.user_name}
        user_email={postData.user_email}
        created_at={postData.created_at}
        updated_at={postData.updated_at}
        isEditable
      >
      </Post>
      <Link to='/communism2.0'>перейти ко всем постам</Link>
     
      <h1>{postData.title}</h1>
      <h2>{postData.text}</h2>
      <h3>{postData.tags}</h3>
    </div>
  )
}
