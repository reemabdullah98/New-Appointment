import React, { useEffect, useState } from "react";
import "../index.css";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleDelete = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div className="dashboard-container">
      <h2>📅 All Booked Appointments</h2>
      {bookings.length > 0 ? (
        <div className="dashboard-list">
          {bookings.map((b, index) => (
            <div className="dashboard-card" key={index}>
              <h3>{b.service}</h3>
              <p><strong>Name:</strong> {b.name}</p>
              <p><strong>Phone:</strong> {b.phone}</p>
              <p><strong>Date:</strong> {b.date}</p>
              <p><strong>Time:</strong> {b.time}</p>
              <button onClick={() => handleDelete(index)} className="btn-delete">
                ❌ Cancel
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-bookings">No appointments booked yet.</p>
      )}
    </div>
  );
}

export default Dashboard;