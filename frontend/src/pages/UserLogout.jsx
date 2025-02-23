import axios from "axios";
import { useUserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const baseURL = import.meta.env.VITE_BASE_URL;

const UserLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) logoutHandler();
  }, []);

  const logoutHandler = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        `${baseURL}/users/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUser(null);
        localStorage.removeItem("token");
        navigate("/user/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return <div>Logging out...</div>;
};

export default UserLogout;
