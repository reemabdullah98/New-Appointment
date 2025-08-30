import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; 
import '../index.css'; 

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    
const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem('token');

  if (!token) {
    alert('Token is missing. Please log in first.');
    return;
  }

  // فصل التاريخ والوقت إذا كانو بنفس الحقل
  const [datePart, timePart] = formData.date.split('T'); // YYYY-MM-DDTHH:mm

  const payload = {
    name: formData.name,
    phone: formData.phone,
    service: formData.service,
    date: datePart,
    time: timePart,
  };

  try {
    const response = await api.post('/appointments', payload, {
      headers: {
        Authorization:` Bearer ${token}`,
      },
    });

   
    navigate('/dashboard');
  } catch (error) {
    console.error('Error booking appointment:', error);
    alert('Failed to book appointment: ' + error.response?.data?.error || 'Unknown error');
  }
};
  return (
    <div className="booking-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Choose a service:
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Haircut">Haircut</option>
            <option value="Makeup">Makeup</option>
            <option value="Eyebrow">Eyebrow</option>
            <option value="Laser">Laser</option>
            <option value="Hair Color">Hair Color</option>
          </select>
        </label>

        <label>
          Select Time:
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  
  );
};

export default Booking;