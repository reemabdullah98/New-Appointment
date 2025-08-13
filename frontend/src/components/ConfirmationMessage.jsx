import React from 'react';

function ConfirmationMessage({ booking }) {
  return (
    <div style={{ backgroundColor: '#e0ffe0', padding: '15px', marginTop: '20px', borderRadius: '8px' }}>
      <h3>your Booking is successful  !</h3>
      <p>
         Thank You <strong>{booking.name}</strong> <br/>،your Appointment has been booked for service    <strong>{booking.service}</strong><br />
        on the date <strong>{booking.date}</strong> <br/> the hour <strong>{booking.time}</strong>.<br />
        we will call you: <strong>{booking.phone}</strong>
      </p>
    </div>
  );
}

export default ConfirmationMessage;