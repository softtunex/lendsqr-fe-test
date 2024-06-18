import React from "react";
import UserCard from "./UserCard";
import UsersTable from "./UsersTable";
import "./Dashboard.scss";

const Dashboard: React.FC = () => (
  <div className="dashboard">
    <h2>Users</h2>
    <div className="user-cards">
      <UserCard
        title="Users"
        count={2453}
        icon="userIcon"
        iconBgColor="#fce4ec"
        iconColor="#DF18FF"
      />
      <UserCard
        title="Active Users"
        count={2453}
        icon="activeUserIcon"
        iconBgColor="#f3e5f5"
        iconColor="#5718FF"
      />
      <UserCard
        title="Users with Loans"
        count={12453}
        icon="loanUserIcon"
        iconBgColor="#ffebee"
        iconColor="#F55F44"
      />
      <UserCard
        title="Users with Savings"
        count={102453}
        icon="savingUserIcon"
        iconBgColor="#e0f7fa"
        iconColor="#FF3366"
      />
    </div>
    <UsersTable />
  </div>
);

export default Dashboard;
