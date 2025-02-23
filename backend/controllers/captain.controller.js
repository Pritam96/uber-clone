import { validationResult } from "express-validator";
import { createCaptain } from "../services/captain.service.js";
import captainModel from "../models/captain.model.js";
import blacklistTokenModel from "../models/blacklist.token.model.js";

export const registerCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password, vehicle } = req.body;

    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
      return res
        .status(400)
        .json({ message: "Captain already exists with this email" });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain({
      firstName: fullName?.firstName,
      lastName: fullName?.lastName,
      email,
      password: hashedPassword,
      color: vehicle?.color,
      plate: vehicle?.plate,
      capacity: vehicle?.capacity,
      vehicleType: vehicle?.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({
      token,
      captain: {
        id: captain._id,
        fullName: captain.fullName,
        email: captain.email,
        vehicle: captain.vehicle,
      },
    });
  } catch (error) {
    console.error("Error registering captain:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const loginCaptain = async (req, res, next) => {
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

    const existingCaptain = await captainModel
      .findOne({ email })
      .select("+password");
    if (
      !existingCaptain ||
      !(await existingCaptain.comparePassword(password))
    ) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = existingCaptain.generateAuthToken();

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
        captain: {
          id: existingCaptain._id,
          fullName: existingCaptain.fullName,
          email: existingCaptain.email,
          vehicle: existingCaptain.vehicle,
        },
      });
  } catch (error) {
    console.error("Error authenticating captain:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const getCaptainProfile = async (req, res, next) => {
  res.status(200).json(req.captain);
};

export const logoutCaptain = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers?.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(400).json({ message: "Token required" });
    }

    await blacklistTokenModel.updateOne(
      { token },
      { $set: { token } },
      { upsert: true }
    );

    res.clearCookie("token");
    res.status(200).json({ message: "Captain logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
