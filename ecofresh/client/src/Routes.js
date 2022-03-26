import React from "react";
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
import ComplaintsPage from "./pages/Complaints/UserComplaintsPage"
import ComplaintResolutionPage from "./pages/Complaints/ComplaintResolutionPage";

function App() {
  return ( 
    <Routes> 
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Error />} />
      <Route path="/complaints" element={<ComplaintsPage />} />
      <Route path='/complaints/ComplaintResolutionPage/'>
          <Route path=':id' element={<ComplaintResolutionPage />}></Route>
      </Route>

    </Routes>
  );
}

export default App;