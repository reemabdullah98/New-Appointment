import React from 'react';


function AppointmentList({ appointments, onCancel }) {
  if (appointments.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '30px' }}>No appointments booked yet.</p>;
  }

  return (
    <div>
      <h3 style={{ textAlign: 'center', margin: '30px 0 15px' }}>Booked Appointments:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {appointments.map((item, index) => (
          <li key={index} className="appointment-item">
            <div>
              <strong>{item.name}</strong> - {item.service} on {item.date} at {item.time}
            </div>
            <button className="cancel-btn" onClick={() => onCancel(index)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;

