import userModel from "../models/user.model.js";

const createUser = async ({ firstName, lastName, email, password }) => {
  if (!firstName || !email || !password) {
    throw new Error("Please provide required fields");
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

export default createUser;
