import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  let navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <h1>INI DASHBOARD</h1>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white p-2 rounded-lg"
                >
                  Logout
                </button>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
