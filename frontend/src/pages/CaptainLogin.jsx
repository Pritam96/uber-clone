import { useState } from "react";
import { Link } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import rightArrow from "../assets/right-arrow.png";

const CaptainLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    // Clear forData after submit
    setFormData({
      email: "",
      password: "",
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
              Login
            </button>

            <p className="py-2 text-center">
              Want to be a Captain?{" "}
              <Link to="/captain/signup" className="text-blue-600">
                Register as a Captain
              </Link>
            </p>
          </form>
        </div>
        <div>
          <Link
            to="/user/login"
            className="flex items-center justify-center w-full bg-[#d5622d] text-white font-semibold rounded px-4 py-3"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
