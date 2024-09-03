import { currencyformat } from "../../utilities/currencyformat";

const ProductInformainTion = () => {
  return (
    <div className="inline-block w-full mt-2 md:w-7/12 lg:w-2/3">
      <div className="text-slate-400 font-medium">
        <a>TRANG CHỦ</a>
        <span> / </span>
        <a>LAPTOP</a>
        <span> / </span>
        <a>LAPTOP ACER</a>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 text-justify md:text-start">
          ASUS ROG Zephyrus M GU502GU-AZ090T Gaming
        </h1>
      </div>
      <div className="my-3">
        <ul className="inline-block text-slate-600 space-x-1 mr-3">
          <li className="inline-block text-yellow-500">
            <i className="far fa-star"></i>
          </li>
          <li className="inline-block text-yellow-500">
            <i className="far fa-star"></i>
          </li>
          <li className="inline-block text-yellow-500">
            <i className="far fa-star"></i>
          </li>
          <li className="inline-block text-yellow-500">
            <i className="far fa-star"></i>
          </li>
          <li className="inline-block text-yellow-500">
            <i className="far fa-star"></i>
          </li>
        </ul>
        <a href="#" className="inline-block text-blue-800 hover:text-red-500">
          (1 đánh giá của khách hàng)
        </a>
      </div>
      <div className=" space-x-5">
        <p className="inline text-lg font-bold text-red-500 line-through">
          {currencyformat(34600000)}
        </p>
        <p className="inline text-2xl font-bold text-red-500">
          {currencyformat(32500000)}
        </p>
      </div>
      <div className="my-5 space-y-1 lg:space-x-5">
        <label className="block lg:inline-block border py-2 px-4 rounded-lg">
          <input
            type="radio"
            name="attribute_pa_cau-hinh"
            value="core-i5-ram-8gb-ssd-128gb"
          ></input>
          <span className="ml-3 text-base font-bold text-slate-800">
            Core I5 / Ram 8GB / SSD 128GB
          </span>
          <span className="block text-center line-through text-base font-medium text-red-700">
            {currencyformat(34600000)}
          </span>
          <span className=" block text-center text-2xl font-bold text-red-700">
            {currencyformat(32500000)}
          </span>
        </label>
        <label className="block lg:inline-block border py-2 px-4 rounded-lg">
          <input
            type="radio"
            name="attribute_pa_cau-hinh"
            value="core-i7-ram-16gb-ssd-256gb"
          ></input>
          <span className=" ml-3 text-base font-bold text-slate-800">
            Core I7 / Ram 16GB / SSD 256 GB
          </span>
          <span className=" block text-center line-through text-base font-medium text-red-700">
            {currencyformat(35900000)}
          </span>
          <span className=" block text-center text-2xl font-bold text-red-700">
            {currencyformat(31600000)}
          </span>
        </label>
      </div>
      <div className="text-justify">
        <p>
          Mainboard: HP Chipset Q87 – 4 Khe Ram<br></br> CPU: Intel® Xeon®
          Processor Core I7<br></br> Tản Nhiệt Khí: HP 800 G1 Tiêu Chuẩn{" "}
          <br></br>RAM: 16GB DDR3 1600Mhz <br></br>Ổ cứng: SSD 256G + HDD 1TB
          NEW <br></br>Card đồ họa: NVIDIA Geforce GTX 1650 4G DDR5 128bit 896
          CUDA Core
        </p>
      </div>
      <div className="my-4">
        <div className="w-full space-y-3 lg:space-x-2">
          <button className="w-full lg:w-1/3 lg:inline-block bg-red-600 py-2 px-10 
          md:px-2 rounded-md text-white hover:bg-red-700 focus:bg-red-900">
            <span className="mr-2">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <span className="text-lg md:text-md font-bold">Thêm vào giỏ</span>
            <p className=" text-xs my-1">Giao tận nơi, lắp đặt miễn phí</p>
          </button>
          <button className="w-full lg:w-1/3 lg:inline-block bg-red-600 py-2 px-10 rounded-md text-white hover:bg-red-700 focus:bg-red-900">
            <span className="mr-2">
              <i className="far fa-credit-card"></i>
            </span>
            <span className="text-lg md:text-md font-bold">Thanh toán ngay</span>
            <p className="text-xs  my-1">Giao tận nơi, lắp đặt miễn phí</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInformainTion;
