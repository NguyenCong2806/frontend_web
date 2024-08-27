/* eslint-disable @typescript-eslint/no-unused-vars */
const ProductComponents = () => {
  return (
    <div className="container mx-auto w-full my-8">
      <div className="flex flex-row justify-start items-center flex-wrap px-1">
        <div className="inline-block border w-1/2 md:w-1/3 lg:w-1/4 relative">
          <div className="mb-6 text-center">
            <a href="#" className="inline-block">
              <img
                className="lg:w-60 lg:h-60"
                src="https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/isures-prod-11-168x168.jpg"
              ></img>
            </a>
          </div>
          <div className="px-4">
            <a href="#">
              <p className="text-base lg:text-lg lg:h-10">
                Case máy tính Golden Field H3B – Mid Tower (Đen)
              </p>
            </a>
            <div className="my-3">
              <span className="font-bold md:space-x-4">
                <span className="text-xs block md:text-sm md:inline-block lg:text-md text-slate-700 line-through">
                  1.200.000 đ
                </span>
                <span className="text-lg block md:text-xl md:inline-block lg:text-xl text-slate-900">
                  900.000 đ
                </span>
              </span>
            </div>
          </div>
          <div className="absolute w-12 h-12 rounded-full bg-red-700 top-2 right-2">
            <p className="mx-1 my-3 text-white font-bold">-18%</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ProductComponents;
