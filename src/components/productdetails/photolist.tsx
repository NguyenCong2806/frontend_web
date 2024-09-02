/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Slider from "react-slick";
const PhotoListComponets = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <div className="w-full md:w-1/3">
      <div className="p-2">
        <Slider asNavFor={nav2} ref={(slider1: any) => setNav1(slider1)}
             slidesToShow={1}
            >
          <div className="inline-block border-2 p-2 rounded">
            <img className="inline-block w-full h-full" src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/ASUS-ROG-Zephyrus-M-GU502GU-1-510x510-1.jpg"></img>
          </div>
          <div className="inline-block border-2 overflow-hidden p-2 rounded">
            <img src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/Acer-Predator-Helios-300-PH315-51-7533-Gaming-Laptop-510x510-1.jpg"></img>
          </div>
          <div className="inline-block border-2 overflow-hidden p-2 rounded">
            <img src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/ASUS-ProArt-StudioBook-Pro-X-W730G2T-H8007T-Laptop-0-510x510-1.jpg"></img>
          </div>
          <div className="inline-block border-2 overflow-hidden p-2 rounded">
            <img src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/ASUS-ROG-Strix-G-G531GD-AL025T-Laptop-510x510-1.jpg"></img>
          </div>
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={(slider2: any) => setNav2(slider2)}
          slidesToShow={4}
          infinite = {false}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider2"
        >
          <div className="inline-block w-16 p-3">
            <img className=" w-full h-full" src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/ASUS-ROG-Zephyrus-M-GU502GU-1-510x510-1-168x168.jpg"></img>
          </div>
          <div className="inline-block w-16 p-3">
            <img src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/Acer-Predator-Helios-300-PH315-51-7533-Gaming-Laptop-510x510-1-168x168.jpg"></img>
          </div>
          <div className="inline-block w-16 p-3">
            <img src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/ASUS-ProArt-StudioBook-Pro-X-W730G2T-H8007T-Laptop-0-510x510-1-168x168.jpg"></img>
          </div>
          <div className="inline-block w-16 p-3">
            <img src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/ASUS-ROG-Strix-G-G531GD-AL025T-Laptop-510x510-1-168x168.jpg"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PhotoListComponets;
