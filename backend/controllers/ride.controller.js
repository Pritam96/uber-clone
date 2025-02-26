import { validationResult } from "express-validator";
import { createRideService } from "../services/ride.service.js";

export const createRide = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.user.id;
  const { pickup, destination, vehicleType } = req.body;

  try {
    const ride = await createRideService(
      userId,
      pickup,
      destination,
      vehicleType
    );
    res.status(201).json(ride);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};
