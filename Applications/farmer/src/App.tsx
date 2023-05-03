
import {Routes,Route} from 'react-router-dom'
import { HomeLayout } from './Layouts';
import { AuthPage } from './Pages/AuthPage';
import DashboardLayout from './Layouts/DashboardLayout';
import { AuthGuard } from 'greensync-ui';

export const App = () => {

  return <>
  <Routes>
    <Route path="/" element={<HomeLayout />} />
    <Route path="/auth" element={<AuthPage/>} >
      <Route path=":id" element={<AuthPage/>} />
    </Route>
    <Route path="/dashboard" element={
    <AuthGuard>
     <DashboardLayout/>
    </AuthGuard>
    } />
  </Routes>
  </>
};