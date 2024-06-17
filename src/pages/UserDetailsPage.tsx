// src/pages/UserDetailsPage.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserDetails from "../components/UserDetails";
// import "./UserDetailsPage.scss";

const UserDetailsPage: React.FC<{ userId: number }> = ({ userId }) => (
  <div className="user-details-page">
    <Navbar />
    <div className="content">
      <Sidebar />
      <UserDetails userId={userId} />
    </div>
  </div>
);

export default UserDetailsPage;
