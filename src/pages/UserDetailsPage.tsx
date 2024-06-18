import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getUserDetails } from "../utils/localStorageUtil";
import { User } from "../types/user";
import "./UserDetailsPage.scss";

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = Number(id);
    const userDetails = getUserDetails(userId);
    setUser(userDetails);
  }, [id]);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!user) {
    return <div>User not found</div>;
  }

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
              <div className="user-avatar">{user.avatar}</div>
              <div className="user-basic-info">
                <h2>{user.username}</h2>
                <p>{user.uniqueCode}</p>
              </div>
            </div>
            <div className="user-tier">
              User's Tier:{" "}
              <span>{"★".repeat(user.tier) + "☆".repeat(5 - user.tier)}</span>
            </div>
            <div className="user-account-info">
              <h2>{user.balance}</h2>
              <p>
                {user.accountNumber}/{user.bank}
              </p>
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
                <p>{user.personalInfo.fullName}</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>{user.personalInfo.phoneNumber}</p>
              </div>
              <div className="info-item">
                <label>Email Address</label>
                <p>{user.personalInfo.email}</p>
              </div>
              <div className="info-item">
                <label>BVN</label>
                <p>{user.personalInfo.bvn}</p>
              </div>
              <div className="info-item">
                <label>Gender</label>
                <p>{user.personalInfo.gender}</p>
              </div>
              <div className="info-item">
                <label>Marital Status</label>
                <p>{user.personalInfo.maritalStatus}</p>
              </div>
              <div className="info-item">
                <label>Children</label>
                <p>{user.personalInfo.children}</p>
              </div>
              <div className="info-item">
                <label>Type of Residence</label>
                <p>{user.personalInfo.residence}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="section">
            <h3>Education and Employment</h3>
            <div className="info-group">
              <div className="info-item">
                <label>Level of Education</label>
                <p>{user.educationEmployment.education}</p>
              </div>
              <div className="info-item">
                <label>Employment Status</label>
                <p>{user.educationEmployment.employmentStatus}</p>
              </div>
              <div className="info-item">
                <label>Sector of Employment</label>
                <p>{user.educationEmployment.sector}</p>
              </div>
              <div className="info-item">
                <label>Duration of Employment</label>
                <p>{user.educationEmployment.duration}</p>
              </div>
              <div className="info-item">
                <label>Office Email</label>
                <p>{user.educationEmployment.officeEmail}</p>
              </div>
              <div className="info-item">
                <label>Monthly Income</label>
                <p>{user.educationEmployment.monthlyIncome}</p>
              </div>
              <div className="info-item">
                <label>Loan Repayment</label>
                <p>{user.educationEmployment.loanRepayment}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="section">
            <h3>Socials</h3>
            <div className="info-group">
              <div className="info-item">
                <label>Twitter</label>
                <p>{user.socials.twitter}</p>
              </div>
              <div className="info-item">
                <label>Facebook</label>
                <p>{user.socials.facebook}</p>
              </div>
              <div className="info-item">
                <label>Instagram</label>
                <p>{user.socials.instagram}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="section">
            <h3>Guarantor</h3>
            <div className="info-group">
              <div className="info-item">
                <label>Full Name</label>
                <p>{user.guarantor.fullName}</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>{user.guarantor.phoneNumber}</p>
              </div>
              <div className="info-item">
                <label>Email Address</label>
                <p>{user.guarantor.email}</p>
              </div>
              <div className="info-item">
                <label>Relationship</label>
                <p>{user.guarantor.relationship}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
