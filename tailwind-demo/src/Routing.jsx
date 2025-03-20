import React from 'react'
import { Route, Routes } from 'react-router'
import App from './App'
import Header from './features/Header'
import Home from './features/Home'
import About from './features/About'
import Shop from './features/Shop'
import Register from './features/Register'
import Login from './features/Login'
import PageNotFound from './features/PageNotFound'
import Cart from './features/Cart'
import ProductDetails from './features/ProductDetails'
import AdminLayout from './features/Admin/AdminLayout'
import Dashboard from './features/Admin/Dashboard'
import AddProduct from './features/Admin/AddProduct'
import ViewProduct from './features/Admin/ViewProduct'
import Orders from './features/Admin/Orders'
import { Protected, ProtectedAdmin } from './features/hiddenlinks'

const Routing = () => {
  return (
   <Routes>
        <Route path='/' element={<App/>}>
            <Route element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<Protected><About/></Protected>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='product/details' element={<ProductDetails/>}/>

            </Route>
            <Route path='login' element={<Login/>}/>

            <Route path='admin' element={<ProtectedAdmin><AdminLayout/></ProtectedAdmin>}>
                <Route index element={<Dashboard/>}/>
                <Route path='add' element={<AddProduct/>}/>
                <Route path='view' element={<ViewProduct/>}/>
                <Route path='orders' element={<Orders/>}/>

            </Route>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>

   </Routes>
  )
}

export default Routing
