import { Route, Routes } from "react-router-dom";
import Auth from "../../Pages/Auth";
import Dashboard from "../../Pages/Dashboard";
import "./App.css";
import Layout from "../Layout";
import ProtectedRoute from "../ProtectedRoute";

const App = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};
export default App;
