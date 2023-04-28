import { Routes, Route} from "react-router-dom"
import ErrorPage from "./pages/errorPage"
import DashboardPage from "./pages/dashboard"
import LoginForms from "./components/forms/LoginForms"
import { RouteGuard } from "./components/authentication/auth.guard"
import SideBarComponent from "./components/Navigation/SideBar/SideBarComponet"
import FarmerSideBarComponent from "./components/Navigation/forFarmer/FarmerNavBar"
import ConsumerBarComponent from "./components/Navigation/forConsumer/ConsumerSideBarComponent"
function App() {
  return (
    <>
<Routes>
  <Route index path="/" element={
    // <RouteGuard>
      <SideBarComponent/>
    // </RouteGuard>
  }/>
  <Route path="/signIn" element={<LoginForms />} />
  <Route path="/farmersmarket" element={<FarmerSideBarComponent/>}/>
  <Route path="/consumersmartket" element={<ConsumerBarComponent/>}/>
  <Route path="*" element={<ErrorPage/>}/>
  
</Routes>
    </>
  )
}

export default App
