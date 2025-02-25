import { Link } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import uberMap from "../assets/uber-map.gif";
import UserImage from "../assets/uber-car.webp";

const UserRiding = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-7 top-7"
        src={uberLogo}
        alt="uber-logo"
      />
      <Link
        to="/user"
        className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-5 right-5 "
      >
        <i className="ri-home-8-line text-lg font-medium"></i>
      </Link>
      <div className="h-1/2">
        <img src={uberMap} alt="map" className="h-full w-full object-cover" />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between px-3">
          <img src={UserImage} alt="uber-car" className="h-12" />
          <div className="text-right">
            <h2 className="text-lg font-medium">JOHN</h2>
            <h4 className="text-xl font-bold -mt-1">KA15AK00-0</h4>
            <p className="text-sm text-gray-600">White Maruti Suzuki Swift</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="w-full mt-3">
            <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
              <i className="ri-square-fill text-lg"></i>
              <div>
                <h3 className="font-bold text-lg">Third Wave Coffee</h3>
                <p className="text-[16px] tracking-tight text-gray-600">
                  17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout,
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-bank-card-2-fill text-lg"></i>
              <div>
                <h3 className="font-bold text-lg">&#x20B9;193.20</h3>
                <p className="text-[16px] tracking-tight text-gray-600">
                  Cash Payment
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white font-semibold px-4 py-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default UserRiding;
