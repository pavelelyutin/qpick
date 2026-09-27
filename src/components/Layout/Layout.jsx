import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

function Layout({ cartItems, favorites, addToCart, removeFromCart, changeQuantity, toggleFavorite, clearCart }) {
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
            clearCart,
          }}
        />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;