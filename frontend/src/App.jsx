import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserHome from "./pages/UserHome";
import CaptainHome from "./pages/CaptainHome";
import UserLogout from "./pages/UserLogout";
import CaptainLogout from "./pages/CaptainLogout";
import UserProtectRoute from "./pages/UserProtectRoute";
import CaptainProtectRoute from "./pages/CaptainProtectRoute";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Start />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/signup" element={<UserSignup />} />
      <Route path="/captain/login" element={<CaptainLogin />} />
      <Route path="/captain/signup" element={<CaptainSignup />} />

      {/* Protected User Routes */}
      <Route
        path="/user"
        element={
          <UserProtectRoute>
            <UserHome />
          </UserProtectRoute>
        }
      />
      <Route
        path="/user/logout"
        element={
          <UserProtectRoute>
            <UserLogout />
          </UserProtectRoute>
        }
      />

      {/* Protected Captain Routes */}
      <Route
        path="/captain"
        element={
          <CaptainProtectRoute>
            <CaptainHome />
          </CaptainProtectRoute>
        }
      />
      <Route
        path="/captain/logout"
        element={
          <CaptainProtectRoute>
            <CaptainLogout />
          </CaptainProtectRoute>
        }
      />
    </Routes>
  );
};

export default App;
