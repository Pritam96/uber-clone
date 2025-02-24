const SearchPanel = ({ setInputPanel, setVehiclePanel }) => {
  const locations = [
    {
      id: "102",
      address: "AE-22, Sector 1, Salt Lake City, Kolkata-700064",
    },
    {
      id: "103",
      address: "57B, Ballygunge Circular Road, Ballygunge, Kolkata-700019",
    },
    {
      id: "104",
      address: "12, Park Street, Taltala, Kolkata-700016",
    },
    {
      id: "105",
      address: "21A, Prince Anwar Shah Road, Tollygunge, Kolkata-700033",
    },
  ];

  return (
    <div>
      {locations.map((location) => (
        <div
          key={location.id}
          className="flex items-center justify-start gap-4 mt-2 p-4 border-2 border-gray-300 active:border-gray-900 rounded-xl"
          onClick={() => {
            setInputPanel(false);
            setVehiclePanel(true);
          }}
        >
          <h1 className="bg-[#eee] w-[28px] h-[28px] p-2 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h1>
          <h4 className="font-medium">{location.address}</h4>
        </div>
      ))}
    </div>
  );
};

export default SearchPanel;
