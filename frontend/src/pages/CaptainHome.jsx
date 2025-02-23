import { useNavigate } from "react-router-dom";

const CaptainHome = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/captain/logout");
  };

  return (
    <div>
      <h3 className="text-2xl">Home Page</h3>
      <button
        onClick={logoutHandler}
        className="bg-black text-white font-semibold px-4 py-2 rounded mt-8 hover:bg-gray-800"
      >
        Logout
      </button>
    </div>
  );
};

export default CaptainHome;
