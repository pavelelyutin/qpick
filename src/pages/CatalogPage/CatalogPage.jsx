import './CatalogPage.scss';
import { useOutletContext } from 'react-router-dom';
import { products } from '../../data/products.js'
import ProductList from '../../components/ProductList/ProductList'

function CatalogPage() {
  const { cartItems, favorites, addToCart, removeFromCart, changeQuantity, toggleFavorite } = useOutletContext();

  const wiredHeadphones = products.filter((product) => product.category === 'wired')
  const wirelessHeadphones = products.filter((product) => product.category === 'wireless')

  return (
    <div className="container">
      <ProductList
        title="Наушники"
        products={wiredHeadphones}
        cartItems={cartItems}
        favorites={favorites}
        onClickBuy={addToCart}
        onChangeQuantity={changeQuantity}
        onRemove={removeFromCart}
        onToggleFavorite={toggleFavorite}
      />
      <ProductList
        title="Беспроводные наушники"
        products={wirelessHeadphones}
        cartItems={cartItems}
        favorites={favorites}
        onClickBuy={addToCart}
        onChangeQuantity={changeQuantity}
        onRemove={removeFromCart}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default CatalogPage;