import './CartPage.scss';
import cartEmptyImage from '../../assets/illustrations/cart.svg';
import { Link, useOutletContext } from 'react-router-dom';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import {products} from '../../data/products';
import {PATHS} from '../../routes/paths';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';
import OrderModal from '../../components/OrderModal/OrderModal';

function CartPage() {
  const { cartItems, changeQuantity, removeFromCart, clearCart } = useOutletContext();
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const {t} = useTranslation();

  const itemsWithProducts = cartItems
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return product ? {...product, quantity: item.quantity} : null;
    })
    .filter(Boolean);

  const totalPrice = itemsWithProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <section className="section cart">
      {itemsWithProducts.length === 0 ?
        (<div className="container cart__container">
          <h1 className="cart__title visually-hidden">{t('cart.title')}</h1>
          <div className="cart__empty">
            <img className="cart__image" src={cartEmptyImage} alt={t('cart.empty')}/>
            <span className="cart__subtitle">{t('cart.empty')}</span>
            <p className="cart__description">
              {t('cart.emptyText')}
            </p>
            <Link to={PATHS.HOME} className="cart__back button-reset">
              {t('cart.backToCatalog')}
            </Link>
          </div>
        </div>) :
        (<div className="container cart__container">
          <h1 className="cart__title">{t('cart.title')}</h1>
          <div className="cart__wrapper">
            <ul className="cart__list list-reset">
              {itemsWithProducts.map((item) => (
                <li className="cart__item" key={item.id}>
                  <CartItem
                    item={item}
                    onChangeQuantity={changeQuantity}
                    onRemove={removeFromCart}
                  />
                </li>
              ))}
            </ul>
            <CartSummary totalPrice={totalPrice} onOrder={() => setIsOrderOpen(true)}/>
          </div>
        </div>)
      }
      <OrderModal totalPrice={totalPrice} isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)}
                  onSuccess={clearCart}/>
    </section>
  )
}

export default CartPage;