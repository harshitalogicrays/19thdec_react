import React from 'react'
import { Route, Routes } from 'react-router'
import App from './App'
import About from './components/functionalcomp/About'
import Home from './components/functionalcomp/Home'
import Login from './components/functionalcomp/Login'
import Header from './components/functionalcomp/Header'
import Register from './components/functionalcomp/Register'
import Pagenotfound from './Pagenotfound'
import FirstFuncomp from './components/functionalcomp/FirstFuncomp'
import Propsdemoinfun from './components/functionalcomp/Propsdemoinfun'
import EventDemoinfun from './components/functionalcomp/EventDemoinfun'
import Statedemoinfun from './components/functionalcomp/Statedemoinfun'
import Form1 from './components/functionalcomp/Form1'
import FormValidations from './components/functionalcomp/FormValidations'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
          <Route element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>} /> 
            <Route path='/register' element={<Register/>}/>
            <Route path='/fun/first' element={<FirstFuncomp/>}/>
            <Route path='/fun/props' element={<Propsdemoinfun/>}/>
            <Route path='/fun/event' element={<EventDemoinfun/>}/>
            <Route path='/fun/state' element={<Statedemoinfun/>}/>
            <Route path='/fun/form' element={<Form1/>}/>
            <Route path='/fun/form/validations' element={<FormValidations/>}/>

          </Route>
          <Route path='/login' element={<Login/>}/>
        </Route>
      
      <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
  )
}

export default Routing
