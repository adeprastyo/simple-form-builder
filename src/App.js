import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateFormPage from "./pages/CreateFomPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <FormPage />
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
