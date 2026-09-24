import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

function Layout({ cartItems, favorites, addToCart, removeFromCart, changeQuantity, toggleFavorite }) {
  return (
    <>
      <Header cartItems={cartItems} favorites={favorites} />

      <main className="main">
        <Outlet
          context={{
            cartItems,
            favorites,
            addToCart,
            removeFromCart,
            changeQuantity,
            toggleFavorite,
          }}
        />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;