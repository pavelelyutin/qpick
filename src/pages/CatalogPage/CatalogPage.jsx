import './CatalogPage.scss';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { products } from '../../data/products.js'
import ProductList from '../../components/ProductList/ProductList'
import DetailsProductModal from "../../components/DetailsProductModal/DetailsProductModal";

function CatalogPage() {
  const { cartItems, favorites, addToCart, removeFromCart, changeQuantity, toggleFavorite } = useOutletContext();

  const [selectedProduct, setSelectedProduct] = useState(null);

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
        onOpenDetails={setSelectedProduct}
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

      <DetailsProductModal product={selectedProduct} isOpen={selectedProduct !== null} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default CatalogPage;