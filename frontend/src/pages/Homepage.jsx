import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
    <div className="home-container">
      <div className="login-container">
        <button onClick={handleLoginClick} className="login">
          Login
        </button>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Home;