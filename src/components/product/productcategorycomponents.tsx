import ProductItem from "../../props/ProductItem";

/* eslint-disable @typescript-eslint/no-unused-vars */
const ProductCategoryComponents = (props: ProductItem) => {
  const salecheck = props.product.saleprice == 0 ? true : false;

  return (
    <div className="inline-block border w-1/2 md:w-1/3 lg:w-1/6 relative 
    transition-all ease-in delay-300 hover:shadow-xl hover:rounded-md hover:-translate-y-2 hover:z-50 "
    >
      <div className="text-center h-40 lg:h-44">
        <a href={props.product.src} className="inline-block">
          <img className="lg:w-full h-auto" src={props.product.img}></img>
        </a>
      </div>
      <div className="px-4 mb-4 md:mb-2 lg:mb-5 h-9 md:h-16 lg:h-10">
        <a href={props.product.src}>
          <p className="text-base lg:text-sm line-clamp-2 md:line-clamp-3 lg:line-clamp-3">{props.product.titel}</p>
        </a>
      </div>
      <div className="px-4 h-16 md:h-12 lg:h-8 mb-3">
        <span className="font-bold md:space-x-4">
          <span
            className={
              "inline-block " +
              (salecheck
                ? "text-lg md:text-xl lg:text-xl text-slate-900"
                : "line-through text-xs md:text-sm md:inline-block lg:text-md text-slate-700")
            }
          >
            {props.product.originalprice} đ
          </span>
          <span
            className={
              "text-lg md:text-xl lg:text-lg text-slate-900 " +
              (salecheck ? "hidden" : "block md:inline-block")
            }
          >
            {props.product.saleprice} đ
          </span>
        </span>
      </div>
      <div className={"absolute top-2 right-5 " + (salecheck ? "hidden" : "")}>
        <div className="bg-contain bg-center bg-no-repeat p-3 bg-[url('https://maytinh3.maugiaodien.com/wp-content/themes/the-gioi-laptop/images/giamgia.png')]">
          <p className="text-white font-bold">-{props.product.discount}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryComponents;
