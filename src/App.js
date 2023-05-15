import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateFormPage from "./pages/CreateFomPage";

function App() {
  let navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleCreateForm = async () => {
    navigate("/create-form");
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div>
              <h1>INI DASHBOARD</h1>
              <div className="flex gap-2">
                <button
                  onClick={handleCreateForm}
                  className="bg-green-600 text-white p-2 rounded-lg"
                >
                  Create Form
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white p-2 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-form"
        element={
          <ProtectedRoute>
            <CreateFormPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
