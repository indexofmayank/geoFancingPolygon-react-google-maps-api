import React from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 28.7041, // Example latitude
  lng: 77.1025, // Example longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyChe49SyZJZYPXiyZEey4mvgqxO1lagIqQ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Circle />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
