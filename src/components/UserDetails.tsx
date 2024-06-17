// src/components/UserDetails.tsx
import React, { useEffect, useState } from "react";
import { getUserDetails, saveUserDetails } from "../utils/localStorageUtil";
import { User } from "../types/user";
// import "./UserDetails.scss";

interface UserDetailsProps {
  userId: number;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userDetails = getUserDetails(userId);
    if (userDetails) {
      setUser(userDetails);
    } else {
      // Fetch from API if not found in local storage
      //   fetchUsers().then((data) => {
      //     const user = data.find((u) => u.id === userId);
      //     if (user) {
      //       setUser(user);
      //       saveUserDetails(user);
      //     }
      //   });
    }
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default UserDetails;
