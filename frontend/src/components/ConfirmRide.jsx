import uberCar from "../assets/uber-car.webp";
import uberMoto from "../assets/uber-moto.webp";
import uberAuto from "../assets/uber-auto.webp";

const ConfirmRide = ({
  formData,
  createRide,
  setVehiclePanel,
  setConfirmRidePanel,
  setVehicleFoundPanel,
}) => {
  // Map vehicle type to the correct image
  const vehicleImages = {
    car: uberCar,
    moto: uberMoto,
    auto: uberAuto,
  };

  // Get the correct image based on the selected vehicle type
  const vehicleImage = vehicleImages[formData?.vehicleType] || uberCar;

  // Get the fare for the selected vehicle type
  const fare = formData?.fareData?.[formData?.vehicleType] || 0;

  return (
    <>
      {/* Back button to return to the vehicle panel */}
      <h5
        className="p-1 text-center text-gray-300 cursor-pointer"
        onClick={() => {
          setConfirmRidePanel(false);
          setVehiclePanel(true);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </h5>

      {/* Confirm ride heading */}
      <h3 className="text-2xl font-semibold mb-5 text-center">
        Confirm your ride
      </h3>

      {/* Ride details */}
      <div className="flex flex-col gap-2 items-center justify-center">
        {/* Vehicle image */}
        <img
          src={vehicleImage}
          alt={`uber-${formData?.vehicleType || "vehicle"}`}
          className="h-24"
        />

        {/* Pickup location */}
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-map-pin-range-fill text-lg"></i>
            <div>
              <h3 className="font-bold text-lg">
                {formData?.pickup?.structured_formatting?.main_text ||
                  "Pickup location"}
              </h3>
              <p className="text-[16px] tracking-tight text-gray-600">
                {formData?.pickup?.structured_formatting?.secondary_text || ""}
              </p>
            </div>
          </div>

          {/* Destination location */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="font-bold text-lg">
                {formData?.destination?.structured_formatting?.main_text ||
                  "Destination location"}
              </h3>
              <p className="text-[16px] tracking-tight text-gray-600">
                {formData?.destination?.structured_formatting?.secondary_text ||
                  ""}
              </p>
            </div>
          </div>

          {/* Fare and payment details */}
          <div className="flex items-center gap-5 p-3">
            <i className="ri-bank-card-2-fill text-lg"></i>
            <div>
              <h3 className="font-bold text-lg">&#x20B9;{fare}</h3>
              <p className="text-[16px] tracking-tight text-gray-600">
                Cash Payment
              </p>
            </div>
          </div>
        </div>

        {/* Confirm button */}
        <button
          className="w-full mt-5 bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          onClick={() => {
            createRide(); // Create the ride
            setConfirmRidePanel(false); // Close the confirm ride panel
            setVehicleFoundPanel(true); // Open the vehicle found panel
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default ConfirmRide;
