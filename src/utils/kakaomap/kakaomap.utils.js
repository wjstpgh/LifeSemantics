/* global kakao */
export const getMap = () => {
  const container = document.getElementById("map");

  let options = {
    center: new kakao.maps.LatLng(36.988094179528, 127.92606617289),
    level: 12,
  };

  let map = new kakao.maps.Map(container, options);

  return map;
}