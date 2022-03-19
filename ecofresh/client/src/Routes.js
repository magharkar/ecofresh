import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routes> 
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Error />} />
       </Routes>
    </ThemeProvider>
   
  );
}

export default App;