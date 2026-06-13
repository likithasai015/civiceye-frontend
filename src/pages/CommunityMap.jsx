import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function CommunityMap() {
  return (
    <div className="min-h-screen bg-slate-50 py-10">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Community Map
      </h1>

      <div className="max-w-6xl mx-auto">

        <MapContainer
          center={[12.9716, 77.5946]}
          zoom={13}
          style={{ height: "600px", width: "100%" }}
          className="rounded-3xl shadow-lg"
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[12.9716, 77.5946]}>
            <Popup>
              🚧 Pothole Reported
            </Popup>
          </Marker>

          <Marker position={[12.9816, 77.6046]}>
            <Popup>
              🗑️ Garbage Overflow
            </Popup>
          </Marker>

        </MapContainer>

      </div>

    </div>
  );
}

export default CommunityMap;