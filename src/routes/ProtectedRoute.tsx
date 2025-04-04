import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: React.ElementType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Example authentication check

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
