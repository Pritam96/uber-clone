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
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const UserHome = () => {
  const [formData, setFormData] = useState({
    pickup: {},
    destination: {},
    fareData: {},
    vehicleType: "",
  });

  console.log(formData);

  const [inputPanel, setInputPanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFoundPanel, setVehicleFoundPanel] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [rideData, setRideData] = useState({});

  const searchPanelRef = useRef(null);
  const inputPanelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const token = localStorage.getItem("token");

  // Timeout reference for debouncing
  const timeoutRef = useRef(null);

  // Fetch suggestions
  const getSuggestions = async (keyword) => {
    try {
      const response = await axios.get(`${baseURL}/maps/suggestions`, {
        params: { input: keyword },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        return [];
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Handle input change with debouncing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { ...prevFormData[name], description: value }, // Update the description field
    }));

    // Clear the previous timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to call the API after 500ms of inactivity
    timeoutRef.current = setTimeout(async () => {
      if (value.length > 2) {
        const suggestions = await getSuggestions(value);
        if (name === "pickup") {
          setPickupSuggestions(suggestions);
        } else if (name === "destination") {
          setDestinationSuggestions(suggestions);
        }
      } else {
        // Clear suggestions if the input is too short
        if (name === "pickup") {
          setPickupSuggestions([]);
        } else if (name === "destination") {
          setDestinationSuggestions([]);
        }
      }
    }, 500); // 500ms delay
  };

  // Handle suggestion selection
  const handleSuggestionClick = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // Update the full object for pickup or destination
    }));

    if (name === "pickup") {
      setPickupSuggestions([]); // Clear pickup suggestions
    } else if (name === "destination") {
      setDestinationSuggestions([]); // Clear destination suggestions
    }
  };

  // GSAP animations
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

  // Submit handler to calculate fare
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${baseURL}/rides/fare`, {
        params: {
          pickup: formData.pickup.description, // Use the description field for pickup
          destination: formData.destination.description, // Use the description field for destination
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const fare = {
          car: response.data.car,
          auto: response.data.auto,
          moto: response.data.motorcycle,
        };

        setFormData((prevFormData) => ({
          ...prevFormData,
          fareData: fare, // Update fareData in formData
        }));

        setInputPanel(false); // Close the input panel
        setVehiclePanel(true); // Open the vehicle panel
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Create ride handler
  const createRide = async () => {
    if (!formData.pickup || !formData.destination || !formData.vehicleType)
      return;

    try {
      const response = await axios.post(
        `${baseURL}/rides/create`,
        {
          pickup: formData.pickup.description, // Use the description field for pickup
          destination: formData.destination.description, // Use the description field for destination
          vehicleType:
            formData.vehicleType === "moto"
              ? "motorcycle"
              : formData.vehicleType, // Use the selected vehicle type
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        console.log(response?.data);
        setRideData(response?.data); // Store the ride data
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            onClick={() => setInputPanel(false)} // Close the input panel
            ref={inputPanelRef}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler} autoComplete="off">
            <div className="relative flex flex-col items-center w-full">
              {/* Line connecting pickup and destination */}
              <div className="h-[42px] w-0.5 bg-gray-800 absolute top-[46px] left-[20px] z-10"></div>

              {/* Pickup location */}
              <div className="relative w-full mt-3">
                <i className="ri-record-circle-fill absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 text-[10px]"></i>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup.description || ""} // Use the description field
                  onChange={handleChange}
                  onClick={() => setInputPanel(true)} // Open the input panel
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
                  value={formData.destination.description || ""} // Use the description field
                  onChange={handleChange}
                  onClick={() => setInputPanel(true)} // Open the input panel
                  className="w-full bg-[#eee] px-14 py-3 text-base font-medium rounded-lg"
                  placeholder="Enter your destination"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 mt-5 rounded"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="bg-white h-0 overflow-y-scroll" ref={searchPanelRef}>
          {pickupSuggestions.length > 0 && (
            <SearchPanel
              locationType="pickup"
              suggestions={pickupSuggestions}
              handleSuggestionClick={handleSuggestionClick}
              setInputPanel={setInputPanel}
              setVehiclePanel={setVehiclePanel}
            />
          )}

          {destinationSuggestions.length > 0 && (
            <SearchPanel
              locationType="destination"
              suggestions={destinationSuggestions}
              handleSuggestionClick={handleSuggestionClick}
              setInputPanel={setInputPanel}
              setVehiclePanel={setVehiclePanel}
            />
          )}
        </div>
      </div>
      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white translate-y-full pb-10"
        ref={vehiclePanelRef}
      >
        <VehiclePanel
          fareData={formData.fareData} // Pass fareData from formData
          setVehicleType={(vehicleType) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              vehicleType, // Update vehicleType in formData
            }))
          }
          setInputPanel={setInputPanel}
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white translate-y-full pb-6"
        ref={confirmRidePanelRef}
      >
        <ConfirmRide
          formData={formData}
          createRide={createRide}
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFoundPanel={setVehicleFoundPanel}
        />
      </div>
      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white translate-y-full pb-6"
        ref={vehicleFoundRef}
      >
        <LookingForDriver
          setInputPanel={setInputPanel}
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFoundPanel={setVehicleFoundPanel}
        />
      </div>

      <div
        className="fixed z-10 bottom-0 w-full px-3 bg-white translate-y-full pb-6"
        ref={waitingForDriverRef}
      >
        <WaitingForDriver
          setVehicleFoundPanel={setVehicleFoundPanel}
          waitingForDriverPanel={waitingForDriverPanel}
          setWaitingForDriverPanel={setWaitingForDriverPanel}
        />
      </div>
    </div>
  );
};

export default UserHome;
