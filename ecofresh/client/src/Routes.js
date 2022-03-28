import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
// import UserHomepage from "./pages/UserHomepage/UserHomepage";
import UploadRecipe from "./pages/UploadRecipe/UploadRecipe";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import SupplierDashboard from "./pages/Supplier/SupplierDashboard";
import SupplierOrders from "./pages/Supplier/SupplierOrders";
import OrderDetail from "./pages/Supplier/OrderDetail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="/home" element={<UserHomepage/>} /> */}
        <Route path="/uploadRecipe" element={<UploadRecipe/>} />
        <Route path="/admin" element={<AdminHomepage/>} />
        <Route path="/supplier" element={<SupplierDashboard/>} />
        <Route path="/supplier/orders" element = {<SupplierOrders/>}/>
        <Route path="/supplier/orders/:id" element={<OrderDetail/>}></Route>

        {/* <Route path="supplier/orders/order-detail/:id" element={<OrderDetail/>}></Route> */}
      </Routes>
    </ThemeProvider>

  );
}

export default App;