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

const Routing = () => {
  return (
   <Routes>
        <Route path='/' element={<App/>}>
            <Route element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='register' element={<Register/>}/>
            </Route>
            <Route path='login' element={<Login/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>

   </Routes>
  )
}

export default Routing
