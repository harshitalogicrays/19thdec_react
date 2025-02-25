import React from 'react'
import { Route, Routes } from 'react-router'
import App from './App'
import About from './components/functionalcomp/About'
import Home from './components/functionalcomp/Home'
import Login from './components/functionalcomp/Login'
import Header from './components/functionalcomp/Header'
import Register from './components/functionalcomp/Register'
import Pagenotfound from './Pagenotfound'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
          <Route element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>} /> 
            <Route path='/register' element={<Register/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Route>
      
      <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
  )
}

export default Routing
