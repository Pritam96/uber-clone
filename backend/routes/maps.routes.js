import express from "express";
import { query } from "express-validator";
import {
  getAutoCompleteSuggestions,
  getCoordinates,
  getDistanceTime,
} from "../controllers/map.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/coordinates",
  query("address")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Address must be at least 3 characters long"),
  authUser,
  getCoordinates
);

router.get(
  "/distance-time",
  query("origin")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Origin location must be at least 3 characters long"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Destination location must be at least 3 characters long"),
  authUser,
  getDistanceTime
);

router.get(
  "/suggestions",
  query("input").isString().isLength({ min: 3 }),
  authUser,
  getAutoCompleteSuggestions
);

export default router;
