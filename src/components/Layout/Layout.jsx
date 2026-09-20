import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

function Layout({ cartItems, addToCart, removeFromCart, changeQuantity }) {
  return (
    <>
      <Header cartItems={cartItems} />

      <main className="main">
        <Outlet
          context={{
            cartItems,
            addToCart,
            removeFromCart,
            changeQuantity,
          }}
        />
      </main>

      <Footer/>
    </>
  );
}

export default Layout;