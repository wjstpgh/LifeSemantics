import FloatBar from "./component/floatbar/floatbar.component";
import Map from "./component/map/map.component";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHospdataStart } from "./store/hospdata/hospdata.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHospdataStart());
  }, [])

  return (
    <>
      <Map />
      <FloatBar />
    </>
  );
}

export default App;
