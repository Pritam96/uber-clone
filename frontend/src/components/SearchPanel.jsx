const SearchPanel = ({ setInputPanel, setVehiclePanel }) => {
  const locations = [
    {
      id: "101",
      title: "AE Market",
      address:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repellat qui nemo quo error obcaecati accusamus asperiores, maxime at amet, magnam iusto in consequuntur dolore eum beatae voluptates cupiditate tempora sunt quam sapiente! Aliquam ipsa quo quidem cumque. Aut alias eveniet fugit voluptas laudantium dolore rem incidunt esse harum fuga!",
    },
    {
      id: "102",
      title: "AE Market",
      address: "AE-22, Sector 1, Salt Lake City, Kolkata-700064",
    },
    {
      id: "103",
      title: "The Balcony",
      address: "57B, Ballygunge Circular Road, Ballygunge, Kolkata-700019",
    },
    {
      id: "104",
      title: "Park Street Social",
      address: "12, Park Street, Taltala, Kolkata-700016",
    },
    {
      id: "105",
      title: "South City Mall",
      address: "21A, Prince Anwar Shah Road, Tollygunge, Kolkata-700033",
    },
  ];

  return (
    <div>
      {locations.map((location) => (
        <div
          key={location.id}
          className="flex items-center justify-start gap-4 py-2 px-1 active:border-2 active:border-gray-900 rounded-xl"
          onClick={() => {
            setInputPanel(false);
            setVehiclePanel(true);
          }}
        >
          <h1 className="bg-[#eee] w-[28px] h-[28px] p-5 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h1>
          <div className="border-b-2 border-gray-100 pb-4 active:border-white">
            <h4 className="font-medium -mb-1">{location.title}</h4>
            <p className="text-gray-800 line-clamp-2 text-base font-semibold">
              {location.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPanel;
