import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './variablesBase.scss'
import './index.module.css'
import { store } from './store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
)
