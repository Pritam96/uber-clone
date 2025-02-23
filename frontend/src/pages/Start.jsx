import { Link } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import uberBackground from "../assets/uber-background.jpg";

const Start = () => {
  return (
    <div>
      <div
        className="bg-cover bg-bottom h-screen w-full flex flex-col justify-between pt-7"
        style={{ backgroundImage: `url(${uberBackground})` }}
      >
        <img className="w-16 ml-7" src={uberLogo} alt="uber-logo" />
        <div className="bg-white px-4 pt-4 pb-7">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link
            to="/user/login"
            className="flex items-center justify-center w-full bg-black text-white font-semibold py-3 mt-6 rounded"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
