import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import mystore from './redux/mystore.js'
import 'bootstrap/dist/css/bootstrap.css'

createRoot(document.getElementById('root')).render(
  <Provider store={mystore}>
    <App />
  </Provider>,
)
