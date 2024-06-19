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
        iconBgColor="#FCE8FF"
        iconColor="#DF18FF"
      />
      <UserCard
        title="Active Users"
        count={2453}
        icon="activeUserIcon"
        iconBgColor="#efe8ff"
        iconColor="#5718FF"
      />
      <UserCard
        title="Users with Loans"
        count={12453}
        icon="loanUserIcon"
        iconBgColor="FEEFED"
        iconColor="#F55F44"
      />
      <UserCard
        title="Users with Savings"
        count={102453}
        icon="savingUserIcon"
        iconBgColor="#FFEBF0"
        iconColor="#FF3366"
      />
    </div>
    <UsersTable />
  </div>
);

export default Dashboard;
