import React, { useState } from 'react';
import Login from './pages/login';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import AboutPage from './pages/Aboutpage';
import ContactPage from './pages/Contactpage';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';
import './index.css';
import { Routes, Route, Navigate} from 'react-router-dom'
import Products from './pages/products';



function App() {
  const token = localStorage.getItem('token');
  return (
   <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login"    element={<Login />} />
      {token ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/products" element={<Products />} />
         

         
         
         
                </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}

export default App;



