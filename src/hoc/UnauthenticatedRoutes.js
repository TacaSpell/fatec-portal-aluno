import { Navigate, Outlet } from "react-router";
import { useAuthState } from "../context/AuthContext";

export const UnauthenticatedRoutes = () => {
  const { isAuthenticated } = useAuthState();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
}