import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../routes/paths';
import './NotFoundPage.scss';
import notFoundImage from "../../assets/illustrations/404.svg";

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <section className="section not-found">
      <div className="container not-found__container">
        <div className="not-found__wrapper">
          <img className="not-found__image" src={notFoundImage} alt={t('notFound.title')}/>
          <h1 className="not-found__title">{t('notFound.title')}</h1>
          <p className="not-found__description">
            {t('notFound.text')}
          </p>
          <Link to={PATHS.HOME} className="not-found__back button-reset">
            {t('notFound.back')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;