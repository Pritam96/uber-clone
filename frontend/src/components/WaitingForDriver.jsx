const WaitingForDriver = ({ setWaitingForDriverPanel }) => {
  return (
    <>
      <h5 className="p-1 text-center text-gray-300" onClick={() => setWaitingForDriverPanel(false)}>
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </h5>
      <div className="flex items-center justify-between px-3">
        <img src="src/assets/uber-car.webp" alt="uber-car" className="h-12" />
        <div className="text-right">
          <h2 className="text-lg font-medium">JOHN</h2>
          <h4 className="text-xl font-bold -mt-1">KA15AK00-0</h4>
          <p className="text-sm text-gray-600">White Maruti Suzuki Swift</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
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

export default WaitingForDriver;
