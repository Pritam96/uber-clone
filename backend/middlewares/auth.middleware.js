import blacklistTokenModel from "../models/blacklist.token.model.js";
import captainModel from "../models/captain.model.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  const token =
    req.cookies?.token || req.headers?.authorization?.replace("Bearer ", "");

  if (!token || (await blacklistTokenModel.findOne({ token }))) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "Invalid Token" });

    req.user = {
      id: user?._id,
      fullName: user?.fullName,
      email: user?.email,
    };

    next();
  } catch (error) {
    console.error("Error authorizing user:", error);
    res.status(401).json({ message: error.message || "Unauthorized" });
  }
};

export const authCaptain = async (req, res, next) => {
  const token =
    req.cookies?.token || req.headers?.authorization?.replace("Bearer ", "");

  if (!token || (await blacklistTokenModel.findOne({ token }))) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const captain = await captainModel.findById(decoded.id);
    if (!captain) return res.status(401).json({ message: "Invalid Token" });

    req.captain = {
      id: captain?._id,
      fullName: captain?.fullName,
      email: captain?.email,
      vehicle: captain?.vehicle,
    };

    next();
  } catch (error) {
    console.error("Error authorizing captain:", error);
    res.status(401).json({ message: error.message || "Unauthorized" });
  }
};
