import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from "react-router";
import Routing from './Routing.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routing/>
  </BrowserRouter>
  ,
)
