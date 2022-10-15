/* global kakao */
import { useEffect } from "react";
import { MapContainer } from './map.styles';
import React from "react";

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.4),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <MapContainer id="map" />
  );
}

export default Map;