import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const dojoLocations = [
  { name: "Dojo A", lat: 48.8566, lng: 2.3522 },
  { name: "Dojo B", lat: 51.5074, lng: -0.1278 },
  { name: "Dojo C", lat: 40.7128, lng: -74.006 },
];

const DojoMap: React.FC = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.warn("Error fetching user location:", error);
        setUserLocation([48.8566, 2.3522]);
      }
    );
  }, []);

  return (
    <div className="bg-light min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Find Dojos Near You
      </h1>

      <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
        {userLocation ? (
          <MapContainer
            center={userLocation}
            zoom={10}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={userLocation}>
              <Popup>
                <strong>You are here</strong>
              </Popup>
            </Marker>

            {/* Marqueurs des dojos */}
            {dojoLocations.map((dojo, index) => (
              <Marker key={index} position={[dojo.lat, dojo.lng]}>
                <Popup>
                  <strong>{dojo.name}</strong>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <p className="text-center text-dark">Loading your location...</p>
        )}
      </div>
    </div>
  );
};

export default DojoMap;
