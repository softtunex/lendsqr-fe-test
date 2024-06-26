import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { users as mockUsers } from "../utils/mockData";
import { getUniqueValues } from "../utils/utils";
import { saveUserDetails } from "../utils/localStorageUtil";
import UserFilters from "./UserFilters";
import { FaEye, FaBan, FaUserCheck, FaEllipsisV } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import "./UsersTable.scss";

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [filterPosition, setFilterPosition] = useState({ top: 0, left: 0 });
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const navigate = useNavigate();

  const organizations = getUniqueValues(mockUsers, "organization");
  const statuses = getUniqueValues(mockUsers, "status");

  const handleFilter = (filters: any) => {
    let filteredUsers = mockUsers;

    if (filters.organization) {
      filteredUsers = filteredUsers.filter(
        (user) => user.organization === filters.organization
      );
    }
    if (filters.username) {
      filteredUsers = filteredUsers.filter((user) =>
        user.username.toLowerCase().includes(filters.username.toLowerCase())
      );
    }
    if (filters.email) {
      filteredUsers = filteredUsers.filter((user) =>
        user.email.toLowerCase().includes(filters.email.toLowerCase())
      );
    }
    if (filters.date) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          new Date(user.dateJoined).toDateString() ===
          new Date(filters.date).toDateString()
      );
    }
    if (filters.phoneNumber) {
      filteredUsers = filteredUsers.filter((user) =>
        user.phone.includes(filters.phoneNumber)
      );
    }
    if (filters.status) {
      filteredUsers = filteredUsers.filter(
        (user) => user.status === filters.status
      );
    }

    setUsers(filteredUsers);
    setCurrentPage(0); // Reset to the first page after filtering
    setIsFilterDropdownOpen(false); // Close the dropdown after filtering
  };

  const handleEllipsisClick = (e: React.MouseEvent, userId: number) => {
    e.stopPropagation();
    if (activeMenu === userId) {
      setActiveMenu(null);
    } else {
      setActiveMenu(userId);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const actionsMenu = document.querySelector(".actions-menu");
    if (actionsMenu && !event.composedPath().includes(actionsMenu)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    if (activeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu]);

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };

  const handleViewDetails = (user: any) => {
    console.log("user", user);

    saveUserDetails(user);
    navigate(`/user-details/${user.id}`);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handleFilterIconClick = (
    event: React.MouseEvent<HTMLSpanElement>,
    columnIndex: number
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const columnOffset = 20;
    setFilterPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX - columnOffset * columnIndex,
    });
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  return (
    <div className="users-table-container">
      {isFilterDropdownOpen && (
        <div
          className="filter-dropdown"
          style={{ top: filterPosition.top, left: filterPosition.left }}
        >
          <UserFilters
            onFilter={handleFilter}
            organizations={organizations}
            statuses={statuses}
          />
        </div>
      )}
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>
                <p>
                  ORGANIZATION
                  <span onClick={(e) => handleFilterIconClick(e, 0)}>
                    <IoFilter />
                  </span>
                </p>
              </th>
              <th>
                <p>
                  USERNAME
                  <span onClick={(e) => handleFilterIconClick(e, 1)}>
                    <IoFilter />
                  </span>
                </p>
              </th>
              <th>
                <p>
                  EMAIL
                  <span onClick={(e) => handleFilterIconClick(e, 2)}>
                    <IoFilter />
                  </span>
                </p>
              </th>
              <th>
                <p>
                  PHONE NUMBER
                  <span onClick={(e) => handleFilterIconClick(e, 3)}>
                    <IoFilter />
                  </span>
                </p>
              </th>
              <th>
                <p>
                  DATE JOINED
                  <span onClick={(e) => handleFilterIconClick(e, 4)}>
                    <IoFilter />
                  </span>
                </p>
              </th>
              <th>
                <p>
                  STATUS
                  <span onClick={(e) => handleFilterIconClick(e, 5)}>
                    <IoFilter />
                  </span>
                </p>
              </th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((user) => (
              <tr key={user.id}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <div className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </div>
                </td>
                <td className="actions">
                  <div
                    className={`ellipsis ${
                      activeMenu === user.id ? "active" : ""
                    }`}
                    onClick={(e) => handleEllipsisClick(e, user.id)}
                  >
                    <FaEllipsisV />
                    {activeMenu === user.id && (
                      <div className="actions-menu">
                        <button onClick={() => handleViewDetails(user)}>
                          <FaEye /> View Details
                        </button>
                        <button>
                          <FaBan /> Blacklist User
                        </button>
                        <button>
                          <FaUserCheck /> Activate User
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-info">
        <div className="select">
          <span>Showing</span>
          <div className="select-wrapper">
            <select
              style={{ backgroundColor: "#e5e8ee" }}
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <span>out of {users.length}</span>
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default UsersTable;
