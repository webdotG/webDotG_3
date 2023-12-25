import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/loginPage/loginPage";
import RegistrPage from './pages/registerPage/registerPage'
import MyPage from './pages/myPage/myPage';
import ShopPage from './pages/shopPage/shopPage2';
import HomePage from './pages/homePage/homePage';
import CartPage from './pages/cartPage/cartPage';
import PortfolioPage from './pages/portfolioPage/portfolioPage';
// import { Auth } from './components/loading/auth';

function App() {

  return (
    <>
      {/* <Auth> */}
        <Routes>
          <Route index path="/webdotg_3" element={<HomePage />} />
          <Route index path="/register" element={<RegistrPage />} />
          <Route index path="/login" element={<LoginPage />} />
          <Route index path="/portfolio" element={<PortfolioPage />} />
          <Route index path="/shop" element={<ShopPage />} />
          <Route index path="/cart" element={<CartPage />} />
          <Route index path="/my_page" element={<MyPage />} />
        </Routes>
      {/* </Auth> */}
    </>
  )
}

export default App
