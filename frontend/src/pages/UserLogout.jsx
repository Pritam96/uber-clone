import axios from "axios";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const baseURL = import.meta.env.VITE_BASE_URL;

const UserLogout = () => {
  const navigate = useNavigate();
  const { setUser, setIsLoading } = useUserContext();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const logoutHandler = async () => {
      if (!token) {
        navigate("/user/login");
        return;
      }

      setIsLoading(true);
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
        }
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        setIsLoading(false);
        navigate("/user/login");
      }
    };

    logoutHandler();
  }, [navigate, setUser, setIsLoading]);

  return <div>Logging out...</div>;
};

export default UserLogout;
