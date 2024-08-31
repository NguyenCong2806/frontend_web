import "./App.css";
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

function App() {
  return (
    <div>
      <Topheaderbar />
      <HeaderView />
      <SliderView />
      <BannerBelowview/>
      <SectionPromotionView/>
      <AdvertisingImageView/>
      <BoxImageView/>
      <TitelView titel="SẢN PHẨM BÁN CHẠY"/>
      <ProductsView/>
      <TitelView titel="MÁY TÍNH ĐỂ BÀN"/>
      <ProductCategoryView/>
      <TitelView titel="LAPTOP GAME & ĐỒ HỌA"/>
      <ProductCategoryView/>
      <GalleryView/>
      <FooterView/>
    </div>
  );
}

export default App;
