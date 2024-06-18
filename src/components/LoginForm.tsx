import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://run.mocky.io/v3/daeb35fd-0ddb-4d58-9f2c-66a7384568de",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      // Handle success (e.g., save user info, redirect, etc.)
      if (response.data.status === "success") {
        alert("Login successful");
        navigate("/dashboard");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group password-group">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          className="show-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </span>
      </div>
      {error && <div className="error-message">{error}</div>}
      <a className="forgot-password" href="#forgot-password">
        Forgot Password?
      </a>
      <button type="submit">LOG IN</button>
    </form>
  );
};

export default LoginForm;
