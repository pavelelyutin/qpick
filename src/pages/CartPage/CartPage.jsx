import { Link, useOutletContext } from 'react-router-dom';
import './CartPage.scss';
import cartEmptyImage from '../../assets/illustrations/cart.svg';
import { products } from '../../data/products';
import { PATHS } from '../../routes/paths';
import CartItem from '../../components/CartItem/CartItem.jsx';
import CartSummary from '../../components/CartSummary/CartSummary.jsx';
import OrderModal from '../../components/OrderModal/OrderModal.jsx';
import {useState} from "react";

function CartPage() {
  const { cartItems, changeQuantity, removeFromCart } = useOutletContext();
  const [isOrderOpen, setIsOrderOpen] = useState(false);

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
      <section className="section cart">
        <div className="container cart__container">
          <div className="cart__empty">
            <img className="cart__image" src={cartEmptyImage} alt="Изображение пустой корзины"/>
            <span className="cart__title">Корзина пустая</span>
            <p className="cart__description">
              Добавьте товары из каталога, чтобы оформить заказ
            </p>
            <Link to={PATHS.HOME} className="cart__back button-reset">
              Вернуться в каталог
            </Link>
          </div>
        </div>
      </section>
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
                <CartItem
                  item={item}
                  onChangeQuantity={changeQuantity}
                  onRemove={removeFromCart}
                />
              </li>
            ))}
          </ul>
          <CartSummary totalPrice={totalPrice} onOrder={() => setIsOrderOpen(true)} />
        </div>
        <OrderModal totalPrice={totalPrice} isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
      </div>

    </section>
  );

}

export default CartPage;