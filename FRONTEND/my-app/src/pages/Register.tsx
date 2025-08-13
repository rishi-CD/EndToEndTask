import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import topImage from "../assets/reg1.png";
import bottomImage from "../assets/reg2.png"; 
import logoImage from "../assets/logo.png"; 

const Register: React.FC = () => {
  return (
    <div className="register-container">
      <img src={topImage} alt="Fitness Top" className="top-image" />
      <div className="register-box">
        <div className="logo">
          <img src={logoImage} alt="FitMeal Logo" className="logo-img" />
          <h1>FitMeal Partner</h1>
        </div>
        <h2 className="register-title">Register</h2>
        <input type="text" placeholder="Full Name" className="input-field" />
        <input type="email" placeholder="E-mail" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="password" placeholder="Confirm Password" className="input-field" />
        <button className="register-btn">Register</button>
        <p className="login-link"> Already have an account? <Link to="/">Login</Link></p>
      </div>
      <img src={bottomImage} alt="Fitness Bottom" className="bottom-image" />
    </div>
  );
};

export default Register;
