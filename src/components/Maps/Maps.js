import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./map.css";

const Maps = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: -19.92422617157198,
    lng: -44.073141347230525,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Maps;
