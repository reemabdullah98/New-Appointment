import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    if (!fullName || !phoneNumber || !selectedService || !selectedTime) {
      alert("Please fill in all fields");
      return;
    }

    // عملية الحجز الوهمية (ممكن تربطها ب backend)
    console.log("Booking Info:", {
      fullName,
      phoneNumber,
      selectedService,
      selectedTime,
    });

    navigate("/dashboard");
  };

  return (
    <div className="booking-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleBooking}>
        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
        />

        <label>Choose a service:</label>
        <select onChange={(e) => setSelectedService(e.target.value)} value={selectedService}>
          <option value="">-- Select --</option>
          <option value="Haircut">Haircut</option>
          <option value="Makeup">Makeup</option>
          <option value="Eyebrow">Eyebrow</option>
          <option value="Laser">Laser</option>
        </select>

        <label>Select Time:</label>
        <input
          type="datetime-local"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;