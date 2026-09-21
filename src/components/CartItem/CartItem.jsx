import './CartItem.scss'
import { formatPrice } from '../../utils/formatPrice';
import {products} from "../../data/products.js";

function CartItem({ item, onChangeQuantity, onRemove }) {
  return (
    <article className="cart__product cart-product">
      <div className="cart-product__top">
        <div className="cart-product__image">
          <img src={products[0].image} width={150} alt=""/>
        </div>
        <div className="cart-product__info">
          <h3 className="cart-product__title">{products[0].title}</h3>
          <span className="cart-product__price">{products[0].price} Р</span>
        </div>
      </div>
      <div className="cart-product__bottom">
        <div className="cart-product__count">
          <button className="cart-product__button button-reset">−</button>
          <span className="cart-product__quantity">1</span>
          <button className="cart-product__button button-reset">+</button>
        </div>
        <span className="cart-product__summary">{products[0].price} Р</span>
      </div>

      <button className="cart-product__remove button-reset">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 3.6H18V5.4H16.2V17.1C16.2 17.3387 16.1052 17.5676 15.9364 17.7364C15.7676 17.9052 15.5387 18 15.3 18H2.7C2.46131 18 2.23239 17.9052 2.0636 17.7364C1.89482 17.5676 1.8 17.3387 1.8 17.1V5.4H0V3.6H4.5V0.9C4.5 0.661305 4.59482 0.432387 4.7636 0.263604C4.93239 0.0948211 5.16131 0 5.4 0H12.6C12.8387 0 13.0676 0.0948211 13.2364 0.263604C13.4052 0.432387 13.5 0.661305 13.5 0.9V3.6ZM14.4 5.4H3.6V16.2H14.4V5.4ZM10.2726 10.8L11.8638 12.3912L10.5912 13.6638L9 12.0726L7.4088 13.6638L6.1362 12.3912L7.7274 10.8L6.1362 9.2088L7.4088 7.9362L9 9.5274L10.5912 7.9362L11.8638 9.2088L10.2726 10.8ZM6.3 1.8V3.6H11.7V1.8H6.3Z" fill="#DF6464"/>
        </svg>
      </button>
    </article>
  )
}

export default CartItem;