
import {Routes,Route} from 'react-router-dom'
import { HomeLayout } from './Layouts';

export const App = () => {

  return <>
  <Routes>
    <Route path="/" element={<HomeLayout />} />
    <Route path="/auth" element={<h1/>} />
    <Route path="/dashboard" element={<h1/>} />
  </Routes>
  </>
};
// HomeLayout
// DashboardLayout