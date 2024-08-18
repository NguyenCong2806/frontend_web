/* eslint-disable @typescript-eslint/no-unused-vars */
import Slider from "react-slick";
const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="slider-container">
      <div className="overflow-hidden">
        <Slider {...settings}>
          <div className="inline-block">
            <img
              className="w-full p-0 m-0"
              src="https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/da847659ea7719294066.jpg"
            ></img>
          </div>
          <div className=" inline-block">
            <img
              className=" w-full  p-0 m-0"
              src="https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/5fbeded852f6a1a8f8e7.jpg"
            ></img>
          </div>
          <div className=" inline-block">
            <img
              className=" w-full p-0 m-0"
              src="https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/d4690a14873a74642d2b.jpg"
            ></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
