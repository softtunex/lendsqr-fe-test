import React, { useState } from "react";
// import "./LoginForm.scss";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle login logic
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
      <a className="forgot-password" href="#forgot-password">
        Forgot Password?
      </a>
      <button type="submit">LOG IN</button>
    </form>
  );
};

export default LoginForm;
