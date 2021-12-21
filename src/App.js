import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Template from "./components/Template";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import RolePage from "./pages/User/Role";
import UserListPage from "./pages/User/List";
import CustomerPage from "./pages/Customers";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/login");
    }
  }, [pathname, navigate]);
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<Template />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="user/role" element={<RolePage />} />
          <Route path="user/list" element={<UserListPage />} />
          <Route path="customers" element={<CustomerPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
