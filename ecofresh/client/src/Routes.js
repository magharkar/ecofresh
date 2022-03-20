import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
import UserHomepage from "./pages/UserHomepage/UserHomepage";
import UploadRecipe from "./pages/UploadRecipe/UploadRecipe";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Error />} />
      <Route path="/home" element={<UserHomepage/>} />
      <Route path="/uploadRecipe" element={<UploadRecipe/>} />
      <Route path="/admin" element={<AdminHomepage/>} />
    </Routes>
  );
}

export default App;