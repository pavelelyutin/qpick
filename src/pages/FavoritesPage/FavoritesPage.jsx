import './FavoritesPage.scss';
import favoritesEmptyImage from "../../assets/illustrations/favorites.svg";
import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductList from '../../components/ProductList/ProductList';
import DetailsProductModal from "../../components/DetailsProductModal/DetailsProductModal";
import {products} from '../../data/products';
import {PATHS} from '../../routes/paths';


function FavoritesPage() {
  const {cartItems, favorites, addToCart, removeFromCart, changeQuantity, toggleFavorite} = useOutletContext();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { t } = useTranslation();

  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  if (favoriteProducts.length === 0) {
    return (
      <section className="section favorites">
        <div className="container favarites__container">
          <h1 className="favorites__title visually-hidden">{t('favorites.title')}</h1>
          <div className="favorites__empty">
            <img className="favorites__image" src={favoritesEmptyImage} alt={t('favorites.empty')} />
            <span className="favorites__subtitle">{t('favorites.empty')}</span>
            <p className="favorites__description">
              {t('favorites.emptyText')}
            </p>
            <Link to={PATHS.HOME} className="favorites__back button-reset">
              {t('favorites.backToCatalog')}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="container favorites__container">
        <h1 className="favorites__title">{t('favorites.title')}</h1>
        <ProductList
          title=""
          products={favoriteProducts}
          cartItems={cartItems}
          favorites={favorites}
          onClickBuy={addToCart}
          onChangeQuantity={changeQuantity}
          onRemove={removeFromCart}
          onToggleFavorite={toggleFavorite}
        />
      </div>
      <DetailsProductModal product={selectedProduct} isOpen={selectedProduct !== null} onClose={() => setSelectedProduct(null)}/>
    </>
  )
}

export default FavoritesPage;