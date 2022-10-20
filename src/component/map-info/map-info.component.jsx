import React, { useEffect, useState } from "react";
import { MapInfoContainer } from './map-info.styles';

const MapInfo = ({ map }) => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [pos, setPos] = useState();

  useEffect(() => {
    if (map !== null) {
      const center = map.getCenter();
      setPos(center);
      setLng(center.getLng());
      setLat(center.getLat());
    }
  }, [map, pos])

  return (
    <MapInfoContainer>
      <p>xpos : {lat}</p>
      <p>ypos : {lng}</p>
    </MapInfoContainer>
  )
}

export default MapInfo;