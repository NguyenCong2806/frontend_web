import "./App.css";
import ButtonItem from "./components/buttoncontact/buttonitem";
// import CartMobile from "./components/mobile/cart-mobile";
// import MobileSidebar from "./components/mobile/mobile-sidebar";
import AdvertisingImageView from "./screens/advertisingimage/advertisingimageview";
import BannerBelowview from "./screens/bannerbelow/bannerbelowview";
import BoxImageView from "./screens/boximage/boximageview";
import FooterView from "./screens/footer/footerview";
import GalleryView from "./screens/gallery/galleryview";
import HeaderView from "./screens/header/header";
import ProductCategoryView from "./screens/products/productcategory";
import ProductsView from "./screens/products/productssalehot";
import SectionPromotionView from "./screens/sectionpromotion/sectionpromotionview";
import SliderView from "./screens/Slider/slider";
import TitelView from "./screens/titelmain/titelmain";
import Topheaderbar from "./screens/topheaderbar/top_header_bar";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="relative">
      <Topheaderbar />
      <HeaderView />
      <SliderView />
      <BannerBelowview />
      <SectionPromotionView />
      <AdvertisingImageView />
      <BoxImageView />
      <TitelView titel="SẢN PHẨM BÁN CHẠY" />
      <ProductsView />
      <TitelView titel="MÁY TÍNH ĐỂ BÀN" />
      <ProductCategoryView />
      <TitelView titel="LAPTOP GAME & ĐỒ HỌA" />
      <ProductCategoryView />
      <GalleryView />
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
