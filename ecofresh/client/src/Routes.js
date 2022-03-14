import React from "react";
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;