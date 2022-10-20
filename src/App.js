import FloatBar from "./component/floatbar/floatbar.component";
import Map from "./component/map/map.component";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHospdataStart } from "./store/hospdata/hospdata.action";
import './App.css'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHospdataStart());
  }, [])

  return (
    <>
      <Map />
      <FloatBar />
      <img className="flag" src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png" />
    </>
  );
}

export default App;
