import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import "./assets/styles/main.scss";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/user-details/:id" element={<UserDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
