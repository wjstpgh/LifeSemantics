/* global kakao */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHospdata } from "../../store/hospdata/hospdata.select";
import { pickHosp } from "../../store/hosppick/hosppick.actions";
import { selectHosppick } from "../../store/hosppick/hosppick.selector";
import { getIw } from "../../utils/kakaomap/kakaomap.htmlElement";

const Marker = ({ map }) => {
  const dispatch = useDispatch();
  const hospToMarker = useSelector(selectHospdata);
  const hosppick = useSelector(selectHosppick);

  useEffect(() => {
    if (map !== null) {
      getMarker(hospToMarker, map);
    }
  }, [map, hosppick])

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
        dispatch(pickHosp(hosppick, hosp));
        infowindow.close(map, marker);
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
    <></>
  );
}

export default Marker;