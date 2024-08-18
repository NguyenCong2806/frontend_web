import "./App.css";
import BannerBelowview from "./screens/bannerbelow/bannerbelowview";
import HeaderView from "./screens/header/header";
import SliderView from "./screens/Slider/slider";
import Topheaderbar from "./screens/topheaderbar/top_header_bar";

function App() {
  return (
    <div>
      <Topheaderbar />
      <HeaderView />
      <SliderView />
      <BannerBelowview/>
    </div>
  );
}

export default App;
