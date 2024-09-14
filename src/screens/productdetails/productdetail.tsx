import PhotoListComponets from "../../components/productdetails/photolist";
import ProductInformainTion from "../../components/productdetails/productinformaintion";
import ProductSpecifications from "../../components/productdetails/productspecifications";

/* eslint-disable @typescript-eslint/no-unused-vars */
const ProductDetailView = () => {
  return (
    <div className="bg-gray-100">
      <div className="container w-full mx-auto lg:mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-start py-6 gap-6">
          <div className="inline-block w-full  xl:w-4/5 bg-white md:p-3 p-4">
            <div className="flex flex-col md:gap-7 md:flex-row">
              <PhotoListComponets />
              <ProductInformainTion />
            </div>
          </div>
          <div className="inline-block w-full  xl:w-1/5 bg-white">
            <div className="p-3">
              <div className="block">
                <p className="inline-block space-x-3">
                  <img
                    className="size-6 inline-block"
                    src="https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/freeship.png"
                  ></img>
                  <span className="inline text-lg">Sản phẩm được miễn phí giao hàng</span>
                </p>
              </div>
              <div className="my-5">
                <h6 className="text-lg font-bold text-slate-900">Chính sách bán hàng</h6>
                <div className="my-3">
                  <ul className="space-y-2 text-base text-sky-800">
                    <li className="space-x-3"><i className="far fa-check-circle"></i>
                    <span className="text-black">Cam kết <b>chính hãng</b> 100%</span></li>
                    <li className="space-x-3"><i className="fas fa-dolly-flatbed"></i>
                    <span className="text-black">Miễn phí giao hàng từ 800K</span></li>
                    <li className="space-x-3"><i className="fas fa-undo"></i>
                    <span className="text-black">Đổi trả miễn phí trong <b>10 ngày</b></span></li>
                  </ul>
                </div>
              </div>
              <div className="my-5">
                <h6 className="text-lg font-bold text-slate-900">Dịch vụ khác</h6>
                <div className="my-3">
                  <ul className="space-y-2 text-base text-sky-800">
                    <li className="space-x-3"><i className="fas fa-wrench"></i>
                    <span className="text-black">Sửa chữa<b> đồng giá 150.000đ</b></span></li>
                    <li className="space-x-3"><i className="fas fa-shield-alt"></i>
                    <span className="text-black">Bảo hành tại nhà.</span></li>
                  </ul>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="w-full">
          <ProductSpecifications />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
