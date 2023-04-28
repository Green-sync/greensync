import { Routes, Route} from "react-router-dom"
import ErrorPage from "./pages/errorPage"
// import LoginPage from "./pages/loginPage"
import { SignUp } from "./pages/signUpPage"
import {env} from "./utils"
import { LoginPage } from "./pages/loginPage"
import SideBarComponent from "./components/Navigation/SideBar/SideBarComponet"
import FarmerSideBarComponent from "./components/Navigation/forFarmer/FarmerNavBar"
import ConsumerBarComponent from "./components/Navigation/forConsumer/ConsumerSideBarComponent"
function App() {
console.log(env)
  return (
    <>
<Routes>
  <Route index path="/" element={<LoginPage/>}/>
  <Route path="/signUp" element={<SignUp />} />
  <Route path="/dashboard" element={<SideBarComponent/>}/>
  <Route path="/farmersmarket" element={<FarmerSideBarComponent/>}/>
  <Route path="/consumersmarket" element={<ConsumerBarComponent/>}/>
  <Route path="*" element={<ErrorPage/>}/>
</Routes>
    </>
  )
}

export default App
