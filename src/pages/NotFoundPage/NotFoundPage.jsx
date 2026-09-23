import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import './NotFoundPage.scss';
import cartEmptyImage from "../../assets/illustrations/cart.svg";

function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container not-found__container">
        <div className="not-found__empty">
          <img className="not-found__image" src={cartEmptyImage} alt="Изображение пустой корзины"/>
          <span className="not-found__title">Корзина пустая</span>
          <p className="not-found__description">
            Добавьте товары из каталога, чтобы оформить заказ
          </p>
          <Link to={PATHS.HOME} className="not-found__back button-reset">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;