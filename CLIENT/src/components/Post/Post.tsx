import style from './post.module.scss';

interface PostProps {
  id: number;
  title: string;
  text: string;
  tags: string | null;
  user_name: string;
  user_email: string;
  created_at: string;
  updated_at: string;
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
