import React, { useState } from 'react';

function BookingForm({ onBook }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !time || !service) {
      alert('Please fill in all fields!');
      return;
    }

    onBook({ name, phone, time, service });

    // Reset form after booking
    setName('');
    setPhone('');
    setTime('');
    setService('');
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div style={{ marginBottom: '15px' }}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Time:</label>
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Service:</label>
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select a service</option>
          <option value="Hair Cut">Hair Cut</option>
          <option value="Makeup">Makeup</option>
          <option value="Laser">Laser</option>
          <option value="Eyebrow">Eyebrow</option>
          {/* Add more services if needed */}
        </select>
      </div>

      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default BookingForm;