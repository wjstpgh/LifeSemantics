/* global kakao */
export const getMap = () => {
  const container = document.getElementById("map");

  let options = {
    center: new window.kakao.maps.LatLng(36.988094179528, 127.92606617289),
    level: 6,
  };

  let map = new window.kakao.maps.Map(container, options);

  kakao.maps.event.addListener(map, 'center_changed', () => {

  })

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let x = position.coords.latitude;
      let y = position.coords.longitude;

      const markerImg = nowPosMarkImg();

      displayMarker(x, y, map, markerImg);

      let locPosition = new window.kakao.maps.LatLng(x, y);
      map.setCenter(locPosition);
    })
  }
  return map;
}

export const displayMarker = (x, y, map, markerImg) => {
  let locPosition = new window.kakao.maps.LatLng(x, y);

  new window.kakao.maps.Marker({
    map: map,
    position: locPosition,
    image: markerImg,
  });
}

export const nowPosMarkImg = () => {
  const imgSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
  const imgSize = new window.kakao.maps.Size(30, 40);
  const imgOption = { offset: new window.kakao.maps.Point(15, 69) };

  const markerImg = new window.kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);

  return markerImg;
}

export const centerFlagMarkImg = () => {
  const imgSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
  const imgSize = new window.kakao.maps.Size(30, 40);
  const imgOption = { offset: new window.kakao.maps.Point(15, 69) };

  const markerImg = new window.kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);

  return markerImg;
}