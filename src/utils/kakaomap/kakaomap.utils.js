

export const getMap = () => {
  const container = document.getElementById("map");

  let options = {
    center: new window.kakao.maps.LatLng(126, 37),
    level: 3,
  };

  let map = new window.kakao.maps.Map(container, options);
  return map;
}