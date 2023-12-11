import { Card, Form } from 'antd'
import Header from '../../components/header/header'
import style from './loginPage.module.scss'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../components/customAntd/button'



export default function LoginPage() {


  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Card title='Войти'>
          <Form onFinish={() => null} >
          
          </Form>
        </Card>
      </div>
      <CustomButton customStyle='default loginPage' />
    </>
  )

}
