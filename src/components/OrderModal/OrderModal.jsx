import { useState } from 'react';
import Modal from '../Modal/Modal'
import {formatPrice} from "../../utils/formatPrice";
import './OrderModal.scss'

function OrderModal({ isOpen, onClose, totalPrice }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Укажите имя';
    } else if (form.name.trim().length < 2) {
      nextErrors.name = 'Имя слишком короткое';
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Укажите телефон';
    } else if (!/^\+?[\d\s()-]{10,}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Некорректный номер телефона';
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    console.log('Данные форма для отправки:', form);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal__content order">
        <h3 className="order__title">Оформление заказа</h3>

        <form className="order__form form" action="#" method="post" onSubmit={handleSubmit} noValidate>
          <div className="form__field">
            <label htmlFor="order-name" className="form__label">Имя</label>

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
            <label htmlFor="order-phone" className="form__label">Телефон</label>

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
            <span className="order__subtitle">Итого:</span>
            <span className="order__price">{formatPrice(totalPrice)}</span>
          </div>

          <button type="submit" className="form__submit button-reset">Оформить заказ</button>
        </form>
      </div>
    </Modal>
  )
}

export default OrderModal;