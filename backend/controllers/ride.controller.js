import { validationResult } from "express-validator";
import { createRideService, getFareService } from "../services/ride.service.js";

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

export const getFare = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination } = req.query;

  try {
    const fare = await getFareService(pickup, destination);
    res.status(200).json(fare);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};
