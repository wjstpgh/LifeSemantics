/* global kakao */
import { useEffect } from "react";
import { MapContainer } from './map.styles';
import React from "react";
import { getMap } from "../../utils/kakaomap/kakaomap.utils";
import { useDispatch, useSelector } from "react-redux";
import { selectHospdata } from "../../store/hospdata/hospdata.select";
import { getIw } from "../../utils/kakaomap/kakaomap.htmlElement";
import { selectHosppick } from "../../store/hosppick/hosppick.selector";
import { pickHosp } from "../../store/hosppick/hosppick.actions";

const Map = () => {
  const dispatch = useDispatch();
  const hospToMarker = useSelector(selectHospdata);
  const hosppick = useSelector(selectHosppick);

  useEffect(() => {
    const map = getMap();
    getMarker(hospToMarker, map);
  }, [hosppick]);

  const getMarker = (arr, map) => {
    arr.map((hosp) => {
      const { XPos, YPos } = hosp;
      const position = new kakao.maps.LatLng(YPos, XPos);

      const marker = new kakao.maps.Marker({
        position: position,
        clickable: true
      });

      marker.setMap(map);

      const iwContent = getIw(hosp, false);

      let btn = document.createElement("button")
      btn.textContent = '저장'
      btn.style.border = 'none';
      btn.style.borderRadius = 2 + 'px';
      btn.style.backgroundColor = 'black';
      btn.style.color = 'white';
      btn.style.float = 'right';
      btn.style.padding = `${2}px ${4}px`;
      btn.style.cursor = 'pointer';

      const pick = () => {
        dispatch(pickHosp(hosppick, hosp))
      }
      btn.onclick = pick;

      iwContent.append(
        btn
      )

      const iwHoverContent = getIw(hosp, true);

      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: false
      });

      const infohoverwindow = new kakao.maps.InfoWindow({
        content: iwHoverContent,
        removable: false
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        infowindow.open(map, marker);
      });

      kakao.maps.event.addListener(map, 'dragstart', () => {
        infowindow.close(map, marker);
      });

      kakao.maps.event.addListener(marker, 'mouseover', () => {
        infohoverwindow.open(map, marker);
      });

      kakao.maps.event.addListener(marker, 'mouseout', () => {
        infohoverwindow.close(map, marker);
      });
    })
  }

  return (
    <MapContainer id="map" />
  );
}

export default Map;