import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

const baseURL = import.meta.env.VITE_BASE_URL;

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/users/login`, formData);

      if (response.status === 201) {
        setUser(response.data?.user);
        localStorage.setItem("token", response.data?.token);
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
    }

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
          <img className="w-16 mb-15" src={uberLogo} alt="uber-logo" />
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
              New Here?{" "}
              <Link to="/user/signup" className="text-blue-600">
                Create new Account
              </Link>
            </p>
          </form>
        </div>
        <div>
          <Link
            to="/captain/login"
            className="flex items-center justify-center w-full bg-[#10b461] text-white font-semibold rounded px-4 py-3"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
