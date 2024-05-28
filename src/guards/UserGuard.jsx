import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserGuard = ({ children }) => {
  const userData = useSelector((state) => state.mainReducer?.userData);

  if (!userData) {
    return <Navigate to="/auth" />;
  }

  if (userData.role !== "user") {
    return <Navigate to="/" />;
  }

  return children;
};

export default UserGuard;
