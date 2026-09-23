import './ProductList.scss'
import ProductCard from '../ProductCard/ProductCard';

function ProductList({
                       title,
                       products,
                       cartItems,
                       favorites,
                       onClickBuy,
                       onChangeQuantity,
                       onRemove,
                       onToggleFavorite
                     }) {
  if (products.length === 0) return null;

  return (
    <section className="section products">
      {title && <h2 className="section__title">{title}</h2>}
      <ul className="products__list list-reset">
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <li className="products__item" key={product.id}>
              <ProductCard product={product}
                           quantity={quantity}
                           onClickBuy={onClickBuy}
                           onChangeQuantity={onChangeQuantity}
                           onRemove={onRemove}
                           isFavorite={favorites.includes(product.id)}
                           onToggleFavorite={onToggleFavorite}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProductList;