import './ProductList.scss'
import ProductCard from '../ProductCard/ProductCard';

function ProductList({ products, title, onClickBuy }) {
  if (products.length === 0) return null;

  return (
    <section className="section products">
      <h2 className="section__title">{title}</h2>
      <ul className="products__list list-reset">
        {products.map((product) => (
          <li className="products__item" key={product.id}>
            <ProductCard product={product} onClickBuy={onClickBuy} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList;