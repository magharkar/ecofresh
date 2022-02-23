import React from "react";
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Error from "./components/Error/Error";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;