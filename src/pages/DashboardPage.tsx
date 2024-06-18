import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import "./DashboardPage.scss";

const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-page">
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={handleToggleSidebar} />
      <div className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
