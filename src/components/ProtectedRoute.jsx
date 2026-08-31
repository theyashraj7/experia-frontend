import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

// Wrap any route element with this to require login. Unauthenticated
// visitors are sent to /login, and the page they wanted is remembered
// so Login can send them straight there after they sign in.
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
