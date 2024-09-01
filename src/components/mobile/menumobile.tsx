import CategoryListCol from "../headerbottom/productlistcategory";

/* eslint-disable @typescript-eslint/no-unused-vars */
const MenuMobile = () => {
  return (
    <div className="block md:block lg:hidden">
      <div className="container mx-auto px-5 py-3 bg-slate-50">
        <div className="group">
          <i className="fas fa-bars"></i>
          <span className="ml-3 text-lg font-bold text-slate-600">Menu</span>
          <div className="hidden group-hover:inline-block top-0 left-0 bg-white w-full">
            <div className="w-full">
              <ul className="mb-3">
                <li className="group/item transition-all ease-in delay-300 py-2 px-3 relative">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-laptop"></i>
                    <span className=" ml-2">Laptop</span>
                  </a>
                  <div className="w-full hidden group-hover/item:inline-block absolute  bg-slate-300 top-full left-0">
                    <CategoryListCol />
                  </div>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-desktop"></i>
                    <span className=" ml-2">Máy tính để bàn</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-tv"></i>
                    <span className=" ml-2">Màn hình máy tính</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-video"></i>
                    <span className=" ml-2">Camera</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-camera-retro"></i>
                    <span className=" ml-2">Thiết bị kỹ thuật số</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-hdd"></i>
                    <span className=" ml-2">Thiết bị văn phòng</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fab fa-google-drive"></i>
                    <span className=" ml-2">Thiết bị lưu trữ</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-wifi"></i>
                    <span className=" ml-2">Thiết bị mạng</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-assistive-listening-systems"></i>
                    <span className=" ml-2">Phụ kiện laptop</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-screwdriver"></i>
                    <span className=" ml-2">Linh kiện máy tính</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-weight-hanging"></i>
                    <span className=" ml-2">Túi bọc, túi xách, ba lô</span>
                  </a>
                </li>
                <li className="transition-all ease-in-out delay-300 py-2 px-3">
                  <a href="#" className=" font-thin">
                    <i className="fas fa-mobile"></i>
                    <span className=" ml-2">Sản phẩm Apple</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuMobile;
