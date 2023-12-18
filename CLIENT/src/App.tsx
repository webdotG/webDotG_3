import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/loginPage/loginPage";
import RegistrPage from './pages/registerPage/registerPage'
import MyPage from './pages/myPage/myPage';
import ShopPage from './pages/shopPage/shopPage';
import HomePage from './pages/homePage/homePage';
import CartPage from './pages/cartPage/cartPage';
import PortfolioPage from './pages/portfolioPage/portfolioPage';
// import { Auth } from './components/loading/auth';

function App() {

  return (
    <>
      {/* <Auth> */}
        <Routes>
          <Route index path="/webDotG_3/" element={<HomePage />} />
          <Route index path="/webDotG_3/register" element={<RegistrPage />} />
          <Route index path="/webDotG_3/login" element={<LoginPage />} />
          <Route index path="/webDotG_3/portfolio" element={<PortfolioPage />} />
          <Route index path="/webDotG_3/shop" element={<ShopPage />} />
          <Route index path="/webDotG_3/cart" element={<CartPage />} />
          <Route index path="/webDotG_3/my_page" element={<MyPage />} />
        </Routes>
      {/* </Auth> */}
    </>
  )
}

export default App
