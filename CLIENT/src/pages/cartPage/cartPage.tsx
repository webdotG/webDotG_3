import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import style from './cartPage.module.scss'

function CartPage() {
  return (

    <div>
      <Header />
      <section className={style["cart"]}>
      <h2>Ваш заказ:</h2>
      <ul className={style["cart-items"]}>
        <li className={style["cart-item"]}>
          <span className={style["item-name"]}>Название товара</span>
          <span className={style["item-price"]}>$10</span>
          <div className={style["quantity"]}>
            <button className={style["dec-btn"]}>-</button>
            <span className={style["item-quantity"]}>1</span>
            <button className={style["inc-btn"]}>+</button>
          </div>
          <button className={style["remove-btn"]}>Удалить</button>
        </li>
        <li className={style["cart-item"]}>
          <span className={style["item-name"]}>Название товара</span>
          <span className={style["item-price"]}>$10</span>
          <div className={style["quantity"]}>
            <button className={style["dec-btn"]}>-</button>
            <span className={style["item-quantity"]}>1</span>
            <button className={style["inc-btn"]}>+</button>
          </div>
          <button className={style["remove-btn"]}>Удалить</button>
        </li>
        <li className={style["cart-item"]}>
          <span className={style["item-name"]}>Название товара</span>
          <span className={style["item-price"]}>$10</span>
          <div className={style["quantity"]}>
            <button className={style["dec-btn"]}>-</button>
            <span className={style["item-quantity"]}>1</span>
            <button className={style["inc-btn"]}>+</button>
          </div>
          <button className={style["remove-btn"]}>Удалить</button>
        </li>
      </ul>
      <div className={style["cart-total"]}>
        <p>Итого: <span className={style["total-amount"]}>$50</span></p>
        <button className={style["checkout-btn"]}>Оформить заказ</button>
      </div>
    </section>
      <Footer />
    </div>
  )
}

export default CartPage 
