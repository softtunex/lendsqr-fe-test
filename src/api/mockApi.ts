// src/api/mockApi.ts
import { User } from "../types/user";

export const fetchUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    const users: User[] = Array.from({ length: 500 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: `123-456-7890`,
      address: `Address ${i + 1}`,
    }));
    setTimeout(() => resolve(users), 1000);
  });
};
