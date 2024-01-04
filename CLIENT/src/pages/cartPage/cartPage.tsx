import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import style from './cartPage.module.scss'
import { clearCart, deleteItem, CartItem } from '../../slices/cart/cartSlice';
import { useAppDispatch, useAppSelector } from "../../hooks";
// import { PRICE } from "../../data";
// import { useEffect } from 'react';
// import { makeOrder } from 'path/to/makeOrder'; //функцию для создания заказа 

function CartPage() {

  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector((state) => state.cart.selectedItems);
  console.log('CART PAGE APPSELECTOR SELECET ITEMS : ', selectedItems)



  // Рендеринг списка элементов корзины
  const cartItems = selectedItems.map((item: CartItem, index: number) => (
    <li className={style["cart-item"]} key={index}>
      <span className={style["item-name"]}>{item.name}</span>
      <span className={style["item-price"]}>${item.price}</span>

      <button className={style["remove-btn"]}
        onClick={(event) => {
          alert('удалить ?')
          event.preventDefault();
          dispatch(deleteItem(item.itemId));
        }}
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)">
          <g data-name="Layer 2" id="Layer_3">
            <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
            <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
            <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
          </g>
        </svg>
      </button>
    </li>
  ))

  const sendOrder = () => {
    // Вызов функции для создания заказа
    // makeOrder(selectedItems);
    dispatch(clearCart());
    localStorage.removeItem('cartState');
  };

  return (
    <div className={style['page-container']}>
      <Header />
      <section className={style["cart"]}>
        <h2 className={style["cart_title"]}>Ваш заказ:</h2>
        <button className={style["all-clear-btn"]}
          onClick={() => dispatch(clearCart())}>
          очистить заказ
        </button>
        <ul className={style["cart-list"]}>
          {cartItems}
        </ul>
        <div className={style["cart-total"]}>
          <p>Итого: <span className={style["total-amount"]}>$50</span></p>
          <button className={style["checkout-btn"]}
            onClick={sendOrder}
          >Оформить заказ</button>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default CartPage
