import './App.module.scss'
import { Routes, Route} from 'react-router-dom'
import RegisterPage from "./pages/registerPage/registerpPgae";
import LoginPage from "./pages/loginPage/loginPage";

function App() {

  return (
    <>
    <Routes>
    <Route index path="/register" element={<RegisterPage />} />
    <Route index path="/login" element={<LoginPage />} />
    </Routes>
    </>
  )
}

export default App
