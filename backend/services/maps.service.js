import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

export const getAddressCoordinatesService = async (address) => {
  if (!address) {
    throw new Error("Please provide a valid address");
  }

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response?.data?.status === "OK") {
      const location = response?.data?.results[0]?.geometry.location;
      if (!location) {
        throw new Error("No location found for the given address");
      }
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error(
        response?.data?.error_message || "Unable to fetch coordinates"
      );
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDistanceTimeService = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Please provide the required fields");
  }

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response?.data?.status === "OK") {
      if (response?.data?.rows[0]?.elements[0]?.status === "ZERO_RESULTS") {
        throw new Error(response?.data?.error_message || "No routes found");
      }
      return response?.data?.rows[0]?.elements[0];
    } else {
      throw new Error(
        response?.data?.error_message || "Unable to fetch distance and time"
      );
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSuggestionsService = async (input) => {
  if (!input) {
    throw new Error("Query is required");
  }

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response?.data?.status === "OK") {
      return response?.data?.predictions;
    } else {
      throw new Error(
        response?.data?.error_message || "Unable to fetch suggestions"
      );
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
