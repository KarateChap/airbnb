import { useState } from "react";
import ReactMapGl from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/barbarian024/cl9bd4q1j000614o3knolmbpm"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport => setViewport(nextViewport))}
      isPanning
    ></ReactMapGl>
  );
};

export default Map;
