import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/loginPage/loginPage";
import RegistrPage from './pages/registerPage/registerPage'
import MyPage from './pages/myPage/myPage';
import ShopPage from './pages/shopPage/shopPage2';
import HomePage from './pages/homePage/homePage';
import CartPage from './pages/cartPage/cartPage';
import PortfolioPage from './pages/portfolioPage/portfolioPage';

import { useAppDispatch, useAppSelector } from './hooks';
import { useEffect } from 'react';
import { fetchAuth } from './slices/auth/authSlice';
import { selectIsAuth } from '../src/slices/auth/authSlice';
import { Navigate } from 'react-router-dom';
import { store } from './store';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAuth())
  }, [dispatch])

  const isAuth = useAppSelector(selectIsAuth);
  // useEffect(() => {
  //   // Проверка на изменение состояния на null и перезагрузка страницы
  //   if (!selectIsAuth(store.getState())) {
  //     windoocation.reload();
  //   }
  // }, [store.getState().auth.data]); // Зависимость useEffect от состояния auth.data
  useEffect(() => {
    // Проверка на изменение состояния на null и перезагрузка страницы
    if (isAuth === null) {
      window.location.reload();
    }
  }, [isAuth]);

  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/register" element={<RegistrPage />} />
        <Route index path="/login" element={<LoginPage />} />
        <Route index path="/portfolio" element={<PortfolioPage />} />
        <Route index path="/shop" element={<ShopPage />} />
        <Route index path="/cart" element={<CartPage />} />
        {isAuth ? (
          <Route index path="/my_page" element={<MyPage />} />
        )
          : (
            null
            // <Route to='/login'/>
          )}

      </Routes>
    </>
  )
}

export default App
