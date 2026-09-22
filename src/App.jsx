import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from "./routes/paths.js";
import Layout from "./components/Layout/Layout";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import './App.scss';

const CART_KEY = 'qpick_cart';
const FAVORITES_KEY = 'qpick_favorites';

function getStorage(key) {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function App() {
  const [cartItems, setCartItems] = useState(() => getStorage(CART_KEY));
  const [favorites, setFavorites] = useState(() => getStorage(FAVORITES_KEY));

  useEffect(() => {
    sessionStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    sessionStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { id: product.id, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const changeQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCartItems((prev) => {
      return prev.map((item) => item.id === id ? {...item, quantity} : item);
    })
  }

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favoritesId) => favoritesId !== id) : [...prev, id],
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={
          <Layout
            cartItems={cartItems}
            favorites={favorites}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
            toggleFavorite={toggleFavorite}
          />
        }>
          <Route index element={<CatalogPage />} />
          <Route path={PATHS.CART} element={<CartPage />} />
          <Route path={PATHS.FAVORITES} element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
