import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const UserProtectRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { setUser, isLoading, setIsLoading } = useUserContext();

  const fetchUserProfile = useCallback(async () => {
    if (!token) {
      navigate("/user/login");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(`${baseURL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setUser(response.data?.user);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      localStorage.removeItem("token");
      navigate("/user/login");
    } finally {
      setIsLoading(false);
    }
  }, [navigate, setIsLoading, setUser, token]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  if (isLoading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default UserProtectRoute;
