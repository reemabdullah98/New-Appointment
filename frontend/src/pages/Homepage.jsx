import React from 'react';
import { Link } from 'react-router-dom';
import salonImage from '../assets/salonImage.jpg';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img 
        src={salonImage} 
        alt="Salon" 
        style={{ width: '80%', borderRadius: '15px', marginBottom: '20px' }} 
      />
      <h1 style={{ color: '#d67b93' }}>Book Your Appointment</h1>
      <Link to="/booking">
        <button className="btn-custom">Book Now</button>
      </Link>
    </div>
  );
}

export default HomePage;