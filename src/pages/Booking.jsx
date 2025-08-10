import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css"; // للتنسيق العام

function Booking() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: ""
  });

  // ✅ جلب المواعيد من الـ Backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/appointments")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // ✅ حفظ المدخلات
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ إرسال الموعد الجديد للـ Backend
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/appointments", formData)
      .then(() => {
        alert("✅ Appointment booked successfully!");
        setFormData({ name: "", phone: "", service: "", date: "", time: "" });
        // تحديث القائمة بعد الحجز
        return axios.get("http://localhost:5000/api/appointments");
      })
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error("Error booking appointment:", err));
  };

  return (
    <div className="booking-page">
      <h2>Book Your Appointment</h2>

      {/* ✅ نموذج حجز الموعد */}
      <form onSubmit={handleSubmit} className="booking-form">
        <label>NAME:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>PHONE NUMBER:</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>SERVICE REQUIRED:</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Choose The Service</option>
          <option>Hair Cutting</option>
          <option>Skin Care</option>
          <option>Manicure and Pedicure</option>
          <option>Lash Extension</option>
          <option>Eyebrow Lifting</option>
          <option>Make Up</option>
        </select>

        <label>APPOINTMENT DATE:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>TIME:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-main">
          Confirm your reservation
        </button>
      </form>

      {/* ✅ عرض جميع المواعيد */}
      <div className="appointments-list">
        <h3>All Appointments</h3>
        <ul>
          {appointments.length > 0 ? (
            appointments.map((a, i) => (
              <li key={i}>
                <strong>{a.name}</strong> - {a.service} on {a.date} at {a.time}
              </li>
            ))
          ) : (
            <p>No appointments booked yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Booking;