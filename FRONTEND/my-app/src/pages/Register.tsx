import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import topImage from "../assets/RegisterPageLogo1.png";
import bottomImage from "../assets/RegisterPageLogo2.png";
import logoImage from "../assets/TitleLogo.png";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        confirmPassword,
      });
      alert(response.data.message || "Registration successful!");
      navigate("/");
    } catch (error: any) {
      alert(error.response?.data?.message || "Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <img src={topImage} className="top-image" alt="Decoration" />
      <img src={bottomImage} className="bottom-image" alt="Decoration" />
      <div className="register-box">
        <div className="logo">
          <img src={logoImage} className="logo-img" alt="Logo" />
          <h1>Meal Tracker</h1>
        </div>
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="input-field"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="register-btn" type="submit">
            Register
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
