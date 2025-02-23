import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCaptainContext } from "../context/CaptainContext";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const CaptainProtectRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("captain-token");
  const { setCaptain, isLoading, setIsLoading } = useCaptainContext();

  const fetchCaptainProfile = useCallback(async () => {
    if (!token) {
      navigate("/captain/login");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(`${baseURL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setCaptain(response.data?.captain);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching captain profile:", error);
      localStorage.removeItem("captain-token");
      navigate("/captain/login");
    } finally {
      setIsLoading(false);
    }
  }, [navigate, setCaptain, setIsLoading, token]);

  useEffect(() => {
    fetchCaptainProfile();
  }, [fetchCaptainProfile]);

  if (isLoading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default CaptainProtectRoute;
