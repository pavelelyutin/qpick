import { Link, useOutletContext } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import { products } from '../../data/products';
import { PATHS } from '../../routes/paths';
import './FavoritesPage.scss';
import favoritesEmptyImage from "../../assets/illustrations/cat.svg";



function FavoritesPage() {
  const { cartItems ,favorites, addToCart, removeFromCart, changeQuantity, toggleFavorite } = useOutletContext();

  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  if (favoriteProducts.length === 0) {
    return (
      <section className="section favorites">
        <div className="container favarites__container">
          <div className="favorites__empty">
            <img className="favorites__image" src={favoritesEmptyImage} alt="Изображение пустой корзины"/>
            <span className="favorites__title">В избранном ничего нет</span>
            <p className="favorites__description">
              Чтобы добавить товар в избранное, нажмите на сердечко в карточке товара
            </p>
            <Link to={PATHS.HOME} className="favorites__back button-reset">
              Вернуться в каталог
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section favorites">
      <div className="container favorites__container">
        <h1 className="favorites__title">Избранное</h1>
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
    </section>
  )
}

export default FavoritesPage;