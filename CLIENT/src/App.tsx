import './App.module.scss'
import { Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/loginPage/loginPage";
import  RegistrPage  from './pages/registerPage/registerPage'

function App() {

  return (
    <>
    <Routes>
    <Route index path="/register" element={<RegistrPage />} />
    <Route index path="/login" element={<LoginPage />} />
    </Routes>
    </>
  )
}

export default App
