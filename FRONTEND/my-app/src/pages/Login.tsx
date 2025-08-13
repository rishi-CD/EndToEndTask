import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import loginImage from "../assets/login.png";
import logoImage from "../assets/logo.png";
const Login: React.FC = () => {
  return (
    <div className="login-container">
     
      <div className="login-left">
        <img src={loginImage} alt="Fitness" />
      </div>
      <div className="login-right">
        <div className="login-box">
          <div className="logo">
            <img src={logoImage} alt="FitMeal " className="logo-img" />
            <h1>Fitness MealPartner</h1>
          </div>

          <h2 className="login-title">Login</h2>

          <input type="email" placeholder="E-mail" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />

          <button className="login-btn">Login</button>

         <p className="register-link">  Don't have an account? 
            <Link to="/register">Register</Link> </p>
           
        </div>
      </div>
    </div>
  );
};

export default Login;
