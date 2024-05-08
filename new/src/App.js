import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignInFormD from './components/SignInFormD';
import SignInFormO from './components/SignInFormO';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FAQ from './components/FAQ';
import DashboardDonor from './components/DashboardDonor';

function App() {
  return (
    <>
    <Router>
     <Navbar />
      <Routes>
      <Route path='/' exact />
      <Route path="/signup-organization" element={<SignInFormO />} />
      <Route path="/signup-donor" element={<SignInFormD />} />
      <Route path='/FAQ' element={<FAQ />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard-donor" element={<DashboardDonor />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
