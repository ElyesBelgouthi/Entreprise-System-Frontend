import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminGuard = ({ children }) => {
  const userData = useSelector((state) => state.mainReducer?.userData);

  if (!userData) {
    return <Navigate to="/auth" />;
  }

  if (userData.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminGuard;
