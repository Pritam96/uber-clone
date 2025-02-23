import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/user/login");
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default UserProtectRoute;
