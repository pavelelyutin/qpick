import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import './NotFoundPage.scss';
import notFoundImage from "../../assets/illustrations/404.svg";

function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container not-found__container">
        <div className="not-found__wrapper">
          <img className="not-found__image" src={notFoundImage} alt="Изображение пустой корзины"/>
          <span className="not-found__title">Страница не найдена</span>
          <p className="not-found__description">
            Проверьте адрес страницы, он может быть некорректным.
          </p>
          <Link to={PATHS.HOME} className="not-found__back button-reset">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;