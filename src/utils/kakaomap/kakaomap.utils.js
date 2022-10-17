import Marker from "../../component/marker/marker.components";
import React from "react";

export const getMap = (hospToMarker) => {
  const container = document.getElementById("map");

  let options = {
    center: new window.kakao.maps.LatLng(126, 37),
    level: 3,
  };

  let map = new window.kakao.maps.Map(container, options);

  getMarker(hospToMarker, map);
  return map;
}

const getMarker = (arr, map) => {
  arr.map((hosp) => {
    const { XPos, YPos } = hosp;
    const position = new window.kakao.maps.LatLng(XPos, YPos);

    const marker = new window.kakao.maps.Marker({
      position: position,
      clickable: true
    });

    marker.setMap(map);

    const iwContent = <Marker hosp={hosp} />
    const iwRemoveable = true;

    const infowindow = new window.kakao.maps.infowindow({
      content: iwContent,
      removable: iwRemoveable
    });

    window.kakao.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker);
    })
  })
}