
import {Routes,Route} from 'react-router-dom'
import { HomeLayout } from './Layouts';
import { AuthPage } from './Pages/AuthPage';
import DashboardLayout from './Layouts/DashboardLayout';

export const App = () => {

  return <>
  <Routes>
    <Route path="/" element={<HomeLayout />} />
    <Route path="/auth" element={<AuthPage/>} />
    <Route path="/dashboard" element={<DashboardLayout/>} />
  </Routes>
  </>
};
// HomeLayout
// DashboardLayout