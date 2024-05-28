import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminAndUserGuard = ({ children }) => {
  const userData = useSelector((state) => state.mainReducer?.userData);

  if (!userData) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default AdminAndUserGuard;
