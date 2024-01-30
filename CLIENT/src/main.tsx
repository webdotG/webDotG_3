import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './variablesTheme.css'
import './index.module.css'
import { store } from './store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from './components/provider/themeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
)
