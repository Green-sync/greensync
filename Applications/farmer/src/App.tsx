
import {Routes,Route} from 'react-router-dom'
import { HomeLayout } from './Layouts';
import { AuthPage } from './Pages/AuthPage';
import DashboardLayout from './Layouts/DashboardLayout';
import { DashboardPage } from './Pages';
import TempAddFarm from './components/FarmerFormTemp/TempAddFarmComponent';

export const App = () => {

  return <>
  <Routes>
    <Route path="/" element={<HomeLayout />} />
    <Route path="/auth" element={<AuthPage/>} >
      <Route path=":id" element={<AuthPage/>} />
    </Route>
    <Route path='/dashboard' element={
     <DashboardLayout/>
    } >
     <Route path='/dashboard' index element={<DashboardPage/>}></Route>
      <Route path=":id" element={<DashboardPage/>}/>
     
    </Route>
    <Route path='/temp' element={<TempAddFarm/>}/>
  </Routes>
  </>
};