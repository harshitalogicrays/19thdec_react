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
import RHFDemo from './components/functionalcomp/RHFDemo'
import CustomCompDemo from './components/functionalcomp/CustomCompDemo'
import HooksDemo from './components/functionalcomp/HooksDemo'
import StateDemo1 from './components/functionalcomp/StateDemo1'
import UseCallbackdemo from './components/functionalcomp/UseCallbackdemo'
import UseEffectDemo from './components/functionalcomp/UseEffectDemo'
import UseRefDemo from './components/functionalcomp/UseRefDemo'
import USeMemoDemo from './components/functionalcomp/USeMemoDemo'
import UseTransitionDemo from './components/functionalcomp/UseTransitionDemo'
import USEImperativeHandle from './components/functionalcomp/USEImperativeHandle'
import UseContextDemo from './components/functionalcomp/UseContextDemo'
import CustomHookDemo from './components/functionalcomp/CustomHookDemo'
import Liftingthestateupparent from './components/functionalcomp/Liftingthestateupparent'
import MyContext from './components/functionalcomp/MyContext'
import Products from './components/functionalcomp/Products'
import Cart from './components/functionalcomp/Cart'
import ClassHeader from './components/classcomp/ClassHeader'
import Firstclasscomp from './components/classcomp/firstclasscomp'
import Propsinclass from './components/classcomp/Propsinclass'
import EventandState from './components/classcomp/EventandState'
import Forminclass from './components/classcomp/Forminclass'
import Refinclass from './components/classcomp/Refinclass'
import Purecompdemo from './components/classcomp/Purecompdemo'
import LifeCycleMethods from './components/classcomp/LifeCycleMethods'
import HOCdemo from './components/classcomp/HOCdemo'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
          <Route element={<MyContext><Header/></MyContext>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>} /> 
            <Route path='shop' element={<Products/>} /> 
            <Route path='/register' element={<Register/>}/>
            <Route path='/fun/first' element={<FirstFuncomp/>}/>
            <Route path='/fun/props' element={<Propsdemoinfun/>}/>
            <Route path='/fun/event' element={<EventDemoinfun/>}/>
            <Route path='/fun/state' element={<Statedemoinfun/>}/>
            <Route path='/fun/form' element={<Form1/>}/>
            <Route path='/fun/ltsu' element={<Liftingthestateupparent/>}/>
            <Route path='/fun/form/validations' element={<FormValidations/>}/>
            <Route path='/fun/form/rhf' element={<RHFDemo title="React Hook Form Demo"/>}/>
            <Route path='/fun/hooks' element={<HooksDemo/>}>
                 <Route index element={<StateDemo1/>}/>
                 <Route path='usecallback' element={<UseCallbackdemo/>}/>
                 <Route path='useeffect' element={<UseEffectDemo/>}/>
                 <Route path='useref' element={<UseRefDemo/>}/>
                 <Route path='usememo' element={<USeMemoDemo/>}/>
                 <Route path='usetransition' element={<UseTransitionDemo/>}/>
                 <Route path='useih' element={<USEImperativeHandle/>}/>
                 <Route path='usecontext' element={<UseContextDemo/>}/>
                 <Route path='custom' element={<CustomHookDemo/>}/>

            </Route>

            <Route path='custom' element={<CustomCompDemo/>} /> 
            <Route path='cart' element={<Cart/>} /> 
          </Route>
          <Route path='login' element={<Login/>}/>          
        </Route>

        <Route path='/class' element={<ClassHeader/>}>
            <Route index element={<Firstclasscomp/>}/>
            <Route path='props' element={<Propsinclass/>}/>
            <Route path='es' element={<EventandState/>}/>
            <Route path='form' element={<Forminclass/>}/>
            <Route path='ref' element={<Refinclass/>}/>
            <Route path='pure' element={<Purecompdemo/>}/>
            <Route path='lifecycle' element={<LifeCycleMethods/>}/>
            <Route path='hoc' element={<HOCdemo/>}/>
        </Route>
        
      <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
  )
}

export default Routing
