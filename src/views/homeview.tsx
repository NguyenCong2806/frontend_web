import AdvertisingImageView from "../screens/advertisingimage/advertisingimageview";
import BannerBelowview from "../screens/bannerbelow/bannerbelowview";
import BoxImageView from "../screens/boximage/boximageview";
import GalleryView from "../screens/gallery/galleryview";
import ProductCategoryView from "../screens/products/productcategory";
import ProductsView from "../screens/products/productssalehot";
import SectionPromotionView from "../screens/sectionpromotion/sectionpromotionview";
import SliderView from "../screens/Slider/slider";
import TitelView from "../screens/titelmain/titelmain";

const HomeView = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomeView;
