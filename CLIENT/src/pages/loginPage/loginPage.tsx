import Layout from '../../components/layout/layout'
import style from './loginPage.module.scss'
import { Link } from 'react-router-dom'



function LoginPage() {


  return (
    <Layout>
      <div className={style.wrapper}>


        <Link className={style.login_link} to='/register'>зарегистрироваться</Link>
      </div>
    </Layout>
  )

}

export default LoginPage