import { Link } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import uberMap from "../assets/uber-map.gif";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);

  useGSAP(() => {
    gsap.to(ridePopUpPanelRef.current, {
      y: ridePopUpPanel ? 0 : "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [ridePopUpPanel]);

  useGSAP(() => {
    gsap.to(confirmRidePopUpPanelRef.current, {
      y: confirmRidePopUpPanel ? 0 : "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [confirmRidePopUpPanel]);

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="fixed w-full p-6 flex items-center justify-between">
        <img className="w-16" src={uberLogo} alt="uber-logo" />
        <Link
          to="/captain"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img src={uberMap} alt="map" className="h-full w-full object-cover" />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white pb-6 translate-y-full"
        ref={ridePopUpPanelRef}
      >
        <RidePopUp
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        />
      </div>
      <div
        className="fixed h-screen z-10 bottom-0 w-full px-3 bg-white pb-6 translate-y-full"
        ref={confirmRidePopUpPanelRef}
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
