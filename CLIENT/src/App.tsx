import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/loginPage/loginPage";
import RegistrPage from './pages/registerPage/registerPage'
import MyPage from './pages/myPage/myPage';
import ShopPage from './pages/shopPage/shopPage';
import HomePage from './pages/homePage/homePage';
import CartPage from './pages/cartPage/cartPage';
import PortfolioPage from './pages/portfolioPage/portfolioPage';

import { useAppDispatch, useAppSelector } from './hooks';
import { useEffect } from 'react';
import { fetchAuth } from './slices/auth/authSlice';
import { selectIsAuth } from '../src/slices/auth/authSlice';
import ConfirmationToCart from './pages/confirmationToCart/confirmationToCart';

function App() {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth);
  console.log('SRC APP Slice Auth IS AUTH : ', isAuth)

  useEffect(() => {
    dispatch(fetchAuth())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/register" element={<RegistrPage />} />
        <Route index path="/login" element={<LoginPage />} />
        <Route index path="/portfolio" element={<PortfolioPage />} />
        <Route index path="/shop" element={<ShopPage />} />
        <Route index path="/cart" element={<CartPage />} />
        <Route index path="/confirmation" element={<ConfirmationToCart />} />
        {isAuth ? <Route index path="/myPage" element={<MyPage />} /> : null }
      </Routes>
    </>
  )
}

export default App
