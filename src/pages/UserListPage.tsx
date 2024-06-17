// src/pages/UserListPage.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserPage from "../components/UserPage";
// import "./UserListPage.scss";

const UserListPage: React.FC = () => (
  <div className="user-list-page">
    <Navbar />
    <div className="content">
      <Sidebar />
      <UserPage />
    </div>
  </div>
);

export default UserListPage;
