import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
// import UserHomepage from "./pages/UserHomepage/UserHomepage";
import UploadRecipe from "./pages/UploadRecipe/UploadRecipe";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="/home" element={<UserHomepage/>} /> */}
        <Route path="/uploadRecipe" element={<UploadRecipe />} />
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;