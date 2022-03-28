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
import UserHomepage from "./pages/UserHomepage/UserHomepage";
import UploadRecipe from "./pages/UploadRecipe/UploadRecipe";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import CheckRequestStatus from "./pages/CheckRequestStatus/CheckRequestStatus";
import UploadRecipeHero from './pages/UploadRecipeHero/UploadRecipeHero'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="/usercomplaints" element={<UserComplaintsPage />} />
        <Route path="/addcomplaint" element={<AddComplaintPage />} />

        <Route path='/complaints/ComplaintDetailsPage/'>
            <Route path=':id' element={<ComplaintDetailsPage />}></Route>
        </Route>

        <Route path='/complaints/ComplaintResolutionPage/'>
            <Route path=':id' element={<ComplaintResolutionPage />}></Route>
        </Route>
        <Route path="/uploadRecipe" element={<UploadRecipe />} />
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/home" element={<UserHomepage/>} />
        <Route path="/home/recipe" element={<RecipeDetails />} />
        <Route path="/uploadRecipeNavigation" element={<UploadRecipeHero />} />
        <Route path="/uploadRecipe" element={<UploadRecipe/>} />
        <Route path="/checkReqStat" element={<CheckRequestStatus/>} />
        <Route path="/admin" element={<AdminHomepage/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
