import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const user = useSelector((state) => {
    return state.user;
  });

  console.log(user)

  if (user.token === "") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
