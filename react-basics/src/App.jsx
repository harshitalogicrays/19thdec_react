// import './App.css'

import Firstclasscomp from "./components/classcomp/firstclasscomp"
import FirstFuncomp from "./components/functionalcomp/FirstFuncomp"
import Propsdemoinfun from "./components/functionalcomp/Propsdemoinfun"

function App() {

  return (
  <div className="container mt-5">
    <h1 className="text-danger">Hello React</h1>
    {/* <FirstFuncomp></FirstFuncomp><hr/>
    <FirstFuncomp/><hr/>
    <Firstclasscomp/><br/> */}
    {/* <Propsdemoinfun title="props demo" username="LRA" isActive={true}
    mobile={8908765} names={["aaa","bbb","ccc"]}/><hr/> */}
     <Propsdemoinfun title="props demo1"/>
  </div>
  )
}

export default App
