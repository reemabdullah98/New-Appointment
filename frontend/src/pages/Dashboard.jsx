import React, { useEffect, useState } from "react";
import AppointmentList from '../components/AppointmentList'
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
      <AppointmentList/>
    </div>
  );
}

export default Dashboard;