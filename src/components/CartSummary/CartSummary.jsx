import './CartSummary.scss'
import { formatPrice } from "../../utils/formatPrice.js";

function CartSummary({ totalPrice, onOrder }) {
  return (
    <div className="cart__summary summary">
      <div className="summary__info">
        <span className="summary__text">Итого</span>
        <span className="summary__price">{formatPrice(totalPrice)}</span>
      </div>
      <button type="button" className="summary__button button-reset" onClick={onOrder}>
        Перейти к оформлению
      </button>
    </div>
  )
}

export default CartSummary;