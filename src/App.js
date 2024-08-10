import React from "react";
import MapComponent from "./MapComponent";

function App() {

  const handlePolygonComplete = (coordinates) => {
    console.log('Geofence Coordinates:', coordinates);
    // Here you can send the coordinates to your backend to save the geofence
  };


  return (
    <div>
      <h1>Geofacing with Google Maps</h1>
      <MapComponent onPolygonComplete={handlePolygonComplete} />
    </div>
  );
}

export default App;
