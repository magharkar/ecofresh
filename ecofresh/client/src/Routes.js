import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
import ComplaintsPage from "./pages/Complaints/UserComplaintsPage"
import ComplaintResolutionPage from "./pages/Complaints/ComplaintResolutionPage";
import UploadRecipe from "./pages/UploadRecipe/UploadRecipe";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="/home" element={<UserHomepage/>} /> */}
        <Route path="/uploadRecipe" element={<UploadRecipe/>} />
        <Route path="/admin" element={<AdminHomepage/>} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path='/complaints/ComplaintResolutionPage/'>
            <Route path=':id' element={<ComplaintResolutionPage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;