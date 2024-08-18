import BannerItem from "./banneritem";

/* eslint-disable @typescript-eslint/no-unused-vars */
const BannerBelow = () => {
  const imgpath = [
    "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/4.jpg",
    "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/2.jpg",
    "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/3.jpg",
    "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/1.jpg",
  ];
  return (
    <section className="z-50">
      <div className="relative">
        <div className="absolute w-full md:-top-12 lg:-top-20">
          <div className=" flex flex-row justify-between items-center  md:gap-3 md:mx-3">
            {imgpath.map((path) => (
              <BannerItem src={path}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBelow;
