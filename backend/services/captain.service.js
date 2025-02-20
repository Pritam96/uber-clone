import captainModel from "../models/captain.model.js";

export const createCaptain = async ({
  firstName,
  lastName,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (
    !firstName ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("Please provide the required fields");
  }

  const captain = await captainModel.create({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};

export const authenticateCaptain = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Please provide the required fields");
  }

  const user = await captainModel.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
};
