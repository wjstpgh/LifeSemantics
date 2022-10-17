/* global kakao */
import { useEffect } from "react";
import { MapContainer } from './map.styles';
import React from "react";
import { getMap } from "../../utils/kakaomap/kakaomap.utils";
import { useSelector } from "react-redux";
import { selectHospdata } from "../../store/hospdata/hospdata.select";
import HospPick from "../hosp-pick/hosp-pick.component";

const Map = () => {
  const hosps = useSelector(selectHospdata);

  useEffect(() => {
    // getMap();
  }, []);

  return (
    <MapContainer id="map">
      {hosps.map((hosp) => (
        <HospPick key={hosp.id} hosp={hosp} />
      ))}
    </MapContainer>
  );
}

export default Map;