import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
import userModel from "../models/user.model.js";
import blacklistTokenModel from "../models/blacklist.token.model.js";

export const registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await createUser({
      firstName: fullName?.firstName,
      lastName: fullName?.lastName,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide the required fields" });
    }

    const existingUser = await userModel.findOne({ email }).select("+password");
    if (!existingUser || !(await existingUser.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = existingUser.generateAuthToken();

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 3600000, // 36 hrs
    };

    res
      .status(201)
      .cookie("token", token, options)
      .json({
        token,
        user: {
          id: existingUser._id,
          fullName: existingUser.fullName,
          email: existingUser.email,
        },
      });
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

export const logoutUser = async (req, res, next) => {
  const token =
    req.cookies?.token || req.headers?.authorization?.replace("Bearer ", "");

  await blacklistTokenModel.create({ token });

  res
    .clearCookie("token")
    .status(200)
    .json({ message: "User logged out successfully" });
};
