import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import './NotFoundPage.scss';

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Link to={PATHS.HOME} className="not-found__link">
        Вернуться в каталог
      </Link>
    </div>
  );
}

export default NotFoundPage;