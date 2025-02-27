const SearchPanel = ({
  locationType,
  suggestions = [],
  handleSuggestionClick,
  setInputPanel,
  setVehiclePanel,
}) => {
  return (
    <div>
      {suggestions?.map((location) => (
        <div
          key={location.place_id}
          className="flex items-center justify-start gap-4 py-2 px-1 active:border-2 active:border-gray-900 rounded-xl cursor-pointer hover:bg-gray-100"
          onClick={() => {
            handleSuggestionClick(locationType, location); // Pass LocationType and location
            setInputPanel(false); // Close the input panel
            setVehiclePanel(true); // Open the vehicle panel
          }}
        >
          {/* Location Icon */}
          <div className="bg-[#eee] w-[28px] h-[28px] p-5 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill text-gray-600"></i>
          </div>

          {/* Location Details */}
          <div className="border-b-2 border-gray-100 pb-4 w-full">
            {/* Main Text (e.g., "Baguiati Flyover") */}
            <h4 className="font-medium">
              {location.structured_formatting?.main_text ||
                location.description}
            </h4>

            {/* Secondary Text (e.g., "Prafulla Kanan, Kestopur, Kolkata...") */}
            <p className="text-gray-600 text-sm line-clamp-2">
              {location.structured_formatting?.secondary_text || ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPanel;
