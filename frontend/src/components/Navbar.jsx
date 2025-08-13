import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#bca789",
    padding: "10px 20px",
    color: "#d67b93"
  };

  const linkStyle = {
    color: "#d67b94",
    textDecoration: "none",
    margin: "0 10px",
    fontWeight: "bold"
  };

  return (
    <nav style={navStyle}>
      <div>
        <h3>📅 New Appointment</h3>
      </div>
      <div>
        <Link to="/" style={linkStyle}>HOME</Link>
        <Link to="/booking" style={linkStyle}> Booking</Link>
        <Link to="/login" style={linkStyle}> Login</Link>
        <Link to="/register" style={linkStyle}>Register </Link>
        <Link to="/dashboard" style={linkStyle}> Dashboard</Link>
      </div>
    </nav>
  );
}