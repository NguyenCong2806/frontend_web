import "./App.css";
import HeaderView from "./screens/header/header";
import SliderView from "./screens/Slider/slider";
import Topheaderbar from "./screens/topheaderbar/top_header_bar";

function App() {
  return (
    <div>
      <Topheaderbar />
      <HeaderView />
      <SliderView />
    </div>
  );
}

export default App;
