import PhotoListComponets from "../../components/productdetails/photolist";

/* eslint-disable @typescript-eslint/no-unused-vars */
const ProductDetailView = () => {
  return (
    <div className="container mx-auto w-full my-8">
      <div className="flex flex-row justify-between items-center">
        <div className="inline-block w-full md:w-4/5">
          <PhotoListComponets />
        </div>
        <div className="inline-block w-1/5 h-5 bg-slate-500">
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
