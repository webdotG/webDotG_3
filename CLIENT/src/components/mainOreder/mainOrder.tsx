import {MContactsList} from '../conactsSocial/contactsSocial'
import style from './mainOrder.module.scss'

function MainOrder() {

  return (
    <div className={style['main-order']}>
      <h2 className={style['main-order__title']}>сделать заказ</h2>
      <MContactsList />
      <form className={style['main-order__form']}>
        <h4 className={style['main-order__form-title Roboto-Regular']}>оставить заявку</h4>
        <div className={style['main-order__input-wrapper']}>
          <label className={style['main-order__name-label']} htmlFor='main-order__name-input'>имя</label>
          <input type='text' id='main-order__name-input' />
        </div>
        <div className={style['main-order__input-wrapper']}>
          <label className={style['main-order__tel-label']} htmlFor='main-order__tel-input' >телефон</label>
          <input type='text' id='main-order__tel-input' />
        </div>
        <div className={style['main-order__input-wrapper']}>
          <p className={style['main-order__comment-label']}>коментарий</p>
          <textarea id='main-order__comment-input' name="comment" cols={40} rows={3} />
        </div>
        <button className={style['main-order__btn-submit Roboto-Regular']} type='submit'>отправить</button>
      </form>
    </div>
  )
}

export default MainOrder