import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "60vh",
    width: "100%",
    borderRadius: "1rem",
  };

  const defaultCenter = {
    lat: -34.397,
    lng: 150.644,
  };

  const markerPosition = {
    lat: 25.7617, // Latitude for the marker
    lng: -80.1918, // Longitude for the marker
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCozPNxR_UZ2734eYbwJgu3kX8J6dLTtHU">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
        className="lg:w-50%"
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
