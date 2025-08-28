import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1>Welcome to My Beauty World</h1>
      <button onClick={handleLoginClick} className="btn-login">
        Login
      </button>
    </div>
  );
};

export default Home;