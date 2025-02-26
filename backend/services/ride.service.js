import crypto from "crypto";
import { getDistanceTimeService } from "./maps.service.js";
import rideModel from "../models/ride.model.js";

const baseFare = {
  auto: 30,
  car: 50,
  motorcycle: 20,
};

const perKmRate = {
  auto: 10,
  car: 15,
  motorcycle: 8,
};

const perMinuteRate = {
  auto: 2,
  car: 3,
  motorcycle: 1.5,
};

const calculateFare = (vehicleType, distance, time) => {
  return (
    baseFare[vehicleType] +
    perKmRate[vehicleType] * distance +
    perMinuteRate[vehicleType] * time
  );
};

const getFare = async (pickup, destination) => {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  try {
    const distanceTime = await getDistanceTimeService(pickup, destination);

    console.log(distanceTime);

    // Convert distance (meters to km) and duration (seconds to minutes)
    const distanceInKm = distanceTime.distance.value / 1000;
    const durationInMinutes = distanceTime.duration.value / 60;

    const fare = {
      auto: calculateFare("auto", distanceInKm, durationInMinutes),
      car: calculateFare("car", distanceInKm, durationInMinutes),
      motorcycle: calculateFare("motorcycle", distanceInKm, durationInMinutes),
    };

    return fare;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getOtp = (num) => {
  return crypto.randomInt(10 ** (num - 1), 10 ** num).toString();
};

export const createRideService = async (
  userId,
  pickup,
  destination,
  vehicleType
) => {
  if (!userId || !pickup || !destination || !vehicleType) {
    throw new Error("Please provide the required fields");
  }

  try {
    const fareData = await getFare(pickup, destination);

    console.log(fareData);

    const ride = await rideModel.create({
      user: userId,
      pickup,
      destination,
      vehicleType,
      fare: fareData[vehicleType],
      otp: getOtp(6),
    });

    return {
      id: ride._id,
      user: ride.user,
      pickup: ride.pickup,
      destination: ride.destination,
      fare: ride.fare,
      otp: ride.otp,
      status: ride.status,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
