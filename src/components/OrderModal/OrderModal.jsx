import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal'
import {formatPrice} from "../../utils/formatPrice";
import './OrderModal.scss'
import successImage from '../../assets/illustrations/success.svg'

function OrderModal({ isOpen, onClose, totalPrice }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { t } = useTranslation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const formErrors = {};

    if (!form.name.trim()) {
      formErrors.name = t('formErrors.emptyName');
    } else if (form.name.trim().length < 2) {
      formErrors.name = t('formErrors.shortName');
    }

    if (!form.phone.trim()) {
      formErrors.phone = t('formErrors.emptyPhone');
    } else if (!/^\+?[\d\s()-]{10,}$/.test(form.phone.trim())) {
      formErrors.phone = t('formErrors.invalidPhone');
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitted(true);

    console.log('Данные форма для отправки:', form);
  };

  const handleClose = () => {
    setForm({ name: '', phone: '' });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {isSubmitted ? (
        <div className="modal__content order order--success">
          <img className="order__image" src={successImage} alt=""/>
          <h3 className="order__title">Заказ оформлен!</h3>
          <p className="order__text">
            Мы свяжемся с вами в ближайшее время
          </p>
        </div>
      ) : (
      <div className="modal__content order">
        <h3 className="order__title">{t('order.title')}</h3>

        <form className="order__form form" action="#" method="post" onSubmit={handleSubmit} noValidate>
          <div className="form__field">
            <label htmlFor="order-name" className="form__label">{t('order.name')}</label>

            <input
              id="order-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`form__input ${
                errors.name ? 'form__input--error' : ''
              }`}
              placeholder="Иван Иванов"
            />
            {errors.name && (
              <span className="form__error">{errors.name}</span>
            )}
          </div>

          <div className="form__field">
            <label htmlFor="order-phone" className="form__label">{t('order.phone')}</label>

            <input
              id="order-phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`form__input ${
                errors.phone ? 'form__input--error' : ''
              }`}
              placeholder="+7 (999) 123-45-67"
            />
            {errors.phone && (
              <span className="form__error">{errors.phone}</span>
            )}
          </div>

          <div className="order__total">
            <span className="order__subtitle">{t('order.total')}</span>
            <span className="order__price">{formatPrice(totalPrice)}</span>
          </div>

          <button type="submit" className="form__submit button-reset">{t('order.submit')}</button>
        </form>
      </div>)}
    </Modal>
  )
}

export default OrderModal;