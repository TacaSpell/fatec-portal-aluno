import { Navigate, Outlet } from "react-router";
import { useAuthState } from "../context/AuthContext";

export const AuthenticatedRoutes = () => {
    const { isAuthenticated } = useAuthState();
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}