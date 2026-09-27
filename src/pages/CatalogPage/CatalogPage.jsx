import './CatalogPage.scss';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { products } from '../../data/products'
import ProductList from '../../components/ProductList/ProductList'
import DetailsProductModal from "../../components/DetailsProductModal/DetailsProductModal";
import {useTranslation} from "react-i18next";

function CatalogPage() {
  const { cartItems, favorites, addToCart, removeFromCart, changeQuantity, toggleFavorite } = useOutletContext();

  const [selectedProduct, setSelectedProduct] = useState(null);

  const {t} = useTranslation();

  const wiredHeadphones = products.filter((product) => product.category === 'wired')
  const wirelessHeadphones = products.filter((product) => product.category === 'wireless')

  return (


    <div className="container">
      <h1 className="visually-hidden">{t('catalog.title')}</h1>
      <ProductList
        title={t('catalog.wired')}
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
        title={t('catalog.wireless')}
        products={wirelessHeadphones}
        cartItems={cartItems}
        favorites={favorites}
        onClickBuy={addToCart}
        onChangeQuantity={changeQuantity}
        onRemove={removeFromCart}
        onToggleFavorite={toggleFavorite}
        onOpenDetails={setSelectedProduct}
      />

      <DetailsProductModal product={selectedProduct} isOpen={selectedProduct !== null} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default CatalogPage;