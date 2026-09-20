import './ProductCard.scss'
import { formatPrice } from "../../utils/formatPrice.js";

function ProductCard({ product, onClickBuy }) {
  return (
    <article className="product">
      <div className="product__image">
        <img src={product.image} width={220} alt="Изображение" />
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
            <path d="M11.9994 17.6341L4.58272 22L6.59902 13.8519L0 8.40354L8.662 7.73466L11.9994 0L15.3367 7.73466L24 8.40354L17.3997 13.8519L19.416 22L11.9994 17.6341Z" fill="#FFCE7F"/>
          </svg>
          {product.rating}
        </div>
        <button className="product__button button-reset" onClick={() => onClickBuy(product)}>Купить</button>
      </div>
    </article>
  )
}

export default ProductCard