import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import AboutPage from './pages/Aboutpage';
import ContactPage from './pages/Contactpage';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Booking from './pages/Booking';
import './index.css';



function App() {
  return (
    <Router>
       <Navbar />
      <Header />
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;