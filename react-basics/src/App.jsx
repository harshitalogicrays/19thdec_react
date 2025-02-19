// import './App.css'

import Firstclasscomp from "./components/classcomp/firstclasscomp"
import EventDemoinfun from "./components/functionalcomp/EventDemoinfun"
import FirstFuncomp from "./components/functionalcomp/FirstFuncomp"
import Propsdemoinfun from "./components/functionalcomp/Propsdemoinfun"
import Statedemoinfun from "./components/functionalcomp/Statedemoinfun"

function App() {

  return (
  <div className="container mt-5">
    <h1 className="text-danger">Hello React</h1>
    {/* <FirstFuncomp></FirstFuncomp><hr/>
    <FirstFuncomp/><hr/>
    <Firstclasscomp/><br/> */}
    {/* <Propsdemoinfun title="props demo" username="LRA" isActive={true}
    mobile={8908765} names={["aaa","bbb","ccc"]}/><hr/> */}
     {/* <Propsdemoinfun title="props demo1"/> */}

     {/* <EventDemoinfun/> */}

     <Statedemoinfun/>
  </div>
  )
}

export default App
