const VehiclePanel = ({ setVehiclePanel, setConfirmRidePanel }) => {
  return (
    <>
      <h5
        className="p-1 text-center text-gray-300"
        onClick={() => {
          setVehiclePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a ride</h3>

      <div
        className="w-full flex items-center justify-between p-3 mb-3 border-2 border-gray-300 active:border-gray-900 rounded-xl"
        onClick={() => setConfirmRidePanel(true)}
      >
        <img src="src/assets/uber-car.webp" alt="uber-car" className="w-20" />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">
          <span>&#x20B9;</span>193.20
        </h2>
      </div>

      <div
        className="w-full flex items-center justify-between p-3 mb-3 border-2 border-gray-300 active:border-gray-900 rounded-xl"
        onClick={() => setConfirmRidePanel(true)}
      >
        <img src="src/assets/uber-moto.webp" alt="uber-moto" className="w-20" />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-fill text-md"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">
          <span>&#x20B9;</span>65.17
        </h2>
      </div>

      <div
        className="w-full flex items-center justify-between p-3 mb-3 border-2 border-gray-300 active:border-gray-900 rounded-xl"
        onClick={() => setConfirmRidePanel(true)}
      >
        <img src="src/assets/uber-auto.webp" alt="uber-auto" className="w-20" />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill text-md"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Uber Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">
          <span>&#x20B9;</span>120.20
        </h2>
      </div>
    </>
  );
};

export default VehiclePanel;
