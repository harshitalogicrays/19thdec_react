import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
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
import Checkout from './features/Checkout'
import CheckoutPayment from './features/CheckoutPayment'
import ThankYou from './features/ThankYou'
import OrderDetails from './features/Admin/OrderDetails'
import MyOrders from './features/MyOrders'
import MyOrderDetails from './features/MyOrderDetails'


const TitleUpdater = () => {
    const location = useLocation();  
    const validRoutes = [
        "/", "/about", "/login", "/register", "/shop", "/cart",
        "/product/details", "/checkout", "/checkoutpayment", "/thankyou",
        "/myorders", "/myorder/details/:id", "/admin", "/admin/add",
        "/admin/view", "/admin/orders", "/admin/order/details/:id"
    ];

    useEffect(() => {
      const titles = {
        "/": "E-Commerce", "/about": "About","/login":"Login Page",
        "/register":"SignUp" ,'/shop':'Shop Now'
      };
      let newTitle = titles[location.pathname] || "E-Commerce";

      const isValidRoute = validRoutes.some(route =>
            location.pathname.startsWith(route)
        );

        if (!isValidRoute) {
            newTitle = "Page Not Found";
        }
        document.title = newTitle;
    }, [location]);
  
    return null;
  };

const Routing = () => {
  return (
    <>
          <TitleUpdater />
   <Routes>
        <Route path='/' element={<App/>}>
            <Route element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<Protected><About/></Protected>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='product/details' element={<ProductDetails/>}/>
                <Route path='checkout' element={<Protected><Checkout/> </Protected>}/>
                <Route path='checkoutpayment' element={<Protected><CheckoutPayment/> </Protected>}/>
                <Route path='thankyou' element={<ThankYou/>}/>
                <Route path='myorders' element={<Protected><MyOrders/> </Protected>}/>
                <Route path='myorder/details/:id' element={<Protected><MyOrderDetails/> </Protected>}/>
            </Route>
            <Route path='login' element={<Login/>}/>

            <Route path='admin' element={<ProtectedAdmin><AdminLayout/></ProtectedAdmin>}>
                <Route index element={<Dashboard/>}/>
                <Route path='add' element={<AddProduct/>}/>
                <Route path='edit/product/:id' element={<AddProduct/>}/>
                <Route path='view' element={<ViewProduct/>}/>
                <Route path='orders' element={<Orders/>}/>
                <Route path='order/details/:id' element={<OrderDetails/>}/>

            </Route>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>

   </Routes>
   </>
  )
}

export default Routing
