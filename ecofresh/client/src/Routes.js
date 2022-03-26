import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
// import UserHomepage from "./pages/UserHomepage/UserHomepage";
import UploadRecipe from "./pages/UploadRecipe/UploadRecipe";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import AddDeliveryAddress from "./pages/AddDeliveryAddress/AddDeliveryAddress";
import Details from "./pages/AddDeliveryAddress/Details";
import Payment from "./pages/AddDeliveryAddress/Payment";
import Confirmation from "./pages/AddDeliveryAddress/Confirmation";
import PaymentMethod from "./pages/AddDeliveryAddress/PaymentMethod";

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