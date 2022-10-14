import Map from "./component/map.component";

const App = () => {
  console.log(process.env.KAKAO_APP_JS_KEY);
  return (
    <>
      <Map />
      
    </>
  );
}

export default App;
