import React from "react";
import {
  FaUsers,
  FaUserCheck,
  FaFileInvoiceDollar,
  FaCoins,
} from "react-icons/fa";
import "./UserCard.scss";

interface UserCardProps {
  title: string;
  count: number;
  icon: "userIcon" | "activeUserIcon" | "loanUserIcon" | "savingUserIcon";
  iconBgColor: string;
  iconColor: string;
}

const UserCard: React.FC<UserCardProps> = ({
  title,
  count,
  icon,
  iconBgColor,
  iconColor,
}) => {
  const getIcon = () => {
    switch (icon) {
      case "userIcon":
        return <FaUsers />;
      case "activeUserIcon":
        return <FaUserCheck />;
      case "loanUserIcon":
        return <FaFileInvoiceDollar />;
      case "savingUserIcon":
        return <FaCoins />;
      default:
        return null;
    }
  };

  return (
    <div className="user-card">
      <div
        className="icon"
        style={{ backgroundColor: iconBgColor, color: iconColor }}
      >
        {getIcon()}
      </div>
      <div className="details">
        <p>{title}</p>
        <h3>{count.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default UserCard;
