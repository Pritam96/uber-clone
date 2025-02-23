import axios from "axios";
import { useCaptainContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const baseURL = import.meta.env.VITE_BASE_URL;

const CaptainLogout = () => {
  const navigate = useNavigate();
  const { setCaptain, setIsLoading } = useCaptainContext();

  useEffect(() => {
    const logoutHandler = async () => {
      const token = localStorage.getItem("captain-token");

      if (!token) {
        navigate("/captain/login");
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.post(
          `${baseURL}/captains/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setCaptain(null);
          localStorage.removeItem("captain-token");
        }
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        setIsLoading(false);
        navigate("/captain/login");
      }
    };

    logoutHandler();
  }, [navigate, setCaptain, setIsLoading]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
