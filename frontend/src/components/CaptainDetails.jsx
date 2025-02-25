import uberCaptain from "../assets/uber-driver.jpg";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            src={uberCaptain}
            alt="uber-driver"
            className="h-12 w-12 rounded-full object-cover"
          />
          <h4 className="text-lg font-medium">Harsh Patel</h4>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-semibold">&#x20B9;295.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex justify-center gap-5 items-start p-3 mt-8 bg-gray-100 rounded-xl">
        <div className="text-center">
          <i className="ri-time-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-fill text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-bill-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
