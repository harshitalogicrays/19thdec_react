import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Routing from './Routing.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <Routing />
  </BrowserRouter></Provider>,
)
