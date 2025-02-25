import { useRef, useState } from "react";
import uberLogo from "../assets/uber-logo.png";
import uberMap from "../assets/uber-map.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SearchPanel from "../components/SearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const UserHome = () => {
  const [formData, setFormData] = useState({ pickup: "", destination: "" });
  const [inputPanel, setInputPanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFoundPanel, setVehicleFoundPanel] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);

  const searchPanelRef = useRef(null);
  const inputPanelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  useGSAP(() => {
    gsap.to(searchPanelRef.current, {
      height: inputPanel ? "70%" : "0%",
      duration: 0.3,
      padding: inputPanel ? 24 : 0,
    });
    gsap.to(inputPanelRef.current, {
      opacity: inputPanel ? 1 : 0,
      duration: 0.2,
    });
  }, [inputPanel]);

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      y: vehiclePanel ? 0 : "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [vehiclePanel]);

  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      y: confirmRidePanel ? 0 : "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [confirmRidePanel]);

  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      y: vehicleFoundPanel ? 0 : "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [vehicleFoundPanel]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      y: waitingForDriverPanel ? 0 : "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [waitingForDriverPanel]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => e.preventDefault();

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-7 top-7"
        src={uberLogo}
        alt="uber-logo"
      />
      <div className="h-screen w-screen">
        <img src={uberMap} alt="map" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white px-6 py-6 relative">
          <h5
            className="absolute right-6 top-3 text-2xl opacity-0 cursor-pointer"
            onClick={() => setInputPanel(false)}
            ref={inputPanelRef}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="relative flex flex-col items-center w-full">
              {/* Line connecting pickup and destination */}
              <div className="h-[42px] w-0.5 bg-gray-800 absolute top-[46px] left-[20px] z-10"></div>

              {/* Pickup location */}
              <div className="relative w-full mt-3">
                <i className="ri-record-circle-fill absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 text-[10px]"></i>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  onClick={() => setInputPanel(true)}
                  className="w-full bg-[#eee] px-14 py-3 text-base font-medium rounded-lg"
                  placeholder="Add a pick-up location"
                />
              </div>

              {/* Destination input */}
              <div className="relative w-full mt-3">
                <i className="ri-square-fill absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 text-[10px]"></i>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  onClick={() => setInputPanel(true)}
                  className="w-full bg-[#eee] px-14 py-3 text-base font-medium rounded-lg"
                  placeholder="Enter your destination"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white h-0" ref={searchPanelRef}>
          <SearchPanel
            {...{
              setInputPanel,
              setVehiclePanel,
            }}
          />
        </div>
      </div>
      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white translate-y-full pb-10"
        ref={vehiclePanelRef}
      >
        <VehiclePanel
          {...{
            setVehiclePanel,
            setConfirmRidePanel,
          }}
        />
      </div>
      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white translate-y-full pb-6"
        ref={confirmRidePanelRef}
      >
        <ConfirmRide
          {...{
            setVehiclePanel,
            setConfirmRidePanel,
            setVehicleFoundPanel,
          }}
        />
      </div>
      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white translate-y-full pb-6"
        ref={vehicleFoundRef}
      >
        <LookingForDriver
          {...{
            setInputPanel,
            setVehiclePanel,
            setConfirmRidePanel,
            setVehicleFoundPanel,
          }}
        />
      </div>

      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white translate-y-full pb-6"
        ref={waitingForDriverRef}
      >
        <WaitingForDriver
          {...{
            setVehicleFoundPanel,
            waitingForDriverPanel,
            setWaitingForDriverPanel,
          }}
        />
      </div>
    </div>
  );
};

export default UserHome;
