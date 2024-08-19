import Slider from "react-slick";
import ProductPromotion from "./productpromotion";

/* eslint-disable @typescript-eslint/no-unused-vars */
const SectionPromotion = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto md:mt-20">
      <div
        className="rounded-lg w-full md:h-[30rem] bg-center bg-no-repeat bg-cover
      bg-[url('https://maytinh3.maugiaodien.com/wp-content/themes/the-gioi-laptop/images/bg-flashsale.jpg')]"
      >
        <div className="inline">
          <div className="hidden lg:inline-block w-1/5 h-auto"></div>
          <div className="inline-block w-full lg:w-4/5 h-auto">
            <Slider {...settings}>
              <ProductPromotion />
              <ProductPromotion />
              <ProductPromotion />
              <ProductPromotion />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPromotion;
