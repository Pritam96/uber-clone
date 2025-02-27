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
import UserRiding from "./pages/UserRiding";
import CaptainRiding from "./pages/CaptainRiding";

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
      <Route
        path="/user/riding"
        element={
          <UserProtectRoute>
            <UserRiding />
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
      <Route
        path="/captain/riding"
        element={
          <CaptainProtectRoute>
            <CaptainRiding />
          </CaptainProtectRoute>
        }
      />
    </Routes>
  );
};

export default App;
