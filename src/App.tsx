import { Outlet } from "react-router-dom";
import "./App.css";
import ButtonItem from "./components/buttoncontact/buttonitem";
import FooterView from "./screens/footer/footerview";
import HeaderView from "./screens/header/header";
import Topheaderbar from "./screens/topheaderbar/top_header_bar";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="relative">
      <Topheaderbar />
      <HeaderView />
      <Outlet />
      <FooterView />
      {/* <MobileSidebar/> */}
      {/* <CartMobile/> */}
      <ScrollToTop
        smooth
        component={
          <p style={{ color: "blue" }}>
            <i className="fas fa-arrow-up"></i>
          </p>
        }
      />
      <ButtonItem />
    </div>
  );
}

export default App;
