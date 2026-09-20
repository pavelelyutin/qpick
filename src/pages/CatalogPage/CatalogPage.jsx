import './CatalogPage.scss';
import { useOutletContext } from 'react-router-dom';
import { products } from '../../data/products.js'
import ProductList from '../../components/ProductList/ProductList'

function CatalogPage() {
  const { addToCart } = useOutletContext();

  const wiredHeadphones = products.filter((product) => product.category === 'wired')
  const wirelessHeadphones = products.filter((product) => product.category === 'wireless')

  return (
    <div className="container">
      <ProductList products={wiredHeadphones} title="Наушники" onClickBuy={addToCart}/>
      <ProductList products={wirelessHeadphones} title="Беспроводные наушники" onClickBuy={addToCart}/>
    </div>
  )
}

export default CatalogPage;