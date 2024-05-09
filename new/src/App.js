import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignInFormD from './components/SignInFormD';
import SignInFormO from './components/SignInFormO';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DonorProfile from './components/DonorProfile';
// import ListFood from './components/ListFood';
import DonorCard from './components/DonorCard';
// import Box from "@mui/material/Box";
// import { Grid } from '@mui/material';

function App() {
  return (
    <>
    <Router>
 
     <Navbar />
     <DonorCard/>
     {/* <Box
  display="flex"
  justifyContent="center"
  boxSizing={"border-box"}
  alignItems="center"
  minHeight="100vh"
>
<DonorCard/>
</Box>
    */}


      <Routes>
      <Route path='/' exact />
      <Route path="/stories" element={<DonorProfile />} />
      <Route path="/signup-organization" element={<SignInFormO />} />
      <Route path="/signup-donor" element={<SignInFormD />} />
      <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
