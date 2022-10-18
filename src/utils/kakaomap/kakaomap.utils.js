/* global kakao */
import Marker from "../../component/marker/marker.components";
import React from "react";

export const getMap = (hospToMarker) => {
  const container = document.getElementById("map");

  let options = {
    center: new kakao.maps.LatLng(36.988094179528, 127.92606617289),
    level: 12,
  };

  let map = new kakao.maps.Map(container, options);

  getMarker(hospToMarker, map);
  return map;
}

const getMarker = (arr, map) => {
  const iwContent = '<div>제형 바버바버바버</div>'
  const iwRemoveable = false;

  arr.map((hosp) => {
    const { XPos, YPos } = hosp;
    const position = new kakao.maps.LatLng(YPos, XPos);

    const marker = new kakao.maps.Marker({
      position: position,
      clickable: true
    });

    marker.setMap(map);

    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable
    });

    kakao.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker);
    });

    kakao.maps.event.addListener(map, 'dragstart', () => {
      infowindow.close(map, marker);
    });

    // kakao.maps.event.addListener(marker, 'mouseover',()=>{

    // })
  })
  console.log(<Marker />)
}