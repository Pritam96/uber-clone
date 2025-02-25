import uberCar from "../assets/uber-car.webp";
const LookingForDriver = ({ setVehicleFoundPanel }) => {
  return (
    <>
      <h5
        className="p-1 text-center text-gray-300"
        onClick={() => {
          setVehicleFoundPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-center">
        Looking for nearby drivers
      </h3>
      <div className="flex flex-col gap-2 items-center justify-center">
        <img src={uberCar} alt="uber-car" className="h-24" />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-map-pin-range-fill text-lg"></i>
            <div>
              <h3 className="font-bold text-lg">562/11-A</h3>
              <p className="text-[16px] tracking-tight text-gray-600">
                Kaikondrahalli, Bengaluru, Karanataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="font-bold text-lg">Third Wave Coffee</h3>
              <p className="text-[16px] tracking-tight text-gray-600">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-bank-card-2-fill text-lg"></i>
            <div>
              <h3 className="font-bold text-lg">&#x20B9;193.20</h3>
              <p className="text-[16px] tracking-tight text-gray-600">
                Cash Payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LookingForDriver;
