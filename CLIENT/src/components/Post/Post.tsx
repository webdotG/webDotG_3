import { Link } from 'react-router-dom';
import style from './post.module.scss';

interface PostProps {
  id: number | undefined;
  title: string | undefined;
  text: string | undefined;
  tags: string[] | null | undefined;
  user_name: string | undefined;
  user_email: string | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
}

const Post: React.FC<PostProps> = ({
  id,
  title,
  text,
  tags,
  user_name,
  user_email,
  created_at,
  updated_at
}) => {

  return (
    <div className={style.post}>
      <Link to={`/communism2.0/${id}`}>
        Link to ID POST
      </Link>
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
