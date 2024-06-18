import React from "react";
import LoginForm from "../components/LoginForm";
import "./LoginPage.scss";
import illustration from "../assets/images/pablo-sign-in.svg";
import logo from "../assets/images/logo.png";

const LoginPage: React.FC = () => (
  <div className="login-page">
    <div className="left-section">
      <img src={logo} alt="Lendsqr Logo" className="logo" />
      <img src={illustration} alt="Illustration" className="illustration" />
    </div>
    <div className="right-section">
      <div className="login-container">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default LoginPage;
