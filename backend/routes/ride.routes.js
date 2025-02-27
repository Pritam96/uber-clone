import express from "express";
import { body, query } from "express-validator";
import { createRide, getFare } from "../controllers/ride.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/create",
  [
    body("pickup")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid pickup location"),
    body("destination")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid destination location"),
    body("vehicleType")
      .isString()
      .isIn(["auto", "car", "motorcycle"])
      .withMessage("Invalid vehicle type"),
  ],
  authUser,
  createRide
);

router.get(
  "/fare",
  [
    query("pickup")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid pickup location"),
    query("destination")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid destination location"),
  ],
  authUser,
  getFare
);

export default router;
