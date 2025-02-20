import userModel from "../models/user.model.js";

export const createUser = async ({ firstName, lastName, email, password }) => {
  if (!firstName || !email || !password) {
    throw new Error("Please provide the required fields");
  }

  const user = await userModel.create({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
  });

  return user;
};

export const authenticateUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Please provide the required fields");
  }

  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
};
