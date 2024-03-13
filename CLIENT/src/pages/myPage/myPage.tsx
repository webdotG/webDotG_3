import style from './myPage.module.scss';
import { selectUserName } from '../../slices/auth/authSlice';
import { useAppSelector } from '../../hooks';
// import { Link } from 'react-router-dom';

function MyPage() {

  const userName = useAppSelector(selectUserName)

  return (
    <>
      <div className={style['mypage-wrapper']}>
        <section className={style['my-page']}>
          <h2 className={style['hello']}>Здравствуй</h2>
          <div className={style['user-info']}>
          <h3 className={style['user-name']}>{userName}</h3>
          </div>
          
          {/* <Link className={style['dreamcatcher-link']} to="/dreamcatcher">
          сонник
        </Link> */}
          {/* <div className={style['community-link-wrapper']}>
          <Link className={style['community-link']}
            to="/community_no_verified">
            orgy
          </Link>
        </div> */}
        </section>
      </div>
    </>
  );
}

export default MyPage;
