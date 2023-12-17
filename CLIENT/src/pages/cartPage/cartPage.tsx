import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import style from './cartPage.module.scss'

function CartPage() {


  return (

    <div>
      <Header />
      <section className={style["cart"]}>
        <h2 className={style["cart_title"]}>Ваш заказ:</h2>
        <ul className={style["cart-list"]}>
          <li className={style["cart-item"]}>
            <span className={style["item-name"]}>Название товара</span>
            <span className={style["item-price"]}>$10</span>
            <div className={style["quantity"]}>
              <button className={style["dec-btn"]}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2" id="Layer_1">
                    <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                    <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                  </g>
                </svg>
              </button>
              <span className={style["item-quantity"]}>1</span>
              <button className={style["inc-btn"]}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2" id="Layer_2">
                    <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                    <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
                    <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                  </g>
                </svg>
              </button>
            </div>
            <button className={style["remove-btn"]}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)">
                <g data-name="Layer 2" id="Layer_3">
                  <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                  <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
                  <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                </g>
              </svg>
            </button>
          </li>
          <li className={style["cart-item"]}>
            <span className={style["item-name"]}>Название товара</span>
            <span className={style["item-price"]}>$10</span>
            <div className={style["quantity"]}>
              <button className={style["dec-btn"]}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2" id="Layer_1">
                    <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                    <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                  </g>
                </svg>
              </button>
              <span className={style["item-quantity"]}>1</span>
              <button className={style["inc-btn"]}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2" id="Layer_2">
                    <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                    <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
                    <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                  </g>
                </svg>
              </button>
            </div>
            <button className={style["remove-btn"]}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)">
                <g data-name="Layer 2" id="Layer_3">
                  <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                  <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
                  <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                </g>
              </svg>
            </button>
          </li>
          <li className={style["cart-item"]}>
            <span className={style["item-name"]}>Название товара</span>
            <span className={style["item-price"]}>$10</span>
            <div className={style["quantity"]}>
              <button className={style["dec-btn"]}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2" id="Layer_1">
                    <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                    <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                  </g>
                </svg>
              </button>
              <span className={style["item-quantity"]}>1</span>
              <button className={style["inc-btn"]}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2" id="Layer_2">
                    <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                    <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
                    <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                  </g>
                </svg>
              </button>
            </div>
            <button className={style["remove-btn"]}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)">
                <g data-name="Layer 2" id="Layer_3">
                  <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                  <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
                  <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
                </g>
              </svg>
            </button>
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
