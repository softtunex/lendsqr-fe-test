// src/pages/DashboardPage.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
// import "./DashboardPage.scss";

const DashboardPage: React.FC = () => (
  <div className="dashboard-page">
    <Navbar />
    <div className="content">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
);

export default DashboardPage;
