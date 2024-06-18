import React from "react";
import LoginForm from "../components/LoginForm";
import "./LoginPage.scss";
import illustration from "../assets/images/pablo-sign-in.svg";

const LoginPage: React.FC = () => (
  <div className="login-page">
    <div className="left-section">
      <img src={illustration} alt="Illustration" />
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
