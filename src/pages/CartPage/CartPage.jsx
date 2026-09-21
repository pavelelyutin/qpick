import { Link, useOutletContext } from 'react-router-dom';
import './CartPage.scss';
import { products } from '../../data/products';
import { PATHS } from '../../routes/paths';
import CartItem from '../../components/CartItem/CartItem.jsx';
import {formatPrice} from "../../utils/formatPrice.js";

function CartPage() {
  const { cartItems, changeQuantity, removeFromCart } = useOutletContext();

  const itemsWithProducts = cartItems
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const totalPrice = itemsWithProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (itemsWithProducts.length === 0) {
    return (
      <div className="cart-page cart-page--empty">
        <h1 className="cart-page__title">Корзина пуста</h1>
        <p className="cart-page__text">
          Добавьте товары из каталога, чтобы оформить заказ
        </p>
        <Link to={PATHS.HOME} className="cart-page__back">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <section className="section cart">
      <div className="container cart__container">
        <h2 className="section__title">Корзина</h2>

        <div className="cart__wrapper">
          <ul className="cart__list list-reset">

            {itemsWithProducts.map((item) => (
              <li className="cart__item" key={item.id}>
                <CartItem item={item} onChangeQuantity={changeQuantity} onRemove={removeFromCart} />
              </li>
            ))}

          </ul>

          <div className="cart__summary summary">
            <div className="summary__info">
              <span className="summary__text">Итого</span>
              <span className="summary__price">{formatPrice(totalPrice)}</span>
            </div>
            <button type="button" className="summary__button button-reset">Перейти к оформлению</button>
          </div>

        </div>

        <h1>Корзина</h1>
        <p>Позиций: {cartItems.length}</p>
        <pre>{JSON.stringify(cartItems, null, 2)}</pre>
      </div>

    </section>
  );

}

export default CartPage;