import React from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaUsers,
  FaMoneyCheckAlt,
  FaCogs,
  FaList,
  FaSave,
  FaChartLine,
  FaFileInvoiceDollar,
  FaExchangeAlt,
  FaConciergeBell,
  FaUserShield,
  FaUserTie,
  FaHandshake,
  FaUserLock,
  FaChartPie,
  FaCog,
  FaTools,
  FaClipboardList,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const handleLogout = () => {
    // Implement the logic to log out the user
    console.log("User logged out");
    // Redirect to login page
    window.location.href = "/";
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="menu">
        <h3 className={isOpen ? "visible" : "hidden"}>Switch Organization</h3>
        <ul>
          <li title="Dashboard">
            <FaChartPie /> {isOpen && "Dashboard"}
          </li>
          <li className={`section ${isOpen ? "visible" : "hidden"}`}>
            CUSTOMERS
          </li>
          <li title="Users">
            <FaUsers /> {isOpen && "Users"}
          </li>
          <li title="Guarantors">
            <FaUserTie /> {isOpen && "Guarantors"}
          </li>
          <li title="Loans">
            <FaMoneyCheckAlt /> {isOpen && "Loans"}
          </li>
          <li title="Decision Models">
            <FaCogs /> {isOpen && "Decision Models"}
          </li>
          <li title="Savings">
            <FaSave /> {isOpen && "Savings"}
          </li>
          <li title="Loan Requests">
            <FaClipboardList /> {isOpen && "Loan Requests"}
          </li>
          <li title="Whitelist">
            <FaList /> {isOpen && "Whitelist"}
          </li>
          <li title="Karma">
            <FaUserLock /> {isOpen && "Karma"}
          </li>
          <li className={`section ${isOpen ? "visible" : "hidden"}`}>
            BUSINESSES
          </li>
          <li title="Organization">
            <FaUserShield /> {isOpen && "Organization"}
          </li>
          <li title="Loan Products">
            <FaHandshake /> {isOpen && "Loan Products"}
          </li>
          <li title="Savings Products">
            <FaTools /> {isOpen && "Savings Products"}
          </li>
          <li title="Fees and Charges">
            <FaFileInvoiceDollar /> {isOpen && "Fees and Charges"}
          </li>
          <li title="Transactions">
            <FaExchangeAlt /> {isOpen && "Transactions"}
          </li>
          <li title="Services">
            <FaConciergeBell /> {isOpen && "Services"}
          </li>
          <li title="Service Account">
            <FaUser /> {isOpen && "Service Account"}
          </li>
          <li title="Settlements">
            <FaClipboardList /> {isOpen && "Settlements"}
          </li>
          <li title="Reports">
            <FaChartLine /> {isOpen && "Reports"}
          </li>
          <li className={`section ${isOpen ? "visible" : "hidden"}`}>
            SETTINGS
          </li>
          <li title="Preferences">
            <FaCog /> {isOpen && "Preferences"}
          </li>
          <li title="Fees and Pricing">
            <FaTools /> {isOpen && "Fees and Pricing"}
          </li>
          <li title="Audit Logs">
            <FaClipboardList /> {isOpen && "Audit Logs"}
          </li>
          <li title="System Messages">
            <FaEnvelope /> {isOpen && "System Messages"}
          </li>
          <hr />
          <li title="Logout" onClick={handleLogout}>
            <FaSignOutAlt /> {isOpen && "Logout"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
