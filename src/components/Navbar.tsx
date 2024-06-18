import React from "react";
import "./Navbar.scss";
import { FaSearch, FaBell } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import userAvatar from "../assets/images/avatar.png";

const Navbar: React.FC = () => (
  <div className="navbar">
    <div className="navbar-left">
      <img src={logo} alt="Lendsqr Logo" className="logo" />
    </div>
    <div className="navbar-center">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for anything"
          className="search-input"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
    <div className="navbar-right">
      <span className="docs-link">Docs</span>
      <div className="notification-icon">
        <FaBell className="bell-icon" />
      </div>
      <div className="user-info">
        <span className="username">Adedeji</span>
        <img src={userAvatar} alt="User Avatar" className="user-avatar" />
      </div>
    </div>
  </div>
);

export default Navbar;
