import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Map = ({ searchResults }) => {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  
  console.log(Marker);

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/barbarian024/cl9bd4q1j000614o3knolmbpm"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className="cursor-pointer animate-bounce text-6xl">📌</p>
          </Marker>
        </div>
      ))}
    </ReactMapGl>
  );
};

export default Map;
