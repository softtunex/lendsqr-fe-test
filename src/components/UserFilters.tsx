import React, { useState } from "react";
import "./UserFilters.scss";

interface UserFiltersProps {
  onFilter: (filters: any) => void;
  organizations: string[];
  statuses: string[];
}

const UserFilters: React.FC<UserFiltersProps> = ({
  onFilter,
  organizations,
  statuses,
}) => {
  const [organization, setOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleFilter = () => {
    onFilter({ organization, username, email, date, phoneNumber, status });
  };

  const handleReset = () => {
    setOrganization("");
    setUsername("");
    setEmail("");
    setDate("");
    setPhoneNumber("");
    setStatus("");
    onFilter({});
  };

  return (
    <div className="user-filters">
      <div className="filter-group">
        <label>Organization</label>
        <select
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        >
          <option value="">Select</option>
          {organizations.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="filter-group">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="filter-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label>Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
      </div>
      <div className="filter-group">
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-buttons">
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
        <button onClick={handleFilter} className="filter-button">
          Filter
        </button>
      </div>
    </div>
  );
};

export default UserFilters;
