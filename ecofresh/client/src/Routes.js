import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
import UploadRecipe from "./pages/UploadRecipe/UploadRecipe";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import CheckRequestStatus from "./pages/CheckRequestStatus/CheckRequestStatus";
import UploadRecipeHero from './pages/UploadRecipeHero/UploadRecipeHero'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/uploadRecipeNavigation" element={<UploadRecipeHero />} />
        <Route path="/uploadRecipe" element={<UploadRecipe/>} />
        <Route path="/checkReqStat" element={<CheckRequestStatus/>} />
        <Route path="/admin" element={<AdminHomepage/>} />
      </Routes>
    </ThemeProvider>

  );
}

export default App;