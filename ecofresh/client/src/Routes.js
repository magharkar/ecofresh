import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
import UserComplaintsPage from "./pages/Complaints/UserComplaintsPage"
import ComplaintsPage from "./pages/Complaints/AdminComplaintsPage"
import AddComplaintPage from "./pages/Complaints/AddComplaint"
import ComplaintResolutionPage from "./pages/Complaints/ComplaintResolutionPage";
import ComplaintDetailsPage from "./pages/Complaints/ComplaintDetails";
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
        <Route path="/usercomplaints" element={<UserComplaintsPage />} />
        <Route path="/addcomplaint" element={<AddComplaintPage />} />

        <Route path='/complaints/ComplaintDetailsPage/'>
            <Route path=':id' element={<ComplaintDetailsPage />}></Route>
        </Route>

        <Route path='/complaints/ComplaintResolutionPage/'>
            <Route path=':id' element={<ComplaintResolutionPage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;