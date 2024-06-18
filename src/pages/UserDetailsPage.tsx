import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./UserDetailsPage.scss";

const UserDetailsPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="user-details-page">
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={handleToggleSidebar} />
      <div className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <button className="back-button" onClick={() => navigate("/dashboard")}>
          ← Back to Users
        </button>
        <div className="header-top">
          <h2>User Details</h2>
          <div className="action-buttons">
            <button className="blacklist-button">Blacklist User</button>
            <button className="activate-button">Activate User</button>
          </div>
        </div>
        <div className="user-details-header">
          <div className="user-info">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="user-avatar">A</div>
              <div className="user-basic-info">
                <h2>Grace Effiom</h2>
                <p>LSQF587g90</p>
              </div>
            </div>
            <div className="user-tier">
              User's Tier: <span>★★★☆☆</span>
            </div>
            <div className="user-account-info">
              <h2>₦200,000.00</h2>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className="user-details-tabs">
            <div className="tab active">General Details</div>
            <div className="tab">Documents</div>
            <div className="tab">Bank Details</div>
            <div className="tab">Loans</div>
            <div className="tab">Savings</div>
            <div className="tab">App and System</div>
          </div>
        </div>
        <div className="user-details-content">
          <div className="section">
            <h3>Personal Information</h3>
            <div className="info-group">
              <div className="info-item">
                <label>Full Name</label>
                <p>Grace Effiom</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>07060780922</p>
              </div>
              <div className="info-item">
                <label>Email Address</label>
                <p>grace@gmail.com</p>
              </div>
              <div className="info-item">
                <label>BVN</label>
                <p>07060780922</p>
              </div>
              <div className="info-item">
                <label>Gender</label>
                <p>Female</p>
              </div>
              <div className="info-item">
                <label>Marital Status</label>
                <p>Single</p>
              </div>
              <div className="info-item">
                <label>Children</label>
                <p>None</p>
              </div>
              <div className="info-item">
                <label>Type of Residence</label>
                <p>Parent's Apartment</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="section">
            <h3>Education and Employment</h3>
            <div className="info-group">
              <div className="info-item">
                <label>Level of Education</label>
                <p>B.Sc</p>
              </div>
              <div className="info-item">
                <label>Employment Status</label>
                <p>Employed</p>
              </div>
              <div className="info-item">
                <label>Sector of Employment</label>
                <p>Fintech</p>
              </div>
              <div className="info-item">
                <label>Duration of Employment</label>
                <p>2 years</p>
              </div>
              <div className="info-item">
                <label>Office Email</label>
                <p>grace@lendsqr.com</p>
              </div>
              <div className="info-item">
                <label>Monthly Income</label>
                <p>₦200,000.00 - ₦400,000.00</p>
              </div>
              <div className="info-item">
                <label>Loan Repayment</label>
                <p>40,000</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="section">
            <h3>Socials</h3>
            <div className="info-group">
              <div className="info-item">
                <label>Twitter</label>
                <p>@grace_effiom</p>
              </div>
              <div className="info-item">
                <label>Facebook</label>
                <p>Grace Effiom</p>
              </div>
              <div className="info-item">
                <label>Instagram</label>
                <p>@grace_effiom</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="section">
            <h3>Guarantor</h3>
            <div className="info-group">
              <div className="info-item">
                <label>Full Name</label>
                <p>Debby Ogana</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>07060780922</p>
              </div>
              <div className="info-item">
                <label>Email Address</label>
                <p>debby@gmail.com</p>
              </div>
              <div className="info-item">
                <label>Relationship</label>
                <p>Sister</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="section">
            <div className="info-group">
              <div className="info-item">
                <label>Full Name</label>
                <p>Debby Ogana</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>07060780922</p>
              </div>
              <div className="info-item">
                <label>Email Address</label>
                <p>debby@gmail.com</p>
              </div>
              <div className="info-item">
                <label>Relationship</label>
                <p>Sister</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
