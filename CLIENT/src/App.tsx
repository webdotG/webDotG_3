import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/loginPage/loginPage";
import RegistrPage from './pages/registerPage/registerPage';
import ShopPage from './pages/shopPage/shopPage';
import HomePage from './pages/homePage/homePage';
import CartPage from './pages/cartPage/cartPage';
import PortfolioPage from './pages/portfolioPage/portfolioPage';
import CommunismPage from './pages/communismPage/communismPage';
import MyPage from './pages/myPage/myPage';
import ConfirmationToCart from './pages/confirmationToCart/confirmationToCart';
import FullPost from './pages/fullPostPage/fullPost';

import { useAppDispatch, useAppSelector } from './hooks';
import { useEffect } from 'react';
import { fetchAuth } from './slices/auth/authSlice';
import { selectIsAuth } from '../src/slices/auth/authSlice';
import AddPostPage from './pages/addPostPage/addPostPage';
import ConfirmationOrder from './pages/confirmationOrder/confirmationOrder';

function App() {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth);
  // console.log('SRC APP Slice Auth IS AUTH : ', isAuth)

  useEffect(() => {
    dispatch(fetchAuth())
  }, [dispatch])

  return (
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/register" element={<RegistrPage />} />
        <Route index path="/login" element={<LoginPage />} />
        <Route index path="/portfolio" element={<PortfolioPage />} />
        <Route index path="/shop" element={<ShopPage />} />
        <Route index path="/cart" element={<CartPage />} />
        <Route index path="/confirmation" element={<ConfirmationToCart />} />
        <Route index path="/confirmationOrder" element={<ConfirmationOrder />} />
        <Route index path="/communism2.0" element={<CommunismPage />} />
        <Route index path="/communism2.0/:id" element={<FullPost />} />
        <Route index path="/communism2.0/:id/edit" element={<AddPostPage />} />
        <Route index path="/addPost" element={<AddPostPage />} />
        {isAuth ? <Route index path="/myPage" element={<MyPage />} /> : null }
   </Routes>
  )
}

export default App

// {isAuth ? <Route index path="/myPage" element={<MyPage />} /> : null }