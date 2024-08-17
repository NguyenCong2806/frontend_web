import CategoryListCol from "./productlistcategory";

/* eslint-disable @typescript-eslint/no-unused-vars */
const HeaderBottom = () => {
  return (
    <div>
      <div>
        <ul>
          <li className="text-base font-bold first:bg-amber-300 first:mr-10 text-white py-2 px-3 inline-block relative group">
            <i className="fas fa-bars"></i>
            <a className="ml-2" href="#">
              Danh mục sản phẩm
            </a>
            <div className="absolute hidden rounded-md group-hover:inline-block top-full left-0 bg-slate-500 z-40">
              <div className="w-52">
                <ul className="mb-3">
                  <li className="group/item transition-all ease-in-out delay-300 py-2 px-3 hover:px-4 relative ">
                    <a href="#" className=" font-thin">
                      <i className="fas fa-laptop"></i>
                      <span className=" ml-2">Laptop</span>
                    </a>
                    <div className="absolute hidden group-hover/item:inline-block 
                    top-0 left-full w-96 h-96 bg-slate-600">
                      <CategoryListCol/>
                    </div>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                      <i className="fas fa-desktop"></i>
                      <span className=" ml-2">Máy tính để bàn</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                      <i className="fas fa-tv"></i>
                      <span className=" ml-2">Màn hình máy tính</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                      <i className="fas fa-video"></i>
                      <span className=" ml-2">Camera</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                    <i className="fas fa-camera-retro"></i>
                      <span className=" ml-2">Thiết bị kỹ thuật số</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                    <i className="fas fa-hdd"></i>
                      <span className=" ml-2">Thiết bị văn phòng</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                    <i className="fab fa-google-drive"></i>
                      <span className=" ml-2">Thiết bị lưu trữ</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                    <i className="fas fa-wifi"></i>
                      <span className=" ml-2">Thiết bị mạng</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                    <i className="fas fa-assistive-listening-systems"></i>
                      <span className=" ml-2">Phụ kiện laptop</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                    <i className="fas fa-screwdriver"></i>
                      <span className=" ml-2">Linh kiện máy tính</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                    <i className="fas fa-weight-hanging"></i>
                      <span className=" ml-2">Túi bọc, túi xách, ba lô</span>
                    </a>
                  </li>
                  <li className="transition-all ease-in-out delay-300 py-2 px-3 hover:px-4">
                    <a href="#" className=" font-thin">
                    <i className="fas fa-mobile"></i>
                      <span className=" ml-2">Sản phẩm Apple</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="text-base font-bold text-white py-2 px-3 inline-block mr-6">
            <i className="fas fa-phone-alt"></i>
            <a className="ml-2" href="#">
              Bán hàng trực tuyến
            </a>
          </li>
          <li className="text-base font-bold text-white py-2 px-3 inline-block mr-6">
            <i className="fas fa-street-view"></i>
            <a className="ml-2" href="#">
              Khuyến mãi
            </a>
          </li>
          <li className="text-base font-bold text-white py-2 px-3 inline-block mr-6">
            <i className="far fa-newspaper"></i>
            <a className="ml-2" href="#">
              Tin tức
            </a>
          </li>
          <li className="text-base font-bold text-white py-2 px-3 inline-block mr-6">
            <i className="fas fa-laptop"></i>
            <a className="ml-2" href="#">
              Xây dựng cấu hình
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
