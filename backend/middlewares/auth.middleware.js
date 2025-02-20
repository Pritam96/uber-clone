import blacklistTokenModel from "../models/blacklist.token.model.js";
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
    req.user = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    };

    next();
  } catch (error) {
    console.error("Error authorizing user:", error);
    res.status(401).json({ message: error.message || "Unauthorized" });
  }
};
