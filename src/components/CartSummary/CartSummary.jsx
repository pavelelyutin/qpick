import './CartSummary.scss';
import { useTranslation } from 'react-i18next';
import { formatPrice } from "../../utils/formatPrice";

function CartSummary({ totalPrice, onOrder }) {
  const { t } = useTranslation();
  return (
    <div className="cart__summary summary">
      <div className="summary__info">
        <span className="summary__text">{t('cart.total')}</span>
        <span className="summary__price">{formatPrice(totalPrice)}</span>
      </div>
      <button type="button" className="summary__button button-reset" onClick={onOrder}>
        {t('cart.order')}
      </button>
    </div>
  )
}

export default CartSummary;