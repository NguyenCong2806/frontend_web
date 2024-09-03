import PhotoListComponets from "../../components/productdetails/photolist";
import ProductInformainTion from "../../components/productdetails/productinformaintion";

/* eslint-disable @typescript-eslint/no-unused-vars */
const ProductDetailView = () => {
  return (
    <div className="bg-gray-100">
      <div className="container w-full md:mx-4 lg:mx-auto ">
        <div className="flex flex-row justify-between items-center py-6 gap-6">
          <div className="inline-block w-full md:w-5/6 lg:w-4/5 bg-white md:p-3 p-4">
            <div className=" flex flex-col md:gap-7 md:flex-row">
              <PhotoListComponets />
              <ProductInformainTion />
            </div>
          </div>
          <div className="inline-block w-full md:w-1/6 lg:w-1/5 h-5 bg-slate-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
