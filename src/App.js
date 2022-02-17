import * as React from "react";
import Map from "react-map-gl";

function App() {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoidXdjcmltZXByb2oiLCJhIjoiY2t6bTFkZDN6NWFsdjJ3bmZ4a2NmbXlubSJ9.1pwVJwC-7gUlhp0j6jQoZw"
    />
  );
}

export default App;
