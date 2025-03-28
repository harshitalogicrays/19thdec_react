import './App.css'

import Firstclasscomp from "./components/classcomp/firstclasscomp"
import EventDemoinfun from "./components/functionalcomp/EventDemoinfun"
import FirstFuncomp from "./components/functionalcomp/FirstFuncomp"
import Form1 from "./components/functionalcomp/Form1"
import ListRendering from "./components/functionalcomp/ListRendering"
import Products from "./components/functionalcomp/Products"
import Propsdemoinfun from "./components/functionalcomp/Propsdemoinfun"
import StateDemo1 from "./components/functionalcomp/StateDemo1"
import Statedemoinfun from "./components/functionalcomp/Statedemoinfun"
import cssmodule from './app.module.css'
import FormValidations from './components/functionalcomp/FormValidations'
import Reactbsform from './components/functionalcomp/Reactbsform'
import Header from './components/functionalcomp/Header'
import { Outlet } from 'react-router'
import ThemeContext from './components/functionalcomp/ThemeContext'
import CartContext from './components/functionalcomp/CartContext'
import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <>

    <ToastContainer position="top-left"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                    theme="colored"/>


    <ThemeContext>
      <CartContext>
        <Outlet/>
      </CartContext>

    {/* <h1 className="app">Hello React</h1>
    <h1 className={cssmodule.error}>Hello React</h1> */}
    {/* <FirstFuncomp></FirstFuncomp><hr/>
    <FirstFuncomp/><hr/>
    <Firstclasscomp/><br/> */}
    {/* <Propsdemoinfun title="props demo" username="LRA" isActive={true}
    mobile={8908765} names={["aaa","bbb","ccc"]}/><hr/> */}
     {/* <Propsdemoinfun title="props demo1"/> */}

     {/* <EventDemoinfun/> */}

     {/* <Statedemoinfun/> */}
{/* <StateDemo1/>   */}

{/* <Form1/> */}

{/* <ListRendering/>
<Products/> */}

{/* <FormValidations/> */}
{/* <Reactbsform title="React Bootstrap Demo"/> */}

    </ThemeContext>

</>
  )
}

export default App
