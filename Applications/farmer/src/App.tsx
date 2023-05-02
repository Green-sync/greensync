export const App = () => {
  const data =
  return <>
  <Routes>
    <Route path="/" element={<HomeLayout />} />
    <Route path="/auth" element={<AuthComponent/>} />
    <Route path="/dashboar" element={<AboutComponent/>} />
  </Routes>
  </>
};
// HomeLayout
// DashboardLayout