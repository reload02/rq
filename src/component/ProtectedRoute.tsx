import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <>{children}</>
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
