import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
