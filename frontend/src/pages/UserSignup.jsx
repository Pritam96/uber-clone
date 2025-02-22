import { useState } from "react";
import { Link } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";

const UserSignup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) =>
      name === "firstName" || name === "lastName"
        ? {
            ...prevFormData,
            fullName: { ...prevFormData.fullName, [name]: value },
          }
        : { ...prevFormData, [name]: value }
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    // Clear forData after submit
    setFormData({
      email: "",
      password: "",
      fullName: {
        firstName: "",
        lastName: "",
      },
    });
  };
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-between p-7">
        <div>
          <img className="w-16 mb-15" src={uberLogo} alt="uber-logo" />
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
              Sign Up
            </button>

            <p className="py-2 text-center">
              Already Have an Account?{" "}
              <Link to="/login" className="text-blue-600">
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

export default UserSignup;
