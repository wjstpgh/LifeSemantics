/* global kakao */
import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.4),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    console.log('map success');
  }, []);

  return (
      
        <div id="map" style={{width:"500px", height:"400px"}}></div> 
      
  );
}

export default Map;