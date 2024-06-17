// src/utils/localStorageUtil.ts
import { User } from "../types/user";

export const saveUserDetails = (user: User) => {
  localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
};

export const getUserDetails = (id: number): User | null => {
  const user = localStorage.getItem(`user_${id}`);
  return user ? JSON.parse(user) : null;
};
