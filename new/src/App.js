import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignInFormD from './components/SignInFormD';
import SignInFormO from './components/SignInFormO';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Stories from './components/Stories';
// import ListFood from './components/ListFood';
// import DonorCard from './components/DonorCard';
// import Box from "@mui/material/Box";
// import { Grid } from '@mui/material';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import DashboardRider from './components/DashboardRider';
import DashboardRecipient from './components/DashboardRecipient';
import DashboardDonor from './components/DashboardDonor';

function App() {
  return (
    <>
    <Router>
 
     <Navbar />

    {/* //  <DonorCard/> */}
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
      <Route path="/stories" element={<Stories/>} />
      <Route path="/signup-organization" element={<SignInFormO />} />
      <Route path="/signup-donor" element={<SignInFormD />} />
      <Route path='/FAQ' element={<FAQ />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard-donor" element={<DashboardDonor numCards={3} />} />
      <Route path="/dashboard-recipient" element={<DashboardRecipient numCards={2} />} />
      <Route path="/dashboard-rider" element={<DashboardRider numCards={3} />} />
     
      </Routes>
      <Footer /> 
    </Router>
    </>
  );
}

export default App;
