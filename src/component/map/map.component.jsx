/* global kakao */
import { useEffect } from "react";
import { MapContainer } from './map.styles';
import React from "react";
import { getMap } from "../../utils/kakaomap/kakaomap.utils";
import { useSelector } from "react-redux";
import { selectHospdata } from "../../store/hospdata/hospdata.select";

const Map = () => {
  const hosps = useSelector(selectHospdata);

  useEffect(() => {
    // getMap();
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(126, 37),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <MapContainer id="map">
    </MapContainer>
  );
}

export default Map;