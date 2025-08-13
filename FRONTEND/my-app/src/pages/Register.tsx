import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import topImage from "../assets/RegisterPageLogo1.png";
import bottomImage from "../assets/RegisterPageLogo2.png";
import logoImage from "../assets/TitleLogo.png";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("varan da",{name,
        email,
        password,
        confirmPassword, });
    

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        confirmPassword, 
      });

      console.log("Registration successful:", response.data);
      alert("Registration successful!");
    } catch (error: any) {
      console.error(error);
      console.error(" Registration error:", error);
      alert(error.response?.data?.error || "Registration failed");
    }
  };

  

  return (
    <div className="register-container">
      <img src={topImage} alt="Fitness Top" className="top-image" />
      <div className="register-box">
        <div className="logo">
          <img src={logoImage} alt="Logo" style={{ width: "40px" }} />
          <h1>FitMeal Partner</h1>
        </div>
        <h2 className="register-title">Create a Account</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-field"
          type="email"
          placeholder="E-mail"
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
        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>
        <p className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
      <img src={bottomImage} alt="Fitness Bottom" className="bottom-image" />
    </div>
  );
};

export default Register;
