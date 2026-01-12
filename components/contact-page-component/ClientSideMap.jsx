"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { FiSearch } from "react-icons/fi";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapWithSearch = ({ position, setPosition }) => {
  const map = useMap();
  const [searchQuery, setSearchQuery] = useState("");
  const provider = new OpenStreetMapProvider();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    const results = await provider.search({ query: searchQuery });
    if (results.length > 0) {
      const { x: lng, y: lat } = results[0];
      setPosition([lat, lng]);
      map.flyTo([lat, lng], 16);
    }
  };

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control leaflet-bar p-2 bg-white rounded-lg shadow-lg border border-[#00f0ff]/20">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location..."
            className="px-3 py-1 w-48 bg-white border-1 text-black rounded-l focus:outline-none focus:ring-2 focus:ring-[#00f0ff] placeholder-[#b0b0ff]/50"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white px-4 py-2 rounded-r hover:opacity-90 transition-all"
          >
            <FiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

const ClientSideMap = ({ position, setPosition, officeAddress }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-96 w-full bg-[#0e0e15] flex items-center justify-center rounded-lg">
        <p className="text-[#b0b0ff]">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="h-96 w-full relative">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="font-medium">
              <h3 className="text-[#00f0ff] font-bold mb-1">Our Office</h3>
              <p className="text-gray-700">{officeAddress}</p>
            </div>
          </Popup>
        </Marker>
        <MapWithSearch position={position} setPosition={setPosition} />
      </MapContainer>
    </div>
  );
};

export default ClientSideMap;