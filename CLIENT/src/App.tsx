import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/loginPage/loginPage";
import RegistrPage from './pages/registerPage/registerPage'
import MyPage from './pages/myPage/myPage';
import ShopPage from './pages/shopPage/shopPage';

function App() {

  return (
    <>
      <Routes>
        <Route index path="/register" element={<RegistrPage />} />
        <Route index path="/login" element={<LoginPage />} />
        <Route index path="/myPage" element={<MyPage />} />
        <Route index path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  )
}

export default App
