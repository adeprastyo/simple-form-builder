import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  if (!localStorage.getItem("access_token")) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
