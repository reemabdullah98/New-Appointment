import React, { useState } from 'react';

function BookingForm({ onBook }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill all fields!");
      return;
    }
    onBook({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div style={{ marginBottom: '15px' }}>
        <label>NAME:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>PHONE NUMBER:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>

      <button type="submit" className="btn-custom">BOOK NOW</button>
    </form>
  );
}

export default BookingForm;