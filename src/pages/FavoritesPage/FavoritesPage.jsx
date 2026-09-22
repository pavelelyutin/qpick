import { Link, useOutletContext } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import { products } from '../../data/products';
import { PATHS } from '../../routes/paths';
import './FavoritesPage.scss';



function FavoritesPage() {
  const { favorites, addToCart, toggleFavorite } = useOutletContext();

  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  if (favoriteProducts.length === 0) {
    return (
      <div className="favorites-page favorites-page--empty">
        <h1 className="favorites-page__title">В избранном пусто</h1>
        <p className="favorites-page__text">
          Добавляйте товары, нажимая на сердечко в карточке
        </p>
        <Link to={PATHS.HOME} className="favorites-page__back">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <section className="section favorites">
      <div className="container favorites__container">
        <h1 className="favorites__title">Избранное</h1>
        <ProductList
          title=""
          products={favoriteProducts}
          favorites={favorites}
          onClickBuy={addToCart}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </section>
  )
}

export default FavoritesPage;