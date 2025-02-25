import { Link } from "react-router-dom";
import UserImage from "../assets/uber-user.jpg";
import { useState } from "react";

const ConfirmRidePopUp = ({ setConfirmRidePopUpPanel, setRidePopUpPanel }) => {
  const [enteredOtp, setEnteredOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h5
        className="p-1 text-center text-gray-300"
        onClick={() => {
          setConfirmRidePopUpPanel(false);
          setRidePopUpPanel(true);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-center">
        New Ride Available!
      </h3>
      <div className="flex items-center justify-between mt-3 p-4 border-2 border-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            src={UserImage}
            alt="uber-user"
            className="h-12 w-12 rounded-full object-cover"
          />
          <h2 className="text-lg font-medium">Hash Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="w-full mt-4">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-map-pin-range-fill text-lg"></i>
            <div>
              <h3 className="font-bold text-lg">562/11-A</h3>
              <p className="text-[16px] tracking-tight text-gray-600">
                Kaikondrahalli, Bengaluru, Karanataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="font-bold text-lg">Third Wave Coffee</h3>
              <p className="text-[16px] tracking-tight text-gray-600">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnataka
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

        <div className="w-full">
          <form onClick={submitHandler}>
            <input
              type="number"
              name="otpInput"
              id="otpInput"
              placeholder="Enter OTP"
              className="w-full bg-[#eee] px-6 py-4 text-base font-mono rounded-lg mb-4"
              onChange={(e) => setEnteredOtp(e.target.value)}
              value={enteredOtp}
            />
            <Link
              to="/captain/riding"
              className="flex justify-center items-center bg-green-600 text-lg text-white font-semibold px-10 py-3 mb-2 rounded-lg"
            >
              Confirm
            </Link>
            <button
              className="text-lg text-white bg-red-600 font-semibold px-10 py-3 rounded-lg w-full"
              onClick={() => {
                setConfirmRidePopUpPanel(false);
                setRidePopUpPanel(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmRidePopUp;
