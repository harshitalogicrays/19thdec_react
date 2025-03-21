import { useSelector } from "react-redux"
import AddUser from "./AddUser"
import { selectUsers } from "./redux/userSlice"

function App() {
  // const users  = useSelector((state)=>state.user.users)
  const users  = useSelector(selectUsers)
  return (
  <>
    <AddUser/>
    <h1>{JSON.stringify(users)}</h1>

  </>
  )
}

export default App
