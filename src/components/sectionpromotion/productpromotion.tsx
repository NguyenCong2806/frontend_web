/* eslint-disable @typescript-eslint/no-unused-vars */
const ProductPromotion = () => {
  return (
    <div className="inline-block m-1 bg-white rounded-md p-3 mt-12 md:mt-24 relative">
      <div className="text-center">
        <a href="#">
          <img className="w-56" src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/32133_tuf_gaming_h3_red_04-168x168.png"></img>
        </a>
      </div>
      <div className="my-6">
        <p className=" text-lg">
          <a href="#">Tai nghe Asus TUF H3 Red</a>
        </p>
      </div>
      <div>
        <span className="font-bold space-x-2  md:space-x-4">
          <span className="text-sm text-slate-700 line-through">1.200.000 đ</span>
          <span className="text-slate-900">900.000 đ</span>
        </span>
      </div>
      <div className="absolute w-14 h-14 rounded-full bg-red-700 top-2 right-2">
          <p className="ml-2 my-4 text-white font-bold">-18%</p>
      </div>
    </div>
  );
};

export default ProductPromotion;
