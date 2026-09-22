import './ProductCard.scss'
import {formatPrice} from "../../utils/formatPrice.js";

function ProductCard({product, isFavorite, onClickBuy, onToggleFavorite}) {
  return (
    <article className="product">
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
        <button className="product__button button-reset" onClick={() => onClickBuy(product)}>Купить</button>
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