import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
// import UserHomepage from "./pages/UserHomepage/UserHomepage";
import UploadRecipe from "./pages/UploadRecipe/UploadRecipe";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import AddDeliveryAddress from "./pages/PaymentPage/AddDeliveryAddress";
import Details from "./pages/PaymentPage/Details";
import Payment from "./pages/PaymentPage/Payment";
import Confirmation from "./pages/PaymentPage/Confirmation";
import PaymentMethod from "./pages/PaymentPage/PaymentMethod";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="/home" element={<UserHomepage/>} /> */}
        <Route path="/uploadRecipe" element={<UploadRecipe />} />
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/checkout" element={<AddDeliveryAddress />} />
        <Route path="/details" element={<Details />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/confirmation" element={<Confirmation />} />

      </Routes>
    </ThemeProvider>

  );
}

export default App;