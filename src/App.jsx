import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from "./routes/paths.js";
import Layout from "./components/Layout/Layout";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />}>
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
