import { useEffect } from "react";
import { MapContainer } from './map.styles';
import React from "react";
import { getMap } from "../../utils/kakaomap/kakaomap.utils";
import { useSelector } from "react-redux";
import { selectHospdata } from "../../store/hospdata/hospdata.select";

const Map = () => {
  const hospToMarker = useSelector(selectHospdata);

  useEffect(() => {
    getMap(hospToMarker);
  }, []);

  return (
    <MapContainer id="map" />
  );
}

export default Map;