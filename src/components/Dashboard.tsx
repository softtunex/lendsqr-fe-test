// src/components/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api/mockApi";
import { User } from "../types/user";
// import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
