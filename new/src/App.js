import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignInFormD from './components/SignInFormD';
import SignInFormO from './components/SignInFormO';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { Home } from './components/Home';
import ListFood from './components/ListFood';
import AboutUs from './components/AboutUs';

const exampleData = [
  {
    donorName: "John Doe",
    location: "New York",
    description: "A generous donation of assorted food items.",
    image: "https://source.unsplash.com/random/1",
    servingSize: 30,
    expiryDate: "30/06/2024",
  },
  {
    donorName: "Jane Smith",
    location: "Los Angeles",
    description: "Freshly baked bread and pastries.",
    image: "https://source.unsplash.com/random/2",
    servingSize: 10,
    expiryDate: "30/06/2024",
  },
];
const status = 'pending';


function App() {
  return (
    <>
    <Router>
 
     <Navbar/>
      <Routes>
      <Route path='/' element={<Navigate to="/home" />} />
      <Route path='/home' element={<Home/>}/>
      <Route path="/stories" element={<Stories/>} />
      <Route path="/signup-organization" element={<SignInFormO />} />
      <Route path="/signup-donor" element={<SignInFormD />} />
      <Route path='/FAQ' element={<FAQ />} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/dashboard-donor" element={<DashboardDonor numCards={3} />} />
      <Route path="/dashboard-recipient" element={<DashboardRecipient data={exampleData} numCards={3} />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/dashboard-donor" element={<DashboardDonor numCards={6} />} />
      <Route path="/dashboard-recipient" element={<DashboardRecipient data={exampleData} numCards={2} />} />
      
      <Route path="/dashboard-rider" element={<DashboardRider numCards={2} foodStatus={status} statusSource={ListFood}/>} />
     
      </Routes>
<Footer />
      
    </Router>
    </>
  );
}

export default App;