import { Outlet } from "react-router"

function App() {

  return (
   <>
    {/* <h1 className="text-red-500 text-3xl font-bold border-2 p-3 rounded-2xl w-3xs ms-8 ">Hello React</h1>

    <button type="button" className="text-white border-2 p-3 rounded-3xl bg-indigo-500 shadow-2xl shadow-indigo-500/50 hover:bg-indigo-800 hover:font-bold hover:text-2xl transition-all duration-3000 ease-in-out">Click Me</button>


    <h1 className="text-red-500 text-3xl font-bold border-2 p-3 rounded-2xl md:h-48  md:w-80 lg:w-3xs ms-8 ">Hello React</h1>

  <input type="text" placeholder="enter name" className="focus:bg-amber-200" /> */}

      <Outlet/>

   </>
  )
}

export default App
