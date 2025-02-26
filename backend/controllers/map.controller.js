import { validationResult } from "express-validator";
import {
  getAddressCoordinatesService,
  getDistanceTimeService,
  getSuggestionsService,
} from "../services/maps.service.js";

export const getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const coordinates = await getAddressCoordinatesService(req.query?.address);
    res.status(200).json(coordinates);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Coordinates not found" });
  }
};

export const getDistanceTime = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const distanceTime = await getDistanceTimeService(
      req.query?.origin,
      req.query?.destination
    );
    res.status(200).json(distanceTime);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAutoCompleteSuggestions = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const suggestions = await getSuggestionsService(req.query?.input);
    res.status(200).json(suggestions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
