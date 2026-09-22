import './ProductList.scss'
import ProductCard from '../ProductCard/ProductCard';

function ProductList({ title, products, favorites, onClickBuy, onToggleFavorite }) {
  if (products.length === 0) return null;

  return (
    <section className="section products">
      {title && <h2 className="section__title">{title}</h2>}
      <ul className="products__list list-reset">
        {products.map((product) => (
          <li className="products__item" key={product.id}>
            <ProductCard product={product}
                         onClickBuy={onClickBuy}
                         isFavorite={favorites.includes(product.id)}
                         onToggleFavorite={onToggleFavorite}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList;