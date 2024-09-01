import { currencyformat } from "../../utilities/currencyformat";

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
          <span className="text-sm text-slate-700 line-through">{currencyformat(1200000)}</span>
          <span className="text-slate-900">{currencyformat(900000)}</span>
        </span>
      </div>
      <div className={"absolute top-2 right-3 "}>
        <div className="bg-contain bg-center bg-no-repeat p-3 bg-[url('https://maytinh3.maugiaodien.com/wp-content/themes/the-gioi-laptop/images/giamgia.png')]">
          <p className="text-white font-bold">-18%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPromotion;
