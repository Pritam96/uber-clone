import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import rightArrow from "../assets/right-arrow.png";
import axios from "axios";
import { useCaptainContext } from "../context/CaptainContext";

const baseURL = import.meta.env.VITE_BASE_URL;

const CaptainSignup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
  });

  const navigate = useNavigate();
  const { setCaptain } = useCaptainContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) =>
      name === "firstName" || name === "lastName"
        ? {
            ...prevFormData,
            fullName: { ...prevFormData.fullName, [name]: value },
          }
        : name === "color" ||
          name === "plate" ||
          name === "capacity" ||
          name === "vehicleType"
        ? {
            ...prevFormData,
            vehicle: { ...prevFormData.vehicle, [name]: value },
          }
        : { ...prevFormData, [name]: value }
    );
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseURL}/captains/register`,
        formData
      );

      if (response.status === 201) {
        setCaptain(response.data?.captain);
        localStorage.setItem("captain-token", response.data?.token);
        navigate("/captain");
      }
    } catch (error) {
      console.log(error);
    }

    // Clear formData after submit
    setFormData({
      email: "",
      password: "",
      fullName: {
        firstName: "",
        lastName: "",
      },
      vehicle: {
        color: "",
        plate: "",
        capacity: "",
        vehicleType: "",
      },
    });
  };

  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-between p-7">
        <div>
          <div className="mb-8">
            <img className="w-16" src={uberLogo} alt="uber-logo" />
            <img className="w-7 text-left" src={rightArrow} alt="right-arrow" />
          </div>
          <form onSubmit={submitHandler}>
            <h3 className="text-base font-medium mb-2">
              What&apos;s your name
            </h3>
            <div className="w-full flex justify-between gap-4 mb-6">
              <input
                type="text"
                className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-sm"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.fullName.firstName}
                required
              />
              <input
                type="text"
                className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-sm"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.fullName.lastName}
                required
              />
            </div>

            <h3 className="text-base font-medium mb-2">
              What&apos;s your email
            </h3>
            <input
              type="email"
              className="w-full bg-[#eeeeee] rounded px-4 py-2 mb-6 border text-base placeholder:text-sm"
              name="email"
              id="email"
              placeholder="email@example.com"
              onChange={handleChange}
              value={formData.email}
              required
            />

            <h3 className="text-base font-medium mb-2">
              Your Vehicle Information
            </h3>
            <div className="mb-6">
              <div className="w-full flex justify-between gap-4 mb-4">
                <input
                  type="text"
                  className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-sm"
                  name="color"
                  id="color"
                  placeholder="Vehicle Color"
                  onChange={handleChange}
                  value={formData.vehicle.color}
                  required
                />
                <input
                  type="text"
                  className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-sm"
                  name="plate"
                  id="plate"
                  placeholder="Plate Number"
                  onChange={handleChange}
                  value={formData.vehicle.plate}
                  required
                />
              </div>

              <div className="w-full flex justify-between gap-4">
                <input
                  type="number"
                  className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-sm"
                  name="capacity"
                  id="capacity"
                  placeholder="Vehicle Capacity"
                  onChange={handleChange}
                  value={formData.vehicle.capacity}
                  required
                />
                <select
                  className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base"
                  name="vehicleType"
                  id="vehicleType"
                  onChange={handleChange}
                  value={formData.vehicle.vehicleType}
                  required
                >
                  <option value="">Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="motorcycle">Moto</option>
                </select>
              </div>
            </div>

            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              type="password"
              className="w-full bg-[#eeeeee] rounded px-4 py-2 mb-6 border text-base placeholder:text-sm"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <button className="w-full bg-black text-white font-semibold rounded px-4 py-3 mb-3">
              Register
            </button>

            <p className="py-2 text-center">
              Already registered?{" "}
              <Link to="/captain/login" className="text-blue-600">
                Login Here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service</span> apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
