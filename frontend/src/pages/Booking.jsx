// src/pages/Booking.jsx
import React, { useState } from 'react';
import { createAppointment } from '../services/api';

function Booking() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState(null); // success | error | null
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      await createAppointment({
        name,
        phone,
        serviceName:service,
        appointment_date: date,
        appointment_time: time,
      });
      setStatus('success');
      setName(''); setPhone(''); setService(''); setDate(''); setTime('');
    } catch (err) {
      setStatus(err.message || 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Confirm your reservation'}
      </button>

      {status === 'success' && (
        <p className="alert success">Appointment saved ✅</p>
      )}
      {status && status !== 'success' && (
        <p className="alert error">Error: {status}</p>
      )}
    </form>
  );
}

export default Booking;