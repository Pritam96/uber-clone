import { Link } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import uberMap from "../assets/uber-map.gif";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    gsap.to(finishRidePanelRef.current, {
      y: finishRidePanel ? 0 : "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [finishRidePanel]);

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
      <div className="h-4/5">
        <img src={uberMap} alt="map" className="h-full w-full object-cover" />
      </div>
      <div
        className="h-1/5 bg-yellow-400 relative"
        onClick={() => setFinishRidePanel(true)}
      >
        <h5 className="p-1 text-center text-gray-600">
          <i className="ri-arrow-up-wide-line text-3xl"></i>
        </h5>
        <div className="p-6 flex items-center justify-between">
          <h4 className="text-xl font-semibold">4 KM away</h4>
          <button
            className="bg-green-600 text-white font-semibold px-10 py-3 rounded-lg"
            onClick={() => setFinishRidePanel(true)}
          >
            Complete Ride
          </button>
        </div>
      </div>
      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white pb-6 translate-y-full"
        ref={finishRidePanelRef}
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
