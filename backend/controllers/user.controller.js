import { validationResult } from "express-validator";
import createUser from "../services/user.service.js";
import userModel from "../models/user.model.js";

export const registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);

    const user = await createUser({
      firstName: fullName?.firstName,
      lastName: fullName?.lastName,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
