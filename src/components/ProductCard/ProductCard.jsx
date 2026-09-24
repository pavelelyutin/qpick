import './ProductCard.scss'
import {formatPrice} from "../../utils/formatPrice.js";

function ProductCard({product, quantity, isFavorite, onClickBuy,  onChangeQuantity, onRemove, onToggleFavorite, onOpenDetails }) {
  function handleDecrement() {
    if (quantity > 1) {
      onChangeQuantity(product.id, quantity - 1);
    } else {
      onRemove(product.id);
    }
  }

  function handleIncrement() {
    onChangeQuantity(product.id, quantity + 1);
  }

  return (
    <article className="product">
      <button className="product__details button-reset" onClick={() => onOpenDetails(product)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4905 3.51993C15.8071 -1.16923 8.20916 -1.17389 3.51994 3.50945C-1.16922 8.19291 -1.17393 15.7909 3.50952 20.4801C8.19287 25.1692 15.7909 25.1739 20.4801 20.4905C25.1692 15.8072 25.1739 8.20908 20.4905 3.51993ZM13.6755 19.6145C13.6755 19.7997 13.5255 19.9496 13.3404 19.9496H10.6596C10.4746 19.9496 10.3245 19.7997 10.3245 19.6145V9.66291C10.3245 9.47775 10.4746 9.32781 10.6596 9.32781H13.3404C13.5255 9.32781 13.6755 9.47769 13.6755 9.66291V19.6145ZM12 7.93712C10.9284 7.93712 10.0566 7.06537 10.0566 5.99372C10.0566 4.92218 10.9284 4.05025 12 4.05025C13.0717 4.05025 13.9435 4.92213 13.9435 5.99372C13.9435 7.06537 13.0716 7.93712 12 7.93712Z" fill="#FFA542"/>
        </svg>
      </button>
      <div className="product__image">
        <img src={product.image} width={220} alt="Изображение"/>
      </div>
      <div className="product__info">
        <h3 className="product__title">{product.title}</h3>
        <div className="product__prices">
          <span className="product__price">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="product__price product__price--old">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
      </div>
      <div className="product__bottom">
        <div className="product__rating">
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.9994 17.6341L4.58272 22L6.59902 13.8519L0 8.40354L8.662 7.73466L11.9994 0L15.3367 7.73466L24 8.40354L17.3997 13.8519L19.416 22L11.9994 17.6341Z"
              fill="#FFCE7F"/>
          </svg>
          {product.rating}
        </div>

        { quantity > 0 ? (
          <div className="product__count">
            <button className="product__decrement button-reset" onClick={handleDecrement}>−</button>
            <span className="product__quantity">{quantity}</span>
            <button className="product__increment button-reset" onClick={handleIncrement}>+</button>
          </div>
        ) : (
          <button className="product__button button-reset" onClick={() => onClickBuy(product)}>Купить</button>
        )}
      </div>

      <button className={`product__favorite button-reset ${isFavorite ? "active" : ""}`}
              onClick={() => onToggleFavorite(product.id)}
              aria-label={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.1846 1H17.1904C17.9371 0.997923 18.6803 1.16308 19.3779 1.49023C20.0759 1.81757 20.7173 2.30246 21.2617 2.92285C22.3603 4.17584 22.9955 5.88807 23 7.69434C23.0045 9.49713 22.3806 11.21 21.292 12.4697L12.0029 22.9736L2.71387 12.4697C1.6255 11.2143 1.00007 9.5057 1 7.70605C1 5.90651 1.62562 4.19795 2.71387 2.94238C3.81461 1.7016 5.27992 1.03125 6.77832 1.03125C8.27671 1.03129 9.74204 1.70154 10.8428 2.94238L11.2275 3.37695L11.9893 4.23535L12.7354 3.36328L13.1123 2.92285C13.6568 2.30223 14.299 1.81766 14.9971 1.49023C15.6947 1.16307 16.4378 0.997936 17.1846 1Z"
            fill="" stroke="#838383" strokeWidth="2"/>
        </svg>
      </button>
    </article>
  )
}

export default ProductCard