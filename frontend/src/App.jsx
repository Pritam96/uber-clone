import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserProtectRoute from "./pages/UserProtectRoute";
import UserLogout from "./pages/UserLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/captain/login" element={<CaptainLogin />} />
        <Route path="/captain/signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectRoute>
              <Home />
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
      </Routes>
    </div>
  );
};

export default App;
