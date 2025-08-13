import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import loginImage from "../assets/LoginLogo.png";
import logoImage from "../assets/TitleLogo.png";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, password });
      if (res.data.success) {
        navigate("/home");
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Fitness" />
      </div>
      <div className="login-right">
        <div className="login-box">
          <div className="logo">
            <img src={logoImage} alt="Logo" style={{ width: "40px" }} />
            <h1>FitMeal Partner</h1>
          </div>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
