import './CatalogPage.scss';
import { products } from '../../data/products.js'
import ProductList from '../../components/ProductList/ProductList'

function CatalogPage() {
  const wiredHeadphones = products.filter((product) => product.category === 'wired')
  const wirelessHeadphones = products.filter((product) => product.category === 'wireless')

  function handleClickBuy (product) {
    console.log("купили:" + product.title)
  }

  return (
    <div className="container">
      <ProductList products={wiredHeadphones} title="Наушники" onClickBuy={handleClickBuy}/>
      <ProductList products={wirelessHeadphones} title="Беспроводные наушники" onClickBuy={handleClickBuy}/>
    </div>
  )
}

export default CatalogPage;