import { Link, useNavigate } from 'react-router-dom';
import style from './post.module.scss';
import { useAppDispatch } from '../../hooks';
import { fetchRemovePost } from '../../slices/posts/postsSlice';

interface PostProps {
  id: number | undefined,
  title: string | undefined,
  text: string | undefined,
  tags: string | null | undefined,
  user_name: string | undefined,
  user_email: string | undefined,
  created_at: string | undefined,
  updated_at: string | undefined,
  isEditable: boolean
}

const Post: React.FC<PostProps> = ({
  id,
  title,
  text,
  tags,
  user_name,
  user_email,
  created_at,
  updated_at,
  isEditable
}) => {


  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onClickRemove =() => {
    if(window.confirm('удалить пост ?')) {
      dispatch(fetchRemovePost(id))
    }
    navigate('/communism2.0')
  }

  return (
    <div className={style.post}>
      
      {isEditable && (
        <div className={style['editButtons']}>
          <Link to={`/communism2.0/${id}/edit`}>
            <button>
              редактировать пост
            </button>
          </Link>
          <button onClick={onClickRemove} >
            удалить статью
          </button>
        </div>
      )}
      
      <span>ID: {id}</span>
      <span>Title: {title}</span>
      <span>Text: {text}</span>
      <span>Tags: {tags}</span>
      <span>User Name: {user_name}</span>
      <span>User Email: {user_email}</span>
      <span>Created At: {created_at}</span>
      <span>Updated At: {updated_at}</span>
    </div>
  );
};

export default Post;
