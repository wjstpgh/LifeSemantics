import { useEffect, useState } from "react";
import { MapContainer } from './map.styles';
import React from "react";
import { getMap } from "../../utils/kakaomap/kakaomap.utils";
import Marker from "../marker/marker.component";
import MapInfo from "../map-info/map-info.component";

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const map = getMap();
    setMap(map);
  }, []);

  return (
    <MapContainer id="map">
      <Marker map={map} />
      <MapInfo map={map} />
    </MapContainer>
  );
}

export default Map;