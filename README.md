Lendsqr Frontend Engineering Assessment - README Project Overview

This repository contains the solution for the Lendsqr Frontend Engineering Assessment. The primary objective of this assessment is to create a responsive, functional, and visually appealing frontend interface based on the design specifications provided in the Figma link.

Login Detail

Any Email and Password would work for this as Api authentication was not implemented or provided

Features Implemented

Login Page: Users can log in and log out.

Dashboard: Displays user information.

User Details: Admins can view users details.

Responsive Design: The application is fully responsive and works on various screen sizes.

API and Mock Data Integration: The frontend communicates with an api and a mock data from mocky.io and json-generator.com to fetch and display data.

Folder and Component Breakdown

Components

LoginForm.tsx: Handles user login functionality.

Dashboard.tsx: Main dashboard displaying user statistics and all users.

UserCard.tsx: Displays user statistics in a card format.

UserTable.tsx: Displays all users.

UserFilters.tsx: Allows to filter by specify information.

Navbar.tsx: Navigation bar for the application.

Sidebar.tsx: Sidebar navigation for different sections.

Modal.tsx: Reusable modal component for dialogs.

Pages

LoginPage.tsx: Login page for the application.

DashboardPage.tsx: Dashboard page with user statistics.

UserDetailsPage.tsx: Individual user information

Styles

App.scss: Global styles for the application.

Component-specific styles: Each component has its own SCSS file for modular styling.

Utilities

mockData.ts: Mock Data for making getting user Data.

localStorageUtil.ts: Save user information into localstorage.

utils.js: To filter by avalaible organizations and status.

Design Considerations

The design and implementation follow the Figma design specifications provided. Key considerations include:

Consistency: Adhering to the design system for a consistent look and feel.

Accessibility: Ensuring the application is accessible to all users, including those with disabilities.

Performance: Optimizing the application for fast load times and smooth interactions.

Scalability: Writing modular and reusable code to facilitate future enhancements.

Conclusion

This project demonstrates the implementation of a modern frontend application using React and TypeScript. By following the design specifications and adhering to best practices, the application provides a robust and user-friendly interface for managing users and viewing statistics.
